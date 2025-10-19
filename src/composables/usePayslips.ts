import { ref, computed } from 'vue'
import payslipsData from '@/data/payslips.json'

export interface PayslipEntry {
  key: string
  amount: number
  currency: string
}

export interface PayslipFile {
  mimeType: string
  size: number
  label: string
  description: string | null
  createTime: string
}

export interface FileAttachment {
  id: number
  file: PayslipFile
  accessToken: string
}

export interface PayslipData {
  fileAttachment: FileAttachment
  payrollDate: string
  payslipEntries: PayslipEntry[]
}

export interface Payslip {
  id: string
  number: number
  period: string
  filename: string
  grossSalary: string
  netPay: string
  currency: string
  accessToken: string
}

export function usePayslips() {
  const selectedCurrency = ref('USD')
  const expandedPayslips = ref<Set<string>>(new Set())

  // Process payslips data
  const processPayslipsData = (data: PayslipData[]) => {
    return data.map((payslip, index) => {
      const grossEntry = payslip.payslipEntries.find(entry => entry.key === 'GROSS')
      const netPayEntry = payslip.payslipEntries.find(entry => entry.key === 'NET PAY')
      const currency = grossEntry?.currency || 'USD'
      
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

  // Initialize payslips data immediately
  const payslips = ref<Payslip[]>(processPayslipsData(payslipsData))

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

  // Toggle expanded state for payslip (only one row can be expanded at a time)
  const toggleExpanded = (payslipId: string) => {
    if (expandedPayslips.value.has(payslipId)) {
      // If clicking on the currently expanded row, close it
      expandedPayslips.value.clear()
    } else {
      // Close any currently expanded row and open the new one
      expandedPayslips.value.clear()
      expandedPayslips.value.add(payslipId)
    }
  }



  return {
    selectedCurrency,
    payslips,
    expandedPayslips,
    filteredPayslips,
    currencyCounts,
    toggleExpanded
  }
}
