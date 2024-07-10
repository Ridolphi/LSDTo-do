<script setup>
import Calendar from 'primevue/calendar';
import { computed, ref } from "vue";

// Definir los valores reactivos
const value = ref([]);
const disabledDates = ref([]); // Inicializar si es necesario
const disabledDays = ref([]);  // Inicializar si es necesario

// Función para manejar la selección de fecha en el calendario
function handleSelect(event) {
    console.log('Selected date:', event.target.value);
}

computed(() => {
const calendario = document.getElementById(pv_id_1_panel);
calendario.addEventListener('click', (event) => {
    console.log(event);
})
})

</script>

<template>
<Calendar 
    style="width: 100vw !important;" 
    placeholder="Select a date" 
    :minDate="new Date()"  
    :disabledDates="disabledDates" 
    :disabledDays="disabledDays" 
    :multiple="true" 
    :readonlyInput="true" 
    :value="value" 
    @change="handleSelect" 
/>
<section class="tasks">
    <div class="card"><p>17/07/2024</p><p>Task to do</p></div>
    <div class="card"><p>21/07/2024</p><p>Task to do</p></div>
    <div class="card"><p>22/07/2024</p><p>Task to do</p></div>
    <div class="card"><p>26/07/2024</p><p>Task to do</p></div>
    <div class="card"><p>28/07/2024</p><p>Task to do</p></div>
    <div class="card"><p>01/08/2024</p><p>Task to do</p></div>
    <div class="card"><p>01/08/2024</p><p>Task to do</p></div>
    <div class="card mb-28"><p>01/08/2024</p>
    <p>Task to do</p></div>
</section>
</template>

<style scoped>
.p-datepicker {
    width: 100vw !important;
}
.tasks {
    margin-top: 28px;
    display: grid;
    grid-template-columns: auto auto ;
    gap: 20px;        
}
.card {
    margin-bottom: 28px;
}
</style>
