<template>
    <button class="layout-config-button p-link" type="button" @click="onConfigButtonClick()" title="Add New Task">
        <i class="pi pi-plus"></i>
    </button>
</template>

<script>
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
    }
}
</script>

<style scoped>
@media (max-width: 767px) {
  .layout-config-button {
    top: auto;
    bottom: 20px;
  }
}
</style>