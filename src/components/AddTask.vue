<template>
    <button class="layout-config-button p-link" type="button" @click="onConfigButtonClick()" title="Add New Task">
        <i class="pi pi-plus"></i>
    </button>
    <AppConfig v-model:visible="visible" />
</template>

<script>
import AppConfig from '@/layout/AppConfig.vue';

export default {
    data() {
        return {
            visible: false
        };
    },
    methods: {
        onConfigButtonClick() {
            this.visible = !this.visible;
        }
    },
    components: {
        AppConfig
    },
}
</script>

<style scoped>
@media (max-width: 767px) {
    .layout-config-button {
        top: auto;
        bottom: 20px;
        width: 5rem;
        height: 5rem;
        font-size: xx-large
    }
}
</style>