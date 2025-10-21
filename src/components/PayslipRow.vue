<template>
  <TableRow 
    class="border-b border-gray-100 hover:bg-gray-50 cursor-pointer"
    @click="$emit('toggleExpanded', payslip.id)"
  >
    <TableCell class="text-center sticky left-0 bg-white z-10">
      <div class="flex items-center justify-center">
        <svg 
          class="w-4 h-4 text-gray-400 transition-transform duration-200"
          :class="{ 'rotate-180': isExpanded }"
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
        </svg>
        <span class="ml-2 font-medium text-sm lg:text-base">{{ payslip.number }}</span>
      </div>
    </TableCell>
    <TableCell class="min-w-[120px]">
      <span class="text-[#CC4C19] font-medium text-sm lg:text-base">{{ payslip.period }}</span>
    </TableCell>
    <TableCell class="min-w-[200px]">
      <span class="text-gray-700 text-sm lg:text-base truncate block">{{ payslip.filename }}</span>
    </TableCell>
    <TableCell class="text-right min-w-[140px]">
      <span class="bg-blue-100 text-blue-800 px-2 lg:px-3 py-1 rounded-full font-medium text-xs lg:text-sm">
        {{ payslip.grossSalary }}
      </span>
    </TableCell>
    <TableCell class="text-right min-w-[140px]">
      <span class="bg-green-100 text-green-800 px-2 lg:px-3 py-1 rounded-full font-medium text-xs lg:text-sm">
        {{ payslip.netPay }}
      </span>
    </TableCell>
    <TableCell class="text-center sticky right-0 bg-white z-10">
      <div class="p-1">
        <svg class="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
        </svg>
      </div>
    </TableCell>
  </TableRow>
  
  <TableRow v-if="isExpanded" class="border-b border-gray-200">
    <TableCell colspan="6" class="p-0">
      <div class="p-2 lg:p-4">
        <PayslipDesign :payslip="payslip" />
      </div>
    </TableCell>
  </TableRow>
</template>

<script setup lang="ts">
import { TableCell, TableRow } from '@/components/ui/table'
import PayslipDesign from './PayslipDesign.vue'
import type { Payslip } from '@/composables/usePayslips'

interface Props {
  payslip: Payslip
  isExpanded: boolean
}

defineProps<Props>()

defineEmits<{
  toggleExpanded: [payslipId: string]
}>()
</script>
