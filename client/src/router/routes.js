export default [
  {
    path: '/',
    name: 'search',
    component: () => import('@/views/Search.vue'),
  },
  {
    path: '/profile/:platform/:gamertag',
    name: 'profile',
    props: true,
    component: () => import('@/views/Profile.vue'),
  },
];
