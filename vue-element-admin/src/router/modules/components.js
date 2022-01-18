/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const componentsRouter = {
  path: '/support',
  component: Layout,
  redirect: 'noRedirect',
  name: 'Support',
  meta: {
    title: '辅助管理',
    icon: 'support'
  },
  children: [
    {
      path: 'link',
      component: () => import('@/views/components-demo/tinymce'),
      name: 'Link',
      meta: { title: '友情链接管理' }
    },
    {
      path: 'copyright',
      component: () => import('@/views/components-demo/markdown'),
      name: 'Copyright',
      meta: { title: '版权信息管理' }
    },
    {
      path: 'file',
      component: () => import('@/views/components-demo/json-editor'),
      name: 'File',
      meta: { title: '文件管理' }
    },
    {
      path: 'split-pane',
      component: () => import('@/views/components-demo/split-pane'),
      name: 'SplitpaneDemo',
      meta: { title: '作者信息管理' }
    },
    {
      path: 'editor',
      component: () => import('@/views/components-demo/avatar-upload'),
      name: 'Editor',
      meta: { title: '编辑信息管理' }
    },
    {
      path: 'common',
      component: () => import('@/views/components-demo/dropzone'),
      name: 'Common',
      meta: { title: '常用信息管理' }
    },
    {
      path: 'sticky',
      component: () => import('@/views/components-demo/sticky'),
      name: 'StickyDemo',
      meta: { title: '宣传广告位管理' }
    },
    {
      path: 'count-to',
      component: () => import('@/views/components-demo/count-to'),
      name: 'CountToDemo',
      meta: { title: 'Count To' }
    },
    {
      path: 'mixin',
      component: () => import('@/views/components-demo/mixin'),
      name: 'ComponentMixinDemo',
      meta: { title: 'Component Mixin' }
    },
    {
      path: 'back-to-top',
      component: () => import('@/views/components-demo/back-to-top'),
      name: 'BackToTopDemo',
      meta: { title: 'Back To Top' }
    },
    {
      path: 'drag-dialog',
      component: () => import('@/views/components-demo/drag-dialog'),
      name: 'DragDialogDemo',
      meta: { title: 'Drag Dialog' }
    },
    {
      path: 'drag-select',
      component: () => import('@/views/components-demo/drag-select'),
      name: 'DragSelectDemo',
      meta: { title: 'Drag Select' }
    },
    {
      path: 'dnd-list',
      component: () => import('@/views/components-demo/dnd-list'),
      name: 'DndListDemo',
      meta: { title: 'Dnd List' }
    },
    {
      path: 'drag-kanban',
      component: () => import('@/views/components-demo/drag-kanban'),
      name: 'DragKanbanDemo',
      meta: { title: 'Drag Kanban' }
    }
  ]
}

export default componentsRouter
