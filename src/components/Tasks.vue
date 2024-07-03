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
// const tasks = adadasdadasdasda.tuprima-- > [array con las task["Task 1 {id:asdasdas , taskname: Pagar a gaston, ....}", "Task 2 {}"]]




const displayDialog = ref(false);

let taskName = "Misión imposible";
let taskDescription = "Hacer inteligente a Adri";
let department = "Artist & bookings";
let status = "TO DO";

let editedTaskName = ref(taskName);
let editedTaskDescription = ref(taskDescription);
let editedDepartment = ref(department);
let editedStatus = ref(status);

// Función para abrir el diálogo
const openDialog = () => {
  displayDialog.value = true;
};

// Función para cerrar el diálogo
const closeDialog = () => {
  displayDialog.value = false;
};

//funcion para editar el nombre de la tarea
const updateTaskName = () => {
  taskName = editedTaskName;
  department = editedDepartment
  taskDescription = editedTaskDescription
  closeDialog();
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
      <button @click="openDialog" class="p-button p-button-success p-button-rounded">
        <i class="pi pi-pencil"></i>
      </button>
    </div>
    <!-- DIÁLOGO PARA EDITAR TAREA QUE POR DEFECTO NO SERÁ VISIBLE-->
    <Dialog v-model:visible="displayDialog" modal>
      <div class="p-4 w">
        <h3 class="text-lg font-semibold mb-4 text-inline">Editing task...</h3>
        <i id="spinner" class="pi pi-spin pi-spinner"></i>
        <div class="mb-4">
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="taskName" type="text" :placeholder="taskName" v-model="editedTaskName" />
        </div>
        <div class="mb-4">
          <select v-model="editedDepartment"
            class="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            <option :value="department" selected>{{ department }} </option>
            <option v-for="department in departments" :key="department" :value="department">
              {{ department }}
            </option>
          </select>
        </div>
        <div class="mb-4">
          <textarea v-model="editedTaskDescription"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="department" type="text" placeholder="Task Description..."> {{ taskDescription }}</textarea>
        </div>
        <div class="flex items-center justify-end">
          <button
            class="bg-blue-400 cursor-pointer hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button" @click="updateTaskName">
            <i class="pi pi-save text-xl"></i>
          </button>
          <button @click="closeDialog"
            class="bg-red-400 text-white ml-5  hover:bg-red-700 cursor-pointer font-bold py-2 px-3 rounded">
            Cancel
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

#spinner {
  position: absolute;
  right: 16%;
  top: 20%;
  font-size: 2rem;
}
</style>
