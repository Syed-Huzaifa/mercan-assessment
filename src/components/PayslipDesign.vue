<template>
  <div class="bg-white min-h-screen">
    <div class="container mx-auto px-4 py-6 space-y-8">
      <div class="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-8">
        <div class="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 flex items-center justify-center">
          <img :src="MercansLogo" alt="Mercans Logo" class="w-full h-full" />
        </div>
        <h1 class="font-extralight text-[#001738] text-xl sm:text-2xl lg:text-3xl">Payslip</h1>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div class="bg-gray-50 rounded-lg overflow-hidden">
          <Table>
            <TableBody>
              <TableRow>
                <TableCell class="font-medium text-gray-600">Employer</TableCell>
                <TableCell class="text-right font-medium">{{ payslipData.employer.name }}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell class="font-medium text-gray-600">Employer address</TableCell>
                <TableCell class="text-right font-medium">{{ payslipData.employer.address }}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell class="font-medium text-gray-600">Country</TableCell>
                <TableCell class="text-right font-medium">{{ payslipData.employer.country }}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell class="font-medium text-gray-600">Pay Period</TableCell>
                <TableCell class="text-right font-medium">{{ payslipData.period }}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <div class="bg-[#E7F3EA] rounded-lg p-8 text-center lg:text-right flex flex-col justify-center">
          <div class="text-gray-600 mb-2">Net Pay</div>
          <div class="text-3xl lg:text-4xl font-extralight text-gray-800">{{ payslipData.netPay }}</div>
        </div>
      </div>

      <div class="bg-gray-50 rounded-lg overflow-hidden">
        <div class="grid grid-cols-1 lg:grid-cols-2">
          <div>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell class="font-medium text-gray-600">Employee</TableCell>
                  <TableCell class="text-right font-medium">{{ payslipData.employee.name }}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell class="font-medium text-gray-600">Employee ID</TableCell>
                  <TableCell class="text-right font-medium">{{ payslipData.employee.id }}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell class="font-medium text-gray-600">Position</TableCell>
                  <TableCell class="text-right font-medium">{{ payslipData.employee.position }}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell class="font-medium text-gray-600">Email</TableCell>
                  <TableCell class="text-right font-medium break-all">{{ payslipData.employee.email }}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          <div>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell class="font-medium text-gray-600">Hire Date</TableCell>
                  <TableCell class="text-right font-medium">{{ payslipData.employee.hireDate }}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell class="font-medium text-gray-600">Payment Method</TableCell>
                  <TableCell class="text-right font-medium">{{ payslipData.employee.paymentMethod }}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell class="font-medium text-gray-600">Pay Period</TableCell>
                  <TableCell class="text-right font-medium">{{ payslipData.period }}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell class="font-medium text-gray-600">Currency</TableCell>
                  <TableCell class="text-right font-medium">{{ payslipData.currency }}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </div>


      <div>
        <h2 class="text-xl sm:text-2xl font-bold text-blue-900 mb-4">Summary</h2>
        <div class="bg-white border border-gray-200 rounded-lg overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead class="text-gray-600">Pay currency</TableHead>
                <TableHead class="text-right text-gray-600">Entitlements</TableHead>
                <TableHead class="text-right text-gray-600">Deductions</TableHead>
                <TableHead class="text-right text-gray-600">Net pay</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell class="font-medium">{{ payslipData.currency }}</TableCell>
                <TableCell class="text-right font-medium">{{ payslipData.summary.entitlements }}</TableCell>
                <TableCell class="text-right font-medium">{{ payslipData.summary.deductions }}</TableCell>
                <TableCell class="text-right font-medium">{{ payslipData.summary.netPay }}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>

      <div>
        <h2 class="text-xl sm:text-2xl font-bold text-blue-900 mb-4">Details</h2>
        
        <div class="space-y-6">
          <div>
            <h3 class="text-base sm:text-lg font-semibold text-gray-700 mb-3">Entitlements</h3>
            <div class="bg-white border border-gray-200 rounded-lg overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead class="text-gray-600">Payelement</TableHead>
                    <TableHead class="text-right text-gray-600">Amount</TableHead>
                    <TableHead class="text-right text-gray-600">Currency</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell class="font-medium">{{ payslipData.entitlements[0].description }}</TableCell>
                    <TableCell class="text-right font-medium">{{ payslipData.entitlements[0].amount }}</TableCell>
                    <TableCell class="text-right">{{ payslipData.entitlements[0].currency }}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>

          <div>
            <h3 class="text-base sm:text-lg font-semibold text-gray-700 mb-3">Deductions</h3>
            <div class="bg-white border border-gray-200 rounded-lg overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead class="text-gray-600">Payelement</TableHead>
                    <TableHead class="text-right text-gray-600">Amount</TableHead>
                    <TableHead class="text-right text-gray-600">Currency</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow v-for="(deduction, index) in payslipData.deductions" :key="index">
                    <TableCell class="font-medium">{{ deduction.description }}</TableCell>
                    <TableCell class="text-right font-medium">{{ deduction.amount }}</TableCell>
                    <TableCell class="text-right">{{ deduction.currency }}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 class="text-base sm:text-lg font-semibold text-gray-700 mb-3">Banking details</h3>
        <div class="bg-white border border-gray-200 rounded-lg overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead class="text-gray-600">Bank name</TableHead>
                <TableHead class="text-gray-600">SWIFT</TableHead>
                <TableHead class="text-gray-600">Beneficiary name</TableHead>
                <TableHead class="text-gray-600">Acc. number</TableHead>
                <TableHead class="text-gray-600">Account currency</TableHead>
                <TableHead class="text-gray-600">Type</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell class="font-medium break-words">{{ payslipData.banking.bankName }}</TableCell>
                <TableCell class="font-medium break-all">{{ payslipData.banking.swift }}</TableCell>
                <TableCell class="font-medium break-words">{{ payslipData.banking.beneficiaryName }}</TableCell>
                <TableCell class="font-medium break-all">{{ payslipData.banking.accountNumber }}</TableCell>
                <TableCell class="font-medium">{{ payslipData.banking.accountCurrency }}</TableCell>
                <TableCell class="font-medium">{{ payslipData.banking.type }}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </div>

    <div class="bg-white border-t border-gray-200 px-4 py-4 text-center">
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
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'

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
