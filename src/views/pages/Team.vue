<script setup>
import { ref, computed } from "vue";
import Carousel from "primevue/carousel";
</script>

<template>
    <section>
        <h1> <span style="color: blue;">FELI</span><span style="color: white;">CID</span><span
                style="color:blue">ADES</span> <span style="color: red;">CAM</span><span
                style="color: rgb(232, 226, 48);">PEO</span><span style="color: red;">NES</span> </h1>
        <div class="container">
            <div class="grid mt-5">
                <img src="../../../public/imagenes/aRgCamp.png  " alt="cucucu" class="argentina">
                <br>
                <img src="../../../public/imagenes/EuroSpain.png" alt="euro spain" class="españa">
                <br><span></span>
                <img src="../../../public/imagenes/cucucucucu.jpeg" alt="cucucucu" class="mid españa">
                <br> <span></span>
                <img src="../../../public/imagenes/nicoLam.jpeg" alt="nico y lamine" class="españa">
                <br>
                <img src="../../../public/imagenes/argentos.png" alt="campeones" class="argentina">
            </div>
        </div>
    </section>

</template>
<style scoped>

/* section {
    background: linear-gradient(to right, rgb(208, 78, 78) 0%, yellow 30%, white 60%, rgb(80, 80, 197) 100%);
    mask-image: linear-gradient(to bottom, black 95%, transparent),
        linear-gradient(to top, black 95%, transparent),
        linear-gradient(to right, black 95%, transparent),
        linear-gradient(to left, black 95%, transparent);
    mask-composite: intersect;
    height: max-content ;
    padding-bottom: 100px;
} */

h1 {
    width: max-content;
    margin: auto;
    border-radius: 10px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 80px;
    font-weight: bolder;
    text-shadow: 0 0 10px black;
    letter-spacing: 10px;
    transition: 1s;
}

h1:hover {
    color: white;
    transform: scale3d(1.1, 1.1, 1.1);
}

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
    border-radius: 10px;
}

.grid img:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.mid {
    margin: -40px;
    margin-left: 10px;
    width: 500px;
    z-index: 1000;
}

.argentina {
    box-shadow: 10px 10px 10px 0 rgba(1, 17, 245, 0.5);
}

.españa {
    box-shadow: 10px 10px 10px 0 rgba(245, 1, 1, 0.5);
    color: rgb(232, 226, 48);
}
</style>
