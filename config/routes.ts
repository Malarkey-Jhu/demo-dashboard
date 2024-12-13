/**
 * @name Route configuration for umi
 * @doc https://umijs.org/docs/guides/routes
 * @doc https://umijs.org/docs/max/layout-menu
 */
export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        path: '/user/login',
        layout: false,
        name: 'login',
        component: './user/login',
      },
      {
        path: '/user',
        redirect: '/user/login',
      }
    ],
  },
  {
    path: '/cluster',
    name: 'cluster',
    icon: 'dashboard',
    component: './cluster',
  },
  {
    path: '/metrics',
    name: 'metrics',
    icon: 'dashboard',
    component: './metrics',
  },
  {
    path: '/settings',
    name: 'settings',
    icon: 'dashboard',
    component: './settings',
  },
 
  {
    path: '/jobs',
    name: 'jobs',
    icon: 'dashboard',
    component: './jobs',
  },

  {
    path: '/license',
    name: 'license',
    icon: 'KeyOutlined',
    component: './license',
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    icon: 'dashboard',
    hideInMenu: true,
    routes: [
      {
        path: '/dashboard',
        redirect: '/dashboard/analysis',
      },
      {
        name: 'analysis',
        icon: 'smile',
        path: '/dashboard/analysis',
        component: './dashboard/analysis',
      },
      {
        name: 'monitor',
        icon: 'smile',
        path: '/dashboard/monitor',
        component: './dashboard/monitor',
      },
      {
        name: 'workplace',
        icon: 'smile',
        path: '/dashboard/workplace',
        component: './dashboard/workplace',
      },
    ],
  },
  {
    name: 'exception',
    icon: 'warning',
    path: '/exception',
    hideInMenu: true,
    routes: [
      {
        path: '/exception',
        redirect: '/exception/403',
      },
      {
        name: '403',
        icon: 'smile',
        path: '/exception/403',
        component: './exception/403',
      },
      {
        name: '404',
        icon: 'smile',
        path: '/exception/404',
        component: './exception/404',
      },
      {
        name: '500',
        icon: 'smile',
        path: '/exception/500',
        component: './exception/500',
      },
    ],
  },
  // {
  //   name: 'account',
  //   icon: 'user',
  //   path: '/account',
  //   routes: [
  //     {
  //       path: '/account',
  //       redirect: '/account/center',
  //     },
  //     {
  //       name: 'center',
  //       icon: 'smile',
  //       path: '/account/center',
  //       component: './account/center',
  //     },
  //     {
  //       name: 'settings',
  //       icon: 'smile',
  //       path: '/account/settings',
  //       component: './account/settings',
  //     },
  //   ],
  // },
  {
    path: '/',
    redirect: '/cluster',
  },
  {
    component: '404',
    path: '/*',
  },
];
