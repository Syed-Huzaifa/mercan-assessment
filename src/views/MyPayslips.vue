<template>
  <div class="min-h-screen rounded-b-lg bg-[#F5F5F5]">
    <!-- Header Bar -->
    <div class="bg-[#001738] rounded-t-lg text-white px-6 py-4 flex items-center justify-between">
      <div class="flex items-center gap-4">
        <button 
          class="px-4 py-2 text-white rounded-lg font-medium"
          :class="{ 'bg-[#CC4C19]': selectedCurrency === 'USD', 'bg-transparent border border-gray-300': selectedCurrency !== 'USD' }"
          @click="selectedCurrency = 'USD'"
        >
          USD ({{ currencyCounts.USD || 0 }})
        </button>
        <button 
          class="px-4 py-2 text-white rounded-lg font-medium"
          :class="{ 'bg-[#CC4C19]': selectedCurrency === 'EUR', 'bg-transparent border border-gray-300': selectedCurrency !== 'EUR' }"
          @click="selectedCurrency = 'EUR'"
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
      <div class="bg-white rounded-lg shadow-sm border border-gray-200">
        <Table>
          <TableHeader>
            <TableRow class="border-b border-gray-200">
              <TableHead class="w-12 text-center">#</TableHead>
              <TableHead class="text-left">Period</TableHead>
              <TableHead class="text-left">Payslips</TableHead>
              <TableHead class="text-right">Gross salary</TableHead>
              <TableHead class="text-right">Net pay</TableHead>
              <TableHead class="w-12"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow 
              v-for="(payslip, index) in filteredPayslips" 
              :key="payslip.id"
              class="border-b border-gray-100 hover:bg-gray-50"
            >
              <TableCell class="text-center">
                <div class="flex items-center justify-center">
                  <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                  <span class="ml-2 font-medium">{{ payslip.number }}</span>
                </div>
              </TableCell>
              <TableCell>
                <span class="text-[#CC4C19] font-medium">{{ payslip.period }}</span>
              </TableCell>
              <TableCell>
                <button 
                  @click="downloadPayslip(payslip.accessToken, payslip.filename)"
                  class="text-gray-700 hover:text-blue-600 underline text-left"
                >
                  {{ payslip.filename }}
                </button>
              </TableCell>
              <TableCell class="text-right">
                <span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium">
                  {{ payslip.grossSalary }}
                </span>
              </TableCell>
              <TableCell class="text-right">
                <span class="bg-green-100 text-green-800 px-3 py-1 rounded-full font-medium">
                  {{ payslip.netPay }}
                </span>
              </TableCell>
              <TableCell class="text-center">
                <button class="p-1 hover:bg-gray-100 rounded">
                  <svg class="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                  </svg>
                </button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table'
import payslipsData from '@/data/payslips.json'

const selectedCurrency = ref('USD')

interface PayslipEntry {
  key: string
  amount: number
  currency: string
}

interface PayslipFile {
  mimeType: string
  size: number
  label: string
  description: string | null
  createTime: string
}

interface FileAttachment {
  id: number
  file: PayslipFile
  accessToken: string
}

interface PayslipData {
  fileAttachment: FileAttachment
  payrollDate: string
  payslipEntries: PayslipEntry[]
}

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

const payslips = ref<Payslip[]>([])

// Process payslips data
const processPayslipsData = (data: PayslipData[]) => {
  return data.map((payslip, index) => {
    const grossEntry = payslip.payslipEntries.find(entry => entry.key === 'GROSS')
    const netPayEntry = payslip.payslipEntries.find(entry => entry.key === 'NET PAY')
    const currency = grossEntry?.currency || 'USD'
    
    // Format period from payrollDate
    const date = new Date(payslip.payrollDate)
    const period = date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long' 
    })
    
    return {
      id: payslip.fileAttachment.accessToken,
      number: data.length - index,
      period,
      filename: payslip.fileAttachment.file.label,
      grossSalary: grossEntry ? `${grossEntry.amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} ${currency}` : 'N/A',
      netPay: netPayEntry ? `${netPayEntry.amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} ${currency}` : 'N/A',
      currency,
      accessToken: payslip.fileAttachment.accessToken
    }
  })
}

// Filtered payslips based on selected currency
const filteredPayslips = computed(() => {
  return payslips.value.filter(payslip => payslip.currency === selectedCurrency.value)
})

// Currency counts
const currencyCounts = computed(() => {
  const counts = payslips.value.reduce((acc, payslip) => {
    acc[payslip.currency] = (acc[payslip.currency] || 0) + 1
    return acc
  }, {} as Record<string, number>)
  return counts
})

// Download PDF function
const downloadPayslip = (accessToken: string, filename: string) => {
  // In a real application, this would be an API call to download the file
  // For now, we'll create a placeholder that shows the filename
  console.log(`Downloading payslip: ${filename} (${accessToken})`)
  
  // Create a temporary link element to trigger download
  const link = document.createElement('a')
  // Since we can't directly access files from src/data in production,
  // we'll create a data URL with a placeholder message
  const pdfContent = `data:text/plain;charset=utf-8,${encodeURIComponent(`Payslip: ${filename}\nAccess Token: ${accessToken}\n\nThis is a placeholder. In a real application, this would download the actual PDF file.`)}`
  link.href = pdfContent
  link.download = filename
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

onMounted(() => {
  payslips.value = processPayslipsData(payslipsData)
})
</script>