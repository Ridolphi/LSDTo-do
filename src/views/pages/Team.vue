<!-- <script setup>
import { ref, computed } from "vue";
</script>

<template>
    <section>
        <h1> <span style="color: rgb(74, 74, 254);">FELI</span><span style="color: white;">CID</span><span
                style="color: rgb(74, 74, 254)">ADES</span> <span style="color: red;">CAM</span><span
                style="color: rgb(232, 226, 48);">PE</span><span style="color: red;">ONES</span> </h1>
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
    position: relative;
}
h1::after {
    content: ""; /* Inserta un contenido vacío. Es necesario para que el pseudo-elemento sea renderizado. */
    position: absolute; /* Posiciona el pseudo-elemento de forma absoluta respecto al <h1>. */
    left: 0; /* Alinea el pseudo-elemento al lado izquierdo del <h1>. */
    bottom: 10px; /* Desplaza el pseudo-elemento 10 píxeles hacia abajo desde la parte inferior del <h1>. */
    height: 5px; /* Define la altura del pseudo-elemento, que actúa como el grosor del subrayado. */
    width: 100%; /* Hace que el pseudo-elemento tenga el mismo ancho que el <h1>. */
    background: linear-gradient(to right, rgb(95, 95, 246) 0%, white 25%,  rgb(95, 95, 246) 50%, red 55%, yellow 75%, red 100%); /* Crea un gradiente lineal que simula los colores de las banderas de Argentina y España. */
    border-radius: 2px; /* Redondea ligeramente las esquinas del pseudo-elemento. */
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

@media(max-width: 800px) {
    h1 {
        font-size: 40px;
        width: 100vw;
        letter-spacing: 0;
        text-align: center;
        margin-left: -30px;
    }

    h1::after{
        display: none;
    }

    .grid {
        display: block;
    }

    .mid {
    margin: 0;
    width: 100vw;
    z-index: 0;
    }

    .container img {
        width: 90vw;
        margin: auto;
        margin-bottom: 20px;
    }

    .grid img:hover {
        transform: scale(1);
    }
    
}
</style> -->
    
    <script setup>
    import { ref, onMounted } from 'vue';
    import { teamService } from '../../service/teamService'; // Ajusta la ruta si es necesario
    
    const images = ref([]);
    const responsiveOptions = ref([
        {
            breakpoint: '1300px',
            numVisible: 4
        },
        {
            breakpoint: '575px',
            numVisible: 1
        }
    ]);
    
    onMounted(() => {
        const data = teamService.getImages();
        images.value = data;
    });
    
    </script>

<template>
    <h1> <span style="color: rgb(74, 74, 254);">FELI</span><span style="color: white;">CID</span><span
            style="color: rgb(74, 74, 254)">ADES</span> <span style="color: red;">CAM</span><span
            style="color: rgb(232, 226, 48);">PE</span><span style="color: red;">ONES</span> </h1>
    <Galleria :value="images" :responsiveOptions="responsiveOptions" :numVisible="5"
        containerStyle="max-width: 850px; margin: auto;">
        <template #item="slotProps">
            <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%" />
        </template>
        <template #thumbnail="slotProps">
            <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" />
        </template>
    </Galleria>
</template>

<style>
.p-galleria-item-wrapper img {
    height: 500px;
    object-fit: cover;
    margin-top: 20px
}

.p-galleria-thumbnail-wrapper img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

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
    position: relative;
}

h1::after {
    content: "";
    /* Inserta un contenido vacío. Es necesario para que el pseudo-elemento sea renderizado. */
    position: absolute;
    /* Posiciona el pseudo-elemento de forma absoluta respecto al <h1>. */
    left: 0;
    /* Alinea el pseudo-elemento al lado izquierdo del <h1>. */
    bottom: 10px;
    /* Desplaza el pseudo-elemento 10 píxeles hacia abajo desde la parte inferior del <h1>. */
    height: 5px;
    /* Define la altura del pseudo-elemento, que actúa como el grosor del subrayado. */
    width: 100%;
    /* Hace que el pseudo-elemento tenga el mismo ancho que el <h1>. */
    background: linear-gradient(to right, rgb(95, 95, 246) 0%, white 25%, rgb(95, 95, 246) 50%, red 55%, yellow 75%, red 100%);
    /* Crea un gradiente lineal que simula los colores de las banderas de Argentina y España. */
    border-radius: 2px;
    /* Redondea ligeramente las esquinas del pseudo-elemento. */
}

h1:hover {
    color: white;
    transform: scale3d(1.1, 1.1, 1.1);
}

@media(max-width: 800px) {
    h1 {
        font-size: 40px;
        width: 100vw;
        letter-spacing: 0;
        text-align: center;
        margin-left: -30px;
    }

    h1::after {
        display: none;
    }

    .p-galleria-item-wrapper img {
        margin-top: 20px;
        width: 100vw;
        height: 250px;
        object-fit: cover;
    }

    .p-galleria-thumbnail-wrapper img {
        width: 100%;
        height: 50px;
        object-fit: cover;
    }
}
</style>
