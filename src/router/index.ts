import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/device',
    },
    {
      path: '/device',
      name: 'device',
      component: () => import('@/views/DeviceView.vue'),
    },
    {
      path: '/media',
      name: 'media',
      component: () => import('@/views/MediaView.vue'),
      redirect: { name: 'historyProjector' },
      children: [
        /** 非凡历程展区 */
        {
          path: 'history',
          name: 'history',
          children: [
            // 投影仪
            {
              path: 'projector',
              name: 'historyProjector',
              component: () => import('@/views/media/ProjectorView.vue'),
            },
            // 门禁
            {
              path: 'entrance',
              name: 'historyEntrance',
              component: () => import('@/views/media/EntranceView.vue'),
            },
          ],
        },

        /** 创新研发展区 */
        {
          path: 'innovation',
          name: 'innovation',
          children: [
            // 大屏-技术平台
            {
              path: 'screen',
              name: 'innovationScreen',
              component: () => import('@/views/media/ScreenView.vue'),
              props: { name: 'innovationScreen' },
            },
            // 一体机-研发管线
            {
              path: 'aio/pipeline',
              name: 'pipelineAio',
              component: () => import('@/views/media/AIOView.vue'),
              props: { name: 'pipelineAio' },
            },
            // 一体机-合作生态
            {
              path: 'aio/cooperation',
              name: 'cooperationAio',
              component: () => import('@/views/media/AIOView.vue'),
              props: { name: 'cooperationAio' },
            },
          ],
        },

        /** 多元业务展区 */
        {
          path: 'business',
          name: 'business',
          children: [
            // 大屏-生长激素
            {
              path: 'screen',
              name: 'businessScreen',
              component: () => import('@/views/media/ScreenView.vue'),
              props: { name: 'businessScreen' },
            },
            // 一体机-儿童神经
            {
              path: 'aio/neuro',
              name: 'neuroAio',
              component: () => import('@/views/media/AIOView.vue'),
              props: { name: 'neuroAio' },
            },
            // 一体机-体重管理
            {
              path: 'aio/weight',
              name: 'weightAio',
              component: () => import('@/views/media/AIOView.vue'),
              props: { name: 'weightAio' },
            },
            // 一体机-足脊健康
            {
              path: 'aio/feet',
              name: 'feetAio',
              component: () => import('@/views/media/AIOView.vue'),
              props: { name: 'feetAio' },
            },
            // 一体机-女性健康
            {
              path: 'aio/female',
              name: 'femaleAio',
              component: () => import('@/views/media/AIOView.vue'),
              props: { name: 'femaleAio' },
            },
            // 一体机-皮肤医美
            {
              path: 'aio/skin',
              name: 'skinAio',
              component: () => import('@/views/media/AIOView.vue'),
              props: { name: 'skinAio' },
            },
            // 一体机-肿瘤
            {
              path: 'aio/tumour',
              name: 'tumourAio',
              component: () => import('@/views/media/AIOView.vue'),
              props: { name: 'tumourAio' },
            },
            // 一体机-内分泌&风湿免疫
            {
              path: 'aio/immunity',
              name: 'immunityAio',
              component: () => import('@/views/media/AIOView.vue'),
              props: { name: 'immunityAio' },
            },
          ],
        },

        /** 产业运营展区 */
        {
          path: 'operation',
          name: 'operation',
          children: [
            // 大屏-生产基地
            {
              path: 'screen',
              name: 'operationScreen',
              component: () => import('@/views/media/ScreenView.vue'),
              props: { name: 'operationScreen' },
            },
          ],
        },
      ],
    },
  ],
})

export default router
