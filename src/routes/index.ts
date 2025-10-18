import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { 
      path: '/', 
      name: 'Dashboard',
      component: () => import('../views/Dashboard.vue') 
    },
    { 
      path: '/my-information', 
      name: 'My information',
      component: () => import('../views/MyInformation.vue') 
    },
    { 
      path: '/my-payslips', 
      name: 'My payslips',
      component: () => import('../views/MyPayslips.vue') 
    },
    { 
      path: '/timesheet', 
      name: 'Timesheet',
      component: () => import('../views/Timesheet.vue') 
    },
    { 
      path: '/leaves', 
      name: 'Leaves',
      component: () => import('../views/Leaves.vue') 
    },
    { 
      path: '/benefits', 
      name: 'Benefits',
      component: () => import('../views/Benefits.vue') 
    },
    { 
      path: '/documents', 
      name: 'Documents',
      component: () => import('../views/Documents.vue') 
    },
    { 
      path: '/org-chart', 
      name: 'Organizational chart',
      component: () => import('../views/OrgChart.vue') 
    },
    { 
      path: '/my-team', 
      name: 'My Team',
      component: () => import('../views/MyTeam.vue') 
    },
  ],
})

export default router;