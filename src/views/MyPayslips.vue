<template>
  <div class="min-h-screen rounded-b-lg bg-[#F5F5F5]">
    <!-- Header with Currency Filter -->
    <PayslipsHeader 
      v-model:selected-currency="selectedCurrency"
      :currency-counts="currencyCounts"
    />

    <!-- Main Content -->
    <div class="px-6 py-6">
      <!-- Page Title -->
      <div class="mb-6">
        <h3 class="text-3xl font-bold text-gray-900 mb-2">My payslips</h3>
      </div>

      <!-- Breadcrumb and Analytics Button -->
      <div class="flex items-center justify-between mb-6">
        <div class="text-gray-600">Payslips > 2025</div>
        <button class="p-2 bg-blue-600 text-white rounded-lg shadow-sm">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
          </svg>
        </button>
      </div>

      <!-- Payslips Table -->
      <PayslipsTable 
        :payslips="filteredPayslips"
        :expanded-payslips="expandedPayslips"
        @toggle-expanded="toggleExpanded"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import PayslipsHeader from '@/components/PayslipsHeader.vue'
import PayslipsTable from '@/components/PayslipsTable.vue'
import { usePayslips } from '@/composables/usePayslips'

// Use the payslips composable
const {
  selectedCurrency,
  expandedPayslips,
  filteredPayslips,
  currencyCounts,
  toggleExpanded
} = usePayslips()
</script>