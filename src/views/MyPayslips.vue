<template>
  <div class="min-h-screen rounded-b-lg bg-[#F5F5F5]">
    <PayslipsHeader 
      v-model:selected-currency="selectedCurrency"
      :currency-counts="currencyCounts"
    />

    <div class="px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6">
      <div class="mb-4 sm:mb-6">
        <h3 class="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2">My payslips</h3>
      </div>

      <div class="flex flex-col sm:flex-row sm:items-center justify-between mb-4 sm:mb-6 gap-3 sm:gap-0">
        <div class="text-xs sm:text-sm lg:text-base text-gray-600">Payslips > 2025</div>
        <button @click="openSalaryEvolutionDialog" class="p-2 sm:p-2 bg-[#1A3E6D] text-white rounded-lg shadow-sm hover:bg-[#1A3E6D]/90 transition-colors self-start sm:self-auto">
          <img :src="AnalyticsIcon" alt="Analytics" class="w-4 h-4 filter brightness-0 invert" />
        </button>
      </div>

      <div class="w-full overflow-hidden">
        <PayslipsTable 
          :payslips="filteredPayslips"
          :expanded-payslips="expandedPayslips"
          @toggle-expanded="toggleExpanded"
        />
      </div>
    </div>

    <SalaryEvolutionDialog ref="salaryEvolutionDialogRef" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import PayslipsHeader from '@/components/PayslipsHeader.vue'
import PayslipsTable from '@/components/PayslipsTable.vue'
import SalaryEvolutionDialog from '@/components/SalaryEvolutionDialog.vue'
import AnalyticsIcon from '@/assets/icons/salary-evolution.svg'
import { usePayslips } from '@/composables/usePayslips'

const {
  selectedCurrency,
  expandedPayslips,
  filteredPayslips,
  currencyCounts,
  toggleExpanded
} = usePayslips()

const salaryEvolutionDialogRef = ref()

const openSalaryEvolutionDialog = () => {
  salaryEvolutionDialogRef.value?.open()
}
</script>