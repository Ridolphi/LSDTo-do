<script setup>
import Calendar from 'primevue/calendar';
import { ref } from "vue";

// Definir los valores reactivos
const value = ref([]);
const disabledDates = ref([]); // Inicializar si es necesario
const disabledDays = ref([]);  // Inicializar si es necesario

// Función para manejar la selección de fecha en el calendario
function handleSelect(event) {
    console.log('Input task:', event.target.value);
}

// Función para formatear el mes y año
function formatMonthYear(monthYear) {
    const monthYearRegex = /([a-zA-Z]+)(\d{4})/;
    const match = monthYear.match(monthYearRegex);  //match coge el evento (monthYear) y hace la funcion match creando un array
    return `${match[1]} ${match[2]}`; // devolvemos el elemento 1 (el mes) y el 2(el año) por separado
}

// Agregar listener de click al calendario cuando se muestra
function handleCalendarShow() {
        const calendario = document.querySelector('.p-datepicker');
        if (calendario) {
            calendario.addEventListener('click', (event) => {
                const day = event.target.innerText;
                const monthYearClicked = calendario.querySelector('.p-datepicker-title').innerText;
                const monthYear = formatMonthYear(monthYearClicked);
                console.log('Clicked on calendar:', day, monthYear);
            });
        }
}
</script>

<template>
<Calendar 
    style="width: 100vw !important;" 
    placeholder="Select a date" 
    :yearRange="['2020', '2030']" 
    :minDate="new Date()"  
    :disabledDates="disabledDates" 
    :disabledDays="disabledDays" 
    :multiple="true" 
    :readonlyInput="true" 
    :value="value" 
    @change="handleSelect" 
    @show="handleCalendarShow"
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
