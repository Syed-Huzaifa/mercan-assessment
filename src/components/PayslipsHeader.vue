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
