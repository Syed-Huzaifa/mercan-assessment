<template>
  <div class="bg-[#001738] rounded-t-lg text-white px-6 py-4 flex items-center justify-between">
    <div class="flex items-center gap-4">
      <button 
        class="px-4 py-2 text-white rounded-lg font-medium"
        :class="{ 'bg-[#CC4C19]': selectedCurrency === 'USD', 'bg-transparent border border-gray-300': selectedCurrency !== 'USD' }"
        @click="$emit('update:selectedCurrency', 'USD')"
      >
        USD ({{ currencyCounts.USD || 0 }})
      </button>
      <button 
        class="px-4 py-2 text-white rounded-lg font-medium"
        :class="{ 'bg-[#CC4C19]': selectedCurrency === 'EUR', 'bg-transparent border border-gray-300': selectedCurrency !== 'EUR' }"
        @click="$emit('update:selectedCurrency', 'EUR')"
      >
        EUR ({{ currencyCounts.EUR || 0 }})
      </button>
    </div>
    <button class="p-2 bg-transparent border border-gray-300 rounded-lg">
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
      </svg>
    </button>
  </div>
</template>

<script setup lang="ts">
interface Props {
  selectedCurrency: string
  currencyCounts: Record<string, number>
}

defineProps<Props>()
defineEmits<{
  'update:selectedCurrency': [value: string]
}>()
</script>
