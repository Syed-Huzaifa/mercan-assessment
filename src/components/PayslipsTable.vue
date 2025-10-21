<template>
  <div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
    <div class="overflow-x-auto">
      <Table class="min-w-full">
        <TableHeader>
          <TableRow class="border-b border-gray-200">
            <TableHead class="w-12 text-center sticky left-0 bg-white z-10">#</TableHead>
            <TableHead class="text-left min-w-[120px]">Period</TableHead>
            <TableHead class="text-left min-w-[200px]">Payslips</TableHead>
            <TableHead class="text-right min-w-[140px]">Gross salary</TableHead>
            <TableHead class="text-right min-w-[140px]">Net pay</TableHead>
            <TableHead class="w-12 sticky right-0 bg-white z-10"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <template v-for="(payslip, index) in payslips" :key="payslip.id">
            <PayslipRow 
              :payslip="payslip"
              :is-expanded="expandedPayslips.has(payslip.id)"
              @toggle-expanded="toggleExpanded"
            />
          </template>
        </TableBody>
      </Table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { 
  Table, 
  TableBody, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table'
import PayslipRow from './PayslipRow.vue'
import type { Payslip } from '@/composables/usePayslips'

interface Props {
  payslips: Payslip[]
  expandedPayslips: Set<string>
}

defineProps<Props>()

const emit = defineEmits<{
  toggleExpanded: [payslipId: string]
}>()

const toggleExpanded = (payslipId: string) => {
  emit('toggleExpanded', payslipId)
}
</script>
