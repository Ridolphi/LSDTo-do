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