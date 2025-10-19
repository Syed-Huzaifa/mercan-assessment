<template>
  <div class="bg-white border-t border-gray-200">
    <!-- PDF Header -->
    <div class="bg-gray-50 px-6 py-4 border-b border-gray-200">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-4">
          <img :src="MercansLogo" alt="Mercans Logo" class="w-12 h-12" />
          <div>
            <h2 class="text-2xl font-bold text-gray-800">Payslip</h2>
            <p class="text-sm text-gray-600">{{ payslip.period }}</p>
          </div>
        </div>
        <div class="flex items-center gap-2">
          <button 
            @click="zoomIn"
            class="p-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            title="Zoom In"
          >
            <svg class="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
            </svg>
          </button>
          <button 
            @click="zoomOut"
            class="p-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            title="Zoom Out"
          >
            <svg class="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
    
    <!-- PDF Preview Container -->
    <div class="p-6">
      <div class="bg-gray-100 rounded-lg border border-gray-300 overflow-hidden">
        <div class="bg-white border-b border-gray-300 px-4 py-2 flex items-center justify-between">
          <div class="flex items-center gap-2">
            <span class="text-sm font-medium text-gray-700">{{ payslip.filename }}</span>
            <span class="text-xs text-gray-500">{{ payslip.grossSalary }}</span>
            <span class="text-xs text-green-600 font-medium">{{ payslip.netPay }}</span>
          </div>
          <div class="flex items-center gap-1">
            <svg class="w-3 h-3 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
            </svg>
          </div>
        </div>
        
        <!-- PDF Embed -->
        <div class="relative" :style="{ height: `${pdfHeight}px` }">
          <iframe 
            :src="pdfSrc"
            class="w-full h-full border-0"
            type="application/pdf"
            title="Payslip PDF Preview"
            @load="onPdfLoad"
            @error="onPdfError"
          >
            <div class="flex items-center justify-center h-full bg-gray-50">
              <div class="text-center">
                <svg class="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                </svg>
                <p class="text-gray-600 mb-2">PDF Preview Not Available</p>
                <p class="text-sm text-gray-500 mb-4">{{ payslip.filename }}</p>
                <button 
                  @click="downloadPayslip"
                  class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Download PDF
                </button>
              </div>
            </div>
          </iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import MercansLogo from '@/assets/icons/mercans.svg'

interface Payslip {
  id: string
  number: number
  period: string
  filename: string
  grossSalary: string
  netPay: string
  currency: string
  accessToken: string
}

interface Props {
  payslip: Payslip
}

const props = defineProps<Props>()

// PDF zoom functionality
const pdfHeight = ref(600)
const zoomLevel = ref(1)

// Computed PDF source with parameters
const pdfSrc = computed(() => {
  return `/data/payslips/${props.payslip.accessToken}.pdf#toolbar=0&navpanes=0&scrollbar=0&zoom=${Math.round(zoomLevel.value * 100)}`
})

// Zoom functions
const zoomIn = () => {
  zoomLevel.value = Math.min(zoomLevel.value + 0.25, 3)
  pdfHeight.value = Math.min(pdfHeight.value + 50, 800)
}

const zoomOut = () => {
  zoomLevel.value = Math.max(zoomLevel.value - 0.25, 0.5)
  pdfHeight.value = Math.max(pdfHeight.value - 50, 400)
}

// Download function
const downloadPayslip = () => {
  const link = document.createElement('a')
  const pdfContent = `data:text/plain;charset=utf-8,${encodeURIComponent(`Payslip: ${props.payslip.filename}\nAccess Token: ${props.payslip.accessToken}\n\nThis is a placeholder. In a real application, this would download the actual PDF file.`)}`
  link.href = pdfContent
  link.download = props.payslip.filename
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
</script>
