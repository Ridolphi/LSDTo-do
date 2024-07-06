<script setup>
import { ref, computed, toRefs, onMounted } from "vue";
import { fetchTodos, todos } from "../service/ToDosAPI.js";
import AddTask from "../components/AddTask.vue";

const displayDialog = ref(false);
const editedTask = ref(null);

const openDialog = (task) => {
  displayDialog.value = true;
  editedTask.value = { ...task };
  console.log(task);
};

const closeDialog = () => {
  displayDialog.value = false;
};

const departments = ref([]); //creamos departments como un array vacío
onMounted(() => {
  fetchTodos()
  .then(() => {
    departments.value = [
      ...new Set(todos.value.map((todo) => todo.tags.department.toUpperCase())),
    ]; // Al cargar las tareas, obtenemos todos los departamentos únicos
  });
});

const TasksToDo = computed(() =>
  todos.value.filter((todo) => todo.tags.status.toLowerCase() === "to do")
);
const TasksInProgress = computed(() =>
  todos.value.filter((todo) => todo.tags.status.toLowerCase() === "in progress")
);
const TasksDone = computed(() =>
  todos.value.filter((todo) => todo.tags.status.toLowerCase() === "done")
);
</script>

<template>
  <div class="grid">
    <!-- TO DO Section -->
    <div class="col-12 lg:col-6 xl:col-4">
      <div class="card mb-0 bg-red-200">
        <div class="flex justify-content-between mb-3">
          <span class="block text-500 font-medium mb-3">TO DO</span>
          <div
            class="flex align-items-center justify-content-center bg-red-100 border-round"
            style="width: 2.5rem; height: 2.5rem"
          >
            <i class="pi pi-exclamation-triangle text-red-500 text-xl"></i>
          </div>
        </div>
        <div v-if="TasksToDo.length === 0"> <span>Waiting Tasks to do... </span>  <i class="pi pi-spin pi-spinner"></i>
