<script setup>
import { ref, computed } from "vue";
</script>

<template>
    <div class="container m-5 m-auto">
        <div class="grid">
            <img src="../../../public/imagenes/cucucucucu.jpeg" alt="Imagen 1">
            <br>
            <img src="../../../public/imagenes/EuroSpain.png" alt="Imagen 2">
            <br><span></span>
            <img src="../../../public/imagenes/NicoGol.webp" alt="Imagen 3">
            <br> <span></span>
            <img src="../../../public/imagenes/nicoLam.jpeg" alt="Imagen 4">
            
        </div>
    </div>
</template>
<style scoped>
.team-page {
    text-align: center;
    margin-bottom: 20px;
}

.container {
    display: flex;
    justify-content: center;
}

.grid {
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    width: 100vw;
    max-width: 1000px;
}

.grid img {
    width: 325px;
    height: 200px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.grid img:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}
</style>
