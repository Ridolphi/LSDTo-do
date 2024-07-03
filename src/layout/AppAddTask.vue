<script setup>
import { ref, computed } from 'vue';

const departments = [
  "Artist & bookings",
  "Gastronomy",
  "Legal security & control",
  "Marketing & sponsors",
  "Ticketing & pre-sale",
  "Stage & equipment",
]
</script>

<template>
  <Sidebar v-model:visible="visible" position="right" class="layout-config-sidebar w-26rem" pt:closeButton="ml-auto">

    <div class="p-4 w">
      <h3 class="text-lg font-semibold mb-4 text-inline">Add a new task...</h3>
      <i id="spinner" class="pi pi-spin pi-spinner"></i>
      <div class="mb-4">
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="taskName" type="text" placeholder="Task Name" />
      </div>
      <div class="mb-4">
        <select
          class="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
          <option value="" disabled selected>Select department</option>
          <option v-for="department in departments" :key="department" :value="department">
            {{ department }}
          </option>
        </select>
      </div>
      <div class="mb-4">
        <textarea
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="department" type="text" placeholder="Task Description..."></textarea>
      </div>
      <div class="flex items-center justify-end">
        <button
          class="bg-green-400 cursor-pointer hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit">
          <i class="pi pi-check text-xl"></i>

        </button>
      </div>
    </div>

  </Sidebar>
</template>

<style lang="scss" scoped></style>
