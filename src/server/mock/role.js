import { deepClone } from './util';
import { asyncRoutes, constantRoutes } from './routes';

const routes = deepClone([...constantRoutes, ...asyncRoutes]);

const roles = [
  {
    key: 'admin',
    name: 'admin',
    description: 'Super Administrator. Have access to view all pages.',
    routes: routes
  },
  {
    key: 'editor',
    name: 'editor',
    description: 'Normal Editor. Can see all pages except permission page',
    routes: routes.filter(i => i.path !== '/permission')// just a mock
  },
  {
    key: 'visitor',
    name: 'visitor',
    description: 'Just a visitor. Can only see the home page and the document page',
    routes: [{
      path: '',
      redirect: 'dashboard',
      children: [
        {
          path: 'dashboard',
          name: 'Dashboard',
          meta: { title: 'dashboard', icon: 'dashboard' }
        }
      ]
    }]
  }
];

export default [
  // mock get all routes form server
  {
    url: '/api/routes',
    method: 'get',
    response: () => {
      return {
        code: 20000,
        data: routes
      };
    }
  },

  // mock get all roles form server
  {
    url: '/api/roles',
    method: 'get',
    response: () => {
      return {
        code: 20000,
        data: roles
      };
    }
  },

  // add role
  {
    url: '/api/role',
    method: 'post',
    response: {
      code: 20000,
      data: {
        key: 400
      }
    }
  },

  // update role
  {
    url: RegExp('/api/role/[A-Za-z0-9]'),
    method: 'put',
    response: {
      code: 20000,
      data: {
        status: 'success'
      }
    }
  },

  // delete role
  {
    url: RegExp('/api/role/[A-Za-z0-9]'),
    method: 'delete',
    response: {
      code: 20000,
      data: {
        status: 'success'
      }
    }
  }
];
