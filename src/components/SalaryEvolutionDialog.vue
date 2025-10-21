<template>
  <Dialog v-model:open="isOpen">
    <DialogContent class="w-full h-[95vh] sm:h-[90vh] md:h-[85vh] lg:h-[80vh] p-0 flex flex-col">
      <div class="px-4 sm:px-6 py-4 border-b border-gray-200 flex-shrink-0">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
            <span class="text-xs sm:text-sm text-gray-500 whitespace-nowrap">Mercans USA Ltd.</span>
            <div class="w-px h-4 bg-gray-300 hidden sm:block"></div>
            <div class="min-w-0 flex-1">
              <h2 class="text-lg sm:text-xl font-semibold text-gray-800 truncate">Gross/Net Salary Evolution</h2>
              <p class="text-xs sm:text-sm text-gray-500 truncate">TF2019 - Ted Ferguson</p>
            </div>
          </div>
          <DialogClose class="bg-[#1A3E6D] text-white rounded-full flex items-center justify-center hover:bg-[#1A3E6D]/90 transition-colors flex-shrink-0 ml-2">
            <img :src="CloseIcon" alt="Close" class="w-4 h-4 filter brightness-0 invert" />
          </DialogClose>
        </div>
      </div>

      <div class="flex-1 p-4 sm:p-6 min-h-0">
        <div class="w-full h-full border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center bg-gray-50">
          <div class="mb-4 sm:mb-6 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
            <img :src="CraneIllustration" alt="Crane Illustration" class="w-full h-full object-contain" />
          </div>
          
          <p class="text-sm sm:text-base text-gray-500 text-center px-4">
            No designs yet — they'll appear here once available.
          </p>
        </div>
      </div>
    </DialogContent>
  </Dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Dialog, DialogContent, DialogClose } from '@/components/ui/dialog'
import CraneIllustration from '@/assets/icons/art.svg'
import CloseIcon from '@/assets/icons/close.svg'

const isOpen = ref(false)

defineExpose({
  open: () => { isOpen.value = true },
  close: () => { isOpen.value = false }
})
</script>
