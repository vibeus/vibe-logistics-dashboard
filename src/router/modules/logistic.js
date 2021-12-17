import Layout from '/@/layout/Layout.vue';

export const logisticRouter = [
  {
    path: '/logistic',
    component: Layout,
    redirect: '/logistic/order',
    meta: { title: 'Logistics', icon: 'logistics', noCache: true },
    children: [
      {
        path: 'order',
        component: () => import('/@/views/logistic/Order.vue'),
        name: 'Order',
        meta: { title: 'Order', icon: 'order' }
      },
      {
        path: 'inventory',
        component: () => import('/@/views/logistic/Inventory.vue'),
        name: 'Inventory',
        meta: { title: 'Inventory', icon: 'warehouse' }
      },
      {
        path: 'freight',
        component: () => import('/@/views/logistic/Freight.vue'),
        name: 'Freight',
        meta: { title: 'Freight', icon: 'freight' }
      }
    ]
  },
];