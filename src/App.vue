<script setup lang="ts">
import Sidebar from './components/Sidebar.vue'
import { SidebarProvider, SidebarInset, SidebarTrigger } from '@/components/ui/sidebar'
import { Separator } from '@/components/ui/separator'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const pageTitle = computed(() => {
  return route.name as string || 'Dashboard'
})
</script>

<template>
  <SidebarProvider>
    <Sidebar />
    <SidebarInset>
      <header class="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
        <div class="flex items-center gap-2 px-4">
          <SidebarTrigger class="-ml-1" />
          <Separator orientation="vertical" class="mr-2 h-4" />
          <h1 class="text-lg font-semibold">{{ pageTitle }}</h1>
        </div>
      </header>
      <div class="flex flex-1 flex-col gap-4 p-4 pt-0">
        <router-view />
      </div>
    </SidebarInset>
  </SidebarProvider>
</template>
