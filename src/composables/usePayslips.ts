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

export interface Employer {
  name: string
  address: string
  country: string
}

export interface Employee {
  name: string
  id: string
  position: string
  email: string
  hireDate: string
  paymentMethod: string
}

export interface Summary {
  entitlements: string
  deductions: string
  netPay: string
}

export interface PayElement {
  description: string
  amount: string
  currency: string
}

export interface Banking {
  bankName: string
  swift: string
  beneficiaryName: string
  accountNumber: string
  accountCurrency: string
  type: string
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
  employer: Employer
  employee: Employee
  summary: Summary
  entitlements: PayElement[]
  deductions: PayElement[]
  banking: Banking
}

export function usePayslips() {
  const selectedCurrency = ref('USD')
  const expandedPayslips = ref<Set<string>>(new Set())

  const processPayslipsData = (data: PayslipData[]) => {
    return data.map((payslip, index) => {
      const grossEntry = payslip.payslipEntries.find(entry => entry.key === 'GROSS')
      const netPayEntry = payslip.payslipEntries.find(entry => entry.key === 'NET PAY')
      const entitlementsEntry = payslip.payslipEntries.find(entry => entry.key === 'ENTITLEMENTS')
      const deductionsEntry = payslip.payslipEntries.find(entry => entry.key === 'DEDUCTIONS')
      const totalDeductionsEntry = payslip.payslipEntries.find(entry => entry.key === 'TOTAL DEDUCTIONS')
      const currency = grossEntry?.currency || 'USD'
      
      const date = new Date(payslip.payrollDate)
      const period = date.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long' 
      })
      
      const filename = payslip.fileAttachment.file.label
      const filenameParts = filename.split(' - ')
      const employeeName = filenameParts[2] || "Unknown Employee"
      const employeeId = filenameParts[1] || "Unknown ID"
      
      const grossAmount = grossEntry?.amount || 0
      const netAmount = netPayEntry?.amount || 0
      const entitlementsAmount = entitlementsEntry?.amount || grossAmount
      const deductionsAmount = deductionsEntry?.amount || 0
      const totalDeductionsAmount = totalDeductionsEntry?.amount || deductionsAmount
      
      const employerDetails = currency === 'USD' 
        ? {
            name: "Mercans USA Ltd.",
            address: "325 Court Street, 2nd Floor, Brooklyn, NY 11231",
            country: "USA"
          }
        : {
            name: "Mercans Europe Ltd.",
            address: "123 Business Street, London, UK",
            country: "UK"
          }
      
      const emailPrefix = employeeName.toLowerCase().replace(/\s+/g, '')
      const employeeEmail = `${emailPrefix}@mercans.com`
      
      const bankingDetails = currency === 'USD'
        ? {
            bankName: "First National Bank of New York",
            swift: "FNBUS33XXX",
            beneficiaryName: employeeName,
            accountNumber: "123456789012",
            accountCurrency: currency,
            type: "Primary"
          }
        : {
            bankName: "Barclays Bank PLC",
            swift: "BARCGB22XXX",
            beneficiaryName: employeeName,
            accountNumber: "987654321098",
            accountCurrency: currency,
            type: "Primary"
          }
      
      return {
        id: payslip.fileAttachment.accessToken,
        number: data.length - index,
        period,
        filename: payslip.fileAttachment.file.label,
        grossSalary: grossEntry ? `${grossEntry.amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} ${currency}` : 'N/A',
        netPay: netPayEntry ? `${netPayEntry.amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} ${currency}` : 'N/A',
        currency,
        accessToken: payslip.fileAttachment.accessToken,
        employer: employerDetails,
        employee: {
          name: employeeName,
          id: employeeId,
          position: "Product Manager",
          email: employeeEmail,
          hireDate: "07.08.2019",
          paymentMethod: "Bank"
        },
        summary: {
          entitlements: entitlementsAmount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
          deductions: totalDeductionsAmount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
          netPay: netAmount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
        },
        entitlements: [
          {
            description: "62100 - Basic Salary",
            amount: entitlementsAmount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
            currency: currency
          }
        ],
        deductions: [
          {
            description: "66xxx - Total Deductions",
            amount: totalDeductionsAmount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
            currency: currency
          }
        ],
        banking: bankingDetails
      }
    })
  }

  const payslips = ref<Payslip[]>(processPayslipsData(payslipsData))

  const filteredPayslips = computed(() => {
    return payslips.value.filter(payslip => payslip.currency === selectedCurrency.value)
  })

  const currencyCounts = computed(() => {
    const counts = payslips.value.reduce((acc, payslip) => {
      acc[payslip.currency] = (acc[payslip.currency] || 0) + 1
      return acc
    }, {} as Record<string, number>)
    return counts
  })

  const toggleExpanded = (payslipId: string) => {
    if (expandedPayslips.value.has(payslipId)) {
      expandedPayslips.value.clear()
    } else {
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
