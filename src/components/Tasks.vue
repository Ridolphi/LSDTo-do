<script setup>
import { ref } from "vue";
const departments = [
  "Artist & bookings",
  "Gastronomy",
  "Legal security & control",
  "Marketing & sponsors",
  "Ticketing & pre-sale",
  "Stage & equipment",
];

const displayDialog = ref(false);
const taskName = "Misión imposible";
const taskDescription = "Hacer inteligente a Adri";
const department = "Artist & bookings";
const status = "TO DO";

// Función para abrir el diálogo
const openDialog = () => {
  displayDialog.value = true;
};

// Función para cerrar el diálogo
const closeDialog = () => {
  displayDialog.value = false;
};
</script>
<template>
  <div id="task" class="bg-red-100 p-2 rounded">
    <!-- Coger datos de la API-->
    <div class="text-900 font-medium text-xl">{{ taskName }}</div>
    <div class="text-500">{{ taskDescription }}</div>
    <div class="text-500">Department: {{ department }}</div>
    <!--<div class="text-500">Status: {{ status }}</div>-->
    <div class="text-right mt-2">
      <button class="p-button p-button-danger p-button-rounded mr-2">
        <i class="pi pi-trash"></i>
      </button>
      <button
        @click="openDialog"
        class="p-button p-button-success p-button-rounded"
      >
        <i class="pi pi-pencil"></i>
      </button>
    </div>
    <Dialog v-model:visible="displayDialog" modal>
      <div class="p-4">
        <h3 class="text-lg font-semibold mb-4">Editing task...</h3>
        <div class="mb-4">
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="taskName"
            type="text"
            placeholder="Task Name"
          />
        </div>
        <div class="mb-4">
          <select
            class="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="" disabled selected>Select department</option>
            <option
              v-for="department in departments"
              :key="department"
              :value="department"
            >
              {{ department }}
            </option>
          </select>
        </div>
        <div class="mb-4">
          <textarea
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="department"
            type="text"
            placeholder="Task Description..."
          ></textarea>
        </div>
        <div class="flex items-center justify-end">
          <button
            class="bg-blue-500 cursor-pointer hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Guardar
          </button>
          <button @click="closeDialog" class="bg-red-400 text-white ml-5  hover:bg-red-700 cursor-pointer">
            Cancelar
          </button>
        </div>
      </div>
    </Dialog>
  </div>
</template>

<style>
#task {
  border-radius: 10px;
}
</style>
