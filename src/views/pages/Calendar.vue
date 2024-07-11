<script setup>
import Calendar from 'primevue/calendar';
import { ref } from "vue";

// Definir los valores reactivos
const value = ref([]);
const disabledDates = ref([]); // Inicializar si es necesario
const disabledDays = ref([]);  // Inicializar si es necesario

// Función para manejar la selección de fecha en el calendario
const mensaje = ref('');
function handleSelect(event) {
    const mensajeInput = event.target.value;  // Crear variable nueva para el valor del input de texto
    mensaje.value = mensajeInput;  // añadir el valor el input a una variable global
    // console.log('Input task:', mensaje);
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
            document.querySelector('.task').innerText = `${mensaje.value} : ${day} ${monthYear}`;
        });
    }
}

</script>

<template>
    <Calendar style="width: 100vw !important;" placeholder="Add a task" :yearRange="['2020', '2030']"
        :minDate="new Date()" :disabledDays="disabledDays" :multiple="true" :readonlyInput="true" :value="value"
        @change="handleSelect" @show="handleCalendarShow" />
    <section class="tasks">
        <div class="card">
            <p class="task"></p>
            <p>Task to do</p>
        </div>
        <div class="card">
            <p class="task"></p>
            <p>Task to do</p>
        </div>
        <div class="card">
            <p>22/07/2024</p>
            <p>Task to do</p>
        </div>
        <div class="card">
            <p>26/07/2024</p>
            <p>Task to do</p>
        </div>
        <div class="card">
            <p>28/07/2024</p>
            <p>Task to do</p>
        </div>
        <div class="card">
            <p>01/08/2024</p>
            <p>Task to do</p>
        </div>
        <div class="card">
            <p>01/08/2024</p>
            <p>Task to do</p>
        </div>
        <div class="card mb-28">
            <p>01/08/2024</p>
            <p>Task to do</p>
        </div>
    </section>
</template>

<style scoped>
.p-datepicker {
    width: 100vw !important;
}

.tasks {
    margin-top: 28px;
    display: grid;
    grid-template-columns: auto auto;
    gap: 20px;
}

.card {
    margin-bottom: 28px;
}
</style>
