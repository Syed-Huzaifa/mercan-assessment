<template>
  <Sidebar variant="sidebar" class="border-r">
    <SidebarHeader class="bg-[#001738] text-white p-4">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 bg-white rounded-full flex items-center justify-center">
            <div class="w-6 h-6">
              <div class="w-6 h-6 bg-white rounded-full"><span class="text-[#CC4C19] font-bold text-sm text-center">HRB</span></div>
            </div>
          </div>
          <div class="text-sm">
            <div class="font-semibold">Employee Self Service</div>
          </div>
        </div>
        <SidebarTrigger class="border border-gray-300 text-white rounded-lg px-2 py-1" />
      </div>
    </SidebarHeader>
    
    <div class="flex flex-col gap-6 items-center justify-center p-4 bg-white border-b border-[#001738]">
      <div class="flex flex-col items-center justify-center gap-2 mb-3">
          <img :src="LogoMarkIcon" alt="Logo" class="w-12 h-12 items-center" />
          <div class="font-bold text-[#536D82]">Boring Company</div>
          <div class="text-sm text-[#001738] font-semibold">Mercans USA Ltd.</div>
      </div>
      
      <div class="flex items-center justify-center gap-12 mb-3">
        <div class="relative">
          <img :src="LaunchpadIcon" alt="Launchpad" class="h-5 w-5" />
        </div>
        <div class="relative">
          <img :src="DocumentsIcon" alt="Documents" class="h-5 w-5" />
          <div class="absolute -top-1 -right-1 w-2 h-2 bg-orange-500 rounded-full"></div>
        </div>
        <div class="relative">
          <img :src="NotificationIcon" alt="Notifications" class="h-5 w-5" />
          <div class="absolute -top-1 -right-1 w-2 h-2 bg-orange-500 rounded-full"></div>
        </div>
      </div>
    </div>
    
    <SidebarContent class="bg-white">
      <SidebarMenu class="p-2">
        <SidebarMenuItem v-for="item in navigationItems" :key="item.id">
          <SidebarMenuButton 
            as-child
            :is-active="route.path === item.path"
            class="w-full justify-start gap-3 p-6 rounded-lg"
            :class="route.path === item.path ? '!bg-orange-100 !text-[#001738] !border !border-[#001738]' : '!text-gray-700 hover:!text-[#001738] hover:!bg-gray-100'"
          >
            <router-link :to="item.path" class="flex items-center gap-3 w-full">
              <img :src="item.icon" :alt="item.label" class="h-5 w-5" />
              <span class="font-medium">{{ item.label }}</span>
            </router-link>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarContent>
    
    <SidebarFooter class="bg-gray-50 border-t p-4">
      <div class="text-center text-sm text-gray-500">
        Mercans © 2025
      </div>
    </SidebarFooter>
  </Sidebar>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { 
  Sidebar, 
  SidebarContent, 
  SidebarFooter, 
  SidebarHeader, 
  SidebarMenu, 
  SidebarMenuButton, 
  SidebarMenuItem,
  SidebarTrigger
} from '@/components/ui/sidebar'
import { Separator } from '@/components/ui/separator'
import { useRoute } from 'vue-router'
import menuLinksData from '@/data/menuLinks.json'

// Import custom SVG icons
import DashboardIcon from '@/assets/icons/dashboard.svg'
import EmployeesIcon from '@/assets/icons/employees.svg'
import LaunchpadIcon from '@/assets/icons/launchpad.svg'
import TimeEntryIcon from '@/assets/icons/time-entry.svg'
import LeavesIcon from '@/assets/icons/leaves.svg'
import BenefitsIcon from '@/assets/icons/benefits.svg'
import DocumentsIcon from '@/assets/icons/documents.svg'
import OrgChartIcon from '@/assets/icons/organizational-chart.svg'
import MyTeamIcon from '@/assets/icons/my-team.svg'
import LogoMarkIcon from '@/assets/icons/Logo-mark.svg'
import NotificationIcon from '@/assets/icons/notification.svg'

interface MenuLink {
  ordinal: number
  icon: string
  title: string
  path: string
  enabled: boolean
}

interface NavigationItem {
  id: string
  label: string
  path: string
  icon: any
  enabled: boolean
}

const route = useRoute()

const iconMap: Record<string, any> = {
  'dashboard': DashboardIcon,
  'employees': EmployeesIcon,
  'launchpad': LaunchpadIcon,
  'time-entry': TimeEntryIcon,
  'leaves': LeavesIcon,
  'benefits': BenefitsIcon,
  'documents': DocumentsIcon,
  'organizational-chart': OrgChartIcon,
  'my-team': MyTeamIcon
}

const navigationItems = computed<NavigationItem[]>(() => {
  return menuLinksData
    .filter((item: MenuLink) => item.enabled)
    .sort((a: MenuLink, b: MenuLink) => a.ordinal - b.ordinal)
    .map((item: MenuLink) => ({
      id: item.title,
      label: item.title.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
      path: `/${item.path}`,
      icon: iconMap[item.icon] || DashboardIcon,
      enabled: item.enabled
    }))
})
</script>

