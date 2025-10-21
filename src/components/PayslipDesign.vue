<template>
  <div class="bg-white min-h-screen">

    <div class="px-8 py-6">
      <div class="flex justify-between items-center gap-8 mb-8">
        <div class="w-24 h-24 flex items-center justify-center">
          <img :src="MercansLogo" alt="Mercans Logo" class="w-full h-full" />
        </div>
        <h1 class="font-extralight text-[#001738]">Payslip</h1>
      </div>

      <div class="flex items-center gap-8 mb-8">
        <div class="bg-gray-50 w-1/2 rounded-lg p-4">
          <div class="space-y-6">
            <div class="flex justify-between">
              <span class="text-gray-600">Employer</span>
              <span class="text-gray-800 font-medium">{{ payslipData.employer.name }}</span>
            </div>
            <div class="flex justify-between">
              <span class="text-gray-600">Employer address</span>
              <span class="text-gray-800 font-medium">{{ payslipData.employer.address }}</span>
            </div>
            <div class="flex justify-between">
              <span class="text-gray-600">Country</span>
              <span class="text-gray-800 font-medium">{{ payslipData.employer.country }}</span>
            </div>
            <div class="flex justify-between">
              <span class="text-gray-600">Pay Period</span>
              <span class="text-gray-800 font-medium">{{ payslipData.period }}</span>
            </div>
          </div>
        </div>

          <div class="w-1/2">
            <div class="bg-[#E7F3EA] rounded-lg p-14 text-right">
            <div class="text-gray-600 text-sm mb-2">Net Pay</div>
            <div class="text-4xl font-extralight text-gray-800">{{ payslipData.netPay }}</div>
          </div>
        </div>
      </div>

      <div class="bg-gray-50 rounded-lg py-8">
        <div class="flex justify-between items-center">
          <div class="space-y-6 px-8">
            <div class="flex justify-between gap-5 text-left">
              <span class="text-gray-600">Employee</span>
              <span class="text-gray-800 font-medium">{{ payslipData.employee.name }}</span>
            </div>
            <div class="flex justify-between gap-5 text-left">
              <span class="text-gray-600">Employee ID</span>
              <span class="text-gray-800 font-medium">{{ payslipData.employee.id }}</span>
            </div>
            <div class="flex justify-between gap-5 text-left">
              <span class="text-gray-600">Position</span>
              <span class="text-gray-800 font-medium">{{ payslipData.employee.position }}</span>
            </div>
            <div class="flex justify-between gap-5 text-left">
              <span class="text-gray-600">Email</span>
              <span class="text-gray-800 font-medium">{{ payslipData.employee.email }}</span>
            </div>
          </div>
          <div class="space-y-6 px-24">
            <div class="flex justify-between gap-5">
              <span class="text-gray-600">Hire Date</span>
              <span class="text-gray-800 font-medium">{{ payslipData.employee.hireDate }}</span>
            </div>
            <div class="flex justify-between gap-5">
              <span class="text-gray-600">Payment Method</span>
              <span class="text-gray-800 font-medium">{{ payslipData.employee.paymentMethod }}</span>
            </div>
            <div class="flex justify-between gap-5">
              <span class="text-gray-600">Pay Period</span>
              <span class="text-gray-800 font-medium">{{ payslipData.period }}</span>
            </div>
            <div class="flex justify-between gap-5">
              <span class="text-gray-600">Currency</span>
              <span class="text-gray-800 font-medium">{{ payslipData.currency }}</span>
            </div>
          </div>
        </div>
      </div>


      <div class="mb-8">
        <h2 class="text-2xl font-bold text-blue-900 mb-4">Summary</h2>
        <div class="bg-white border border-gray-200 rounded-lg overflow-hidden">
          <div class="bg-gray-50 px-4 py-3 border-b border-gray-200">
            <div class="grid grid-cols-4 gap-4">
              <div class="text-gray-600 font-medium">Pay currency</div>
              <div class="text-gray-600 font-medium text-right">Entitlements</div>
              <div class="text-gray-600 font-medium text-right">Deductions</div>
              <div class="text-gray-600 font-medium text-right">Net pay</div>
            </div>
          </div>
          <div class="px-4 py-3">
            <div class="grid grid-cols-4 gap-4">
              <div class="text-gray-800">{{ payslipData.currency }}</div>
              <div class="text-gray-800 text-right font-medium">{{ payslipData.summary.entitlements }}</div>
              <div class="text-gray-800 text-right font-medium">{{ payslipData.summary.deductions }}</div>
              <div class="text-gray-800 text-right font-medium">{{ payslipData.summary.netPay }}</div>
            </div>
          </div>
        </div>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-blue-900 mb-4">Details</h2>
        
        <div class="mb-6">
          <h3 class="text-lg font-semibold text-gray-700 mb-3">Entitlements</h3>
          <div class="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div class="bg-gray-50 px-4 py-3 border-b border-gray-200">
              <div class="grid grid-cols-3 gap-4">
                <div class="text-gray-600 font-medium">Payelement</div>
                <div class="text-gray-600 font-medium text-right">Amount</div>
                <div class="text-gray-600 font-medium text-right">Currency</div>
              </div>
            </div>
            <div class="px-4 py-3">
              <div class="grid grid-cols-3 gap-4">
                <div class="text-gray-800">{{ payslipData.entitlements[0].description }}</div>
                <div class="text-gray-800 text-right font-medium">{{ payslipData.entitlements[0].amount }}</div>
                <div class="text-gray-800 text-right">{{ payslipData.entitlements[0].currency }}</div>
              </div>
            </div>
          </div>
        </div>

        <div class="mb-6">
          <h3 class="text-lg font-semibold text-gray-700 mb-3">Deductions</h3>
          <div class="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div class="bg-gray-50 px-4 py-3 border-b border-gray-200">
              <div class="grid grid-cols-3 gap-4">
                <div class="text-gray-600 font-medium">Payelement</div>
                <div class="text-gray-600 font-medium text-right">Amount</div>
                <div class="text-gray-600 font-medium text-right">Currency</div>
              </div>
            </div>
            <div class="space-y-0">
              <div v-for="(deduction, index) in payslipData.deductions" :key="index" class="px-4 py-3 border-b border-gray-100 last:border-b-0">
                <div class="grid grid-cols-3 gap-4">
                  <div class="text-gray-800">{{ deduction.description }}</div>
                  <div class="text-gray-800 text-right font-medium">{{ deduction.amount }}</div>
                  <div class="text-gray-800 text-right">{{ deduction.currency }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mb-8">
        <h3 class="text-lg font-semibold text-gray-700 mb-3">Banking details</h3>
        <div class="bg-white border border-gray-200 rounded-lg overflow-hidden">
          <div class="bg-gray-50 px-4 py-3 border-b border-gray-200">
            <div class="grid grid-cols-6 gap-4">
              <div class="text-gray-600 font-medium">Bank name</div>
              <div class="text-gray-600 font-medium">SWIFT</div>
              <div class="text-gray-600 font-medium">Beneficiary name</div>
              <div class="text-gray-600 font-medium">Acc. number</div>
              <div class="text-gray-600 font-medium">Account currency</div>
              <div class="text-gray-600 font-medium">Type</div>
            </div>
          </div>
          <div class="px-4 py-3">
            <div class="grid grid-cols-6 gap-4">
              <div class="text-gray-800">{{ payslipData.banking.bankName }}</div>
              <div class="text-gray-800">{{ payslipData.banking.swift }}</div>
              <div class="text-gray-800">{{ payslipData.banking.beneficiaryName }}</div>
              <div class="text-gray-800">{{ payslipData.banking.accountNumber }}</div>
              <div class="text-gray-800">{{ payslipData.banking.accountCurrency }}</div>
              <div class="text-gray-800">{{ payslipData.banking.type }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-white border-t border-gray-200 px-8 py-4 text-center">
      <div class="text-sm text-gray-500">
        <div>This document has been generated by HR Blizz</div>
        <div>© All rights reserved</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { Payslip, PayslipData } from '@/composables/usePayslips'
import { usePayslips } from '@/composables/usePayslips'
import payslipsData from '@/data/payslips.json'
import MercansLogo from '@/assets/icons/mercans.svg'

interface Props {
  payslip: Payslip
}

const props = defineProps<Props>()
const { payslips } = usePayslips()

const payslipData = computed(() => {
  const originalPayslipData = payslipsData.find(p => p.fileAttachment.accessToken === props.payslip.accessToken) as PayslipData
  
  if (!originalPayslipData) {
    return {
      ...props.payslip,
      employer: { name: "N/A", address: "N/A", country: "N/A" },
      employee: { name: "N/A", id: "N/A", position: "N/A", email: "N/A", hireDate: "N/A", paymentMethod: "N/A" },
      summary: { entitlements: "0.00", deductions: "0.00", netPay: "0.00" },
      entitlements: [{ description: "62100 - Basic Salary", amount: "0.00", currency: props.payslip.currency }],
      deductions: [{ description: "66xxx - Total Deductions", amount: "0.00", currency: props.payslip.currency }],
      banking: { bankName: "N/A", swift: "N/A", beneficiaryName: "N/A", accountNumber: "N/A", accountCurrency: "N/A", type: "N/A" }
    }
  }

  const filename = originalPayslipData.fileAttachment.file.label
  const filenameParts = filename.split(' - ')
  const employeeName = filenameParts[2] || "Unknown Employee"
  const employeeId = filenameParts[1] || "Unknown ID"
  
  const grossEntry = originalPayslipData.payslipEntries.find(entry => entry.key === 'GROSS')
  const netPayEntry = originalPayslipData.payslipEntries.find(entry => entry.key === 'NET PAY')
  const entitlementsEntry = originalPayslipData.payslipEntries.find(entry => entry.key === 'ENTITLEMENTS')
  const deductionsEntry = originalPayslipData.payslipEntries.find(entry => entry.key === 'DEDUCTIONS')
  const totalDeductionsEntry = originalPayslipData.payslipEntries.find(entry => entry.key === 'TOTAL DEDUCTIONS')
  
  const grossAmount = grossEntry?.amount || 0
  const netAmount = netPayEntry?.amount || 0
  const entitlementsAmount = entitlementsEntry?.amount || grossAmount
  const deductionsAmount = deductionsEntry?.amount || 0
  const totalDeductionsAmount = totalDeductionsEntry?.amount || deductionsAmount
  
  const employerDetails = props.payslip.currency === 'USD' 
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
  
  const bankingDetails = props.payslip.currency === 'USD'
    ? {
        bankName: "First National Bank of New York",
        swift: "FNBUS33XXX",
        beneficiaryName: employeeName,
        accountNumber: "123456789012",
        accountCurrency: props.payslip.currency,
        type: "Primary"
      }
    : {
        bankName: "Barclays Bank PLC",
        swift: "BARCGB22XXX",
        beneficiaryName: employeeName,
        accountNumber: "987654321098",
        accountCurrency: props.payslip.currency,
        type: "Primary"
      }
  
  return {
    ...props.payslip,
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
        currency: props.payslip.currency
      }
    ],
    deductions: [
      {
        description: "66xxx - Total Deductions",
        amount: totalDeductionsAmount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
        currency: props.payslip.currency
      }
    ],
    banking: bankingDetails
  }
})
</script>
