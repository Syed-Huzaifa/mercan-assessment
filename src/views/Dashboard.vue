<template>
  <div class="p-8">
    <div class="mb-8">
      <p class="text-gray-600">Welcome to your dashboard</p>
    </div>
    
    <div class="space-y-6">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div class="bg-white rounded-lg shadow-md p-6 flex items-center space-x-4">
          <div class="text-3xl">📊</div>
          <div class="flex flex-col">
            <div class="text-2xl font-bold text-gray-900">1,234</div>
            <div class="text-sm text-gray-600">Total Users</div>
          </div>
        </div>
        
        <div class="bg-white rounded-lg shadow-md p-6 flex items-center space-x-4">
          <div class="text-3xl">💰</div>
          <div class="flex flex-col">
            <div class="text-2xl font-bold text-gray-900">$12,345</div>
            <div class="text-sm text-gray-600">Revenue</div>
          </div>
        </div>
        
        <div class="bg-white rounded-lg shadow-md p-6 flex items-center space-x-4">
          <div class="text-3xl">📈</div>
          <div class="flex flex-col">
            <div class="text-2xl font-bold text-gray-900">89%</div>
            <div class="text-sm text-gray-600">Growth</div>
          </div>
        </div>
        
        <div class="bg-white rounded-lg shadow-md p-6 flex items-center space-x-4">
          <div class="text-3xl">🎯</div>
          <div class="flex flex-col">
            <div class="text-2xl font-bold text-gray-900">456</div>
            <div class="text-sm text-gray-600">Active Projects</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Dashboard component logic can be added here
</script>