</div>
        <div
          v-for="task in TasksToDo"
          :key="task.id"
          class="bg-red-100 p-2 rounded mb-4"
        >
          <div class="text-900 font-medium text-xl">{{ task.text }}</div>
          <div class="text-500">
            <b><u>Description</u>:</b> {{ task.description}}
          </div>
          <div class="text-500">
            <b><u>Department</u>:</b> {{ task.tags.department.toUpperCase() }}
          </div>
          <div class="text-500">
            <b><u>Status</u>:</b> {{ task.tags.status.toUpperCase() }}
          </div>
          <div class="text-right mt-2">
            <button class="p-button p-button-danger p-button-rounded mr-2">
              <i class="pi pi-trash"></i>
            </button>
            <button
              @click="openDialog(task)"
              class="p-button p-button-success p-button-rounded"
            >
              <i class="pi pi-pencil"></i>
            </button>
          </div>
        </div>
        <span class="text-red-700 font-medium">{{ TasksToDo.length }}</span>
        <span class="text-500 font-medium"> Tasks waiting to be started</span>
      </div>
    </div>

    <!-- IN PROGRESS Section -->
    <div class="col-12 lg:col-6 xl:col-4">
      <div class="card mb-0 bg-yellow-300">
        <div class="flex justify-content-between mb-3">
          <div>
            <span class="block text-500 font-medium mb-3"
              >IN PROGRESS [...]</span
            >
          </div>
          <div
            class="flex align-items-center justify-content-center bg-orange-100 border-round"
            style="width: 2.5rem; height: 2.5rem"
          >
            <i class="pi pi-spin pi-spinner"></i>
          </div>
        </div>

        <div v-if="TasksInProgress.length === 0" class="mb-5">
          <b>No tasks In Progress yet</b>
        </div>
        <div
          v-for="task in TasksInProgress"
          :key="task.id"
          class="bg-yellow-100 p-2 rounded mb-4"
        >
          <div class="text-900 font-medium text-xl">{{ task.text }}</div>
          <div class="text-500">
            <b><u>Description</u>:</b> {{ task.description }}
          </div>
          <div class="text-500">
            <b><u>Department</u>:</b> {{ task.tags.department.toUpperCase() }}
          </div>
          <div class="text-500">
            <b><u>Status</u>:</b> {{ task.tags.status.toUpperCase() }}
          </div>
          <div class="text-right mt-2">
            <button class="p-button p-button-danger p-button-rounded mr-2">
              <i class="pi pi-trash"></i>
            </button>
            <button
              @click="openDialog(task)"
              class="p-button p-button-success p-button-rounded"
            >
              <i class="pi pi-pencil"></i>
            </button>
          </div>
        </div>
        <span class="text-yellow-700 font-medium">{{
          TasksInProgress.length
        }}</span>
        <span class="text-500 font-medium"> Tasks in progress...</span>
      </div>
    </div>

    <!-- DONE Section -->
    <div class="col-12 lg:col-6 xl:col-4">
      <div class="card mb-0 bg-green-200">
        <div class="flex justify-content-between mb-3">
          <div>
            <span class="block text-500 font-medium mb-3">DONE</span>
          </div>
          <div
            class="flex align-items-center justify-content-center bg-cyan-100 border-round"
            style="width: 2.5rem; height: 2.5rem"
          >
            <i class="pi pi-check text-cyan-500 text-xl"></i>
          </div>
        </div>
        <div v-if="TasksDone.length === 0" class="mb-5">
          <b>No tasks completed yet</b>
        </div>
        <div
          v-for="task in TasksDone"
          :key="task.id"
          class="bg-green-100 p-2 rounded mb-4"
        >
          <div class="text-900 font-medium text-xl">{{ task.text }}</div>
          <div class="text-500">
            <b><u>Description</u>:</b> {{ task.description }}
          </div>
          <div class="text-500">
            <b><u>Department</u>:</b> {{ task.tags.department.toUpperCase() }}
          </div>
          <div class="text-500">
            <b><u>Status</u>:</b> {{ task.tags.status.toUpperCase() }}
          </div>
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
        </div>
        <span class="text-green-700 font-medium"> {{ TasksDone.length }} </span>
        <span class="text-500 font-medium"> Tasks completed</span>
      </div>
    </div>

    <!-- Diálogo para editar tarea -->
    <Dialog v-model:visible="displayDialog" modal>
      <div class="p-4 w">
        <h3 class="text-lg font-semibold mb-4 text-inline">Editing task...</h3>
        <div class="mb-4">
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Task Name"
            v-model="editedTask.text"
          />
        </div>
        <div class="mb-4">
          <select
            v-model="editedTask.tags.department"
            class="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option :value="editedTask.tags.department" selected>
              {{ editedTask.tags.department }}
            </option>
            <option v-for="department in departments" :value="department">
              {{ department }}
            </option>
          </select>
        </div>
        <div class="mb-4">
          <select
            v-model="editedTask.tags.status"
            class="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option :value="editedTask.tags.status" selected>
              {{ editedTask.tags.status }}
            </option>
            <option value="To Do" v-if="editedTask.tags.status !== 'To Do'">To Do</option>
            <option value="In Progress" v-if="editedTask.tags.status !== 'In Progress'">In Progress</option>
            <option value="Done" v-if="editedTask.tags.status !== 'Done'">Done</option>
          </select>
        </div>
        <div class="mb-4">
          <textarea
            v-model="editedTask.description"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Task Description..."
          ></textarea>
        </div>
        <div class="flex items-center justify-end">
          <button
            class="bg-blue-400 cursor-pointer hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            @click="updateTask"
          >
            <i class="pi pi-save text-xl"></i> Save
          </button>
          <button
            @click="closeDialog"
            class="bg-red-400 text-white ml-5 hover:bg-red-700 cursor-pointer font-bold py-2 px-3 rounded"
          >
            Cancel
          </button>
        </div>
      </div>
    </Dialog>
  </div>

  <!-- Agregar Tarea Button -->
  <AddTask />
</template>

<style>
#task {
  border-radius: 10px;
}
</style>
