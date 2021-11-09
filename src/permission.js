import router from './router/index';
import store from './store/index';
import { ElMessage } from 'element-plus';
import NProgress from 'nprogress'; // progress bar
import 'nprogress/nprogress.css'; // progress bar style
import { getToken } from '/@/assets/utils/auth'; // get token from cookie
import getPageTitle from '/@/assets/utils/get-page-title';

NProgress.configure({ showSpinner: false }); // NProgress Configuration

let whiteList = ['/login', '/auth-redirect']; // no redirect whitelist
const cssPageWhiteList = ['/eye-ball', '/hover-card', '/starry-sky'];
whiteList = whiteList.concat(cssPageWhiteList);

router.beforeEach(async(to, from, next) => {
  // start progress bar
  NProgress.start();

  // set page title
  document.title = getPageTitle(to.meta.title);

  // determine whether the user has logged in
  const hasToken = getToken();
  if (hasToken) {
    if (to.path === '/login') {
      // if is logged in, redirect to the home page
      next({ path: '/' });
      NProgress.done(); // hack: https://github.com/PanJiaChen/vue-element-admin/pull/2939
    } else {
      // determine whether the user has obtained his permission roles through getInfo
      const hasRoles = store.getters.roles && store.getters.roles.length > 0;
      if (hasRoles) {
        next();
      } else {
        try {
          // get user info
          // note: roles must be a object array! such as: ['admin'] or ,['developer','editor']
          const { roles } = await store.dispatch('user/getInfo');

          // generate accessible routes map based on roles

          const accessRoutes = await store.dispatch('permission/generateRoutes', roles);
          // dynamically add accessible routes
          router.addRoute(accessRoutes);
          console.log('to: ', to);
          console.log('next: ', next);
          // hack method to ensure that addRoutes is complete
          // set the replace: true, so the navigation will not leave a history record
          next({ ...to, replace: true });
        } catch (error) {
          console.log('error: ', error);
          // remove token and go to login page to re-login
          await store.dispatch('user/resetToken');
          ElMessage({
            message: error.message,
            type: 'error',
            duration: 5 * 1000
          });
          next(`/login?redirect=${to.path}`);
          NProgress.done();
        }
      }
    }
  } else {
    /* has no token*/
    console.log('No user token');
    if (whiteList.indexOf(to.path) !== -1) {
      // in the free login whitelist, go directly
      next();
    } else {
      // other pages that do not have permission to access are redirected to the login page.
      next(`/login?redirect=${to.path}`);
      NProgress.done();
    }
  }
});

router.afterEach(() => {
  // finish progress bar
  NProgress.done();
});