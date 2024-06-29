<script>
export default {
    data() {
        return {
            TaskName: 'Misión imposible',
            TaskDescription: 'Hacer inteligente a Adri',
            Department: 'Artist & bookings',
        }
    }
}
</script>

<template>
    <div><!-- Coger datos de la API-->
        <div class="text-900 font-medium text-xl">{{ TaskName }}</div>
        <div class="text-500">{{ TaskDescription }}</div>
        <div class="text-500">Department: {{ Department }}</div>
    </div>
</template>
