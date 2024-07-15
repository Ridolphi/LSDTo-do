<script setup>
import { ref, computed } from "vue";
import Carousel from "primevue/carousel";
</script>

<template>
    
    <div class="container">
        <div class="grid">
            <img src="../../../public/imagenes/cucucucucu.jpeg" alt="cucucu">
            <br>
            <img src="../../../public/imagenes/EuroSpain.png" alt="euro spain">
            <br><span></span>
            <img src="../../../public/imagenes/NicoGol.webp" alt="nico gol" class="mid">
            <br> <span></span>
            <img src="../../../public/imagenes/nicoLam.jpeg" alt="nico y lamine">
            <br>
            <img src="../../../public/imagenes/campeones.png" alt="campeones">

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
    margin-top: 60px;
    width: 85vw;
    margin: auto;
}

.grid { 
    display: grid;
    gap: 5px;
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
.mid{
    margin: -40px;
    margin-left: 10px;
    width: 500px;
    z-index: 1000;
}
</style>
