<script setup>
import { ref } from "vue";
import AppMenuItem from "./AppMenuItem.vue";

const model = ref([
  {
    label: "HOME",
    items: [
      { label: "All Departments", icon: "pi pi-fw pi-home", to: "/" },
      { label: "Team", icon: "pi pi-fw pi-users", to: "/team" },
      { label: "Messages", icon: "pi pi-fw pi-comment", to: "/messages" },
      { label: "Calendar", icon: "pi pi-fw pi-calendar", to: "/calendar" },
      { label: "Reports", icon: "pi pi-fw pi-file", to: "/reports" },
    ],
  },
  {
    label: "Organization",
    items: [
      {
        label: "Artist bookings",
        icon: "pi pi-fw pi-microphone",
        to: "/uikit/input",
      },
      {
        label: "Gastronomy",
        icon: "pi pi-fw pi-cart-plus",
        to: "/uikit/floatlabel",
      },
      {
        label: "Legal, security & control",
        icon: "pi pi-fw pi-shield",
        to: "/uikit/invalidstate",
      },
      {
        label: "Marketing & sponsors",
        icon: "pi pi-fw pi-volume-up",
        to: "/uikit/button",
        class: "rotated-icon",
      },
      {
        label: "Ticketing & pre-sale",
        icon: "pi pi-fw pi-ticket",
        to: "/uikit/table",
      },
      {
        label: "Stage & equipment",
        icon: "pi pi-fw pi-sliders-v",
        to: "/uikit/list",
      },
      {
        label: "Menu",
        icon: "pi pi-fw pi-bars",
        to: "/uikit/menu",
        preventExact: true,
      },
      { label: "Message", icon: "pi pi-fw pi-comment", to: "/uikit/message" },
      { label: "File", icon: "pi pi-fw pi-file", to: "/uikit/file" },
      // { label: 'Chart', icon: 'pi pi-fw pi-chart-bar', to: '/uikit/charts' },
      { label: "Misc", icon: "pi pi-fw pi-circle", to: "/uikit/misc" },
    ],
  },
  {
    label: 'Get Started',
    items: [
      {
        label: 'Documentation',
        icon: 'pi pi-fw pi-question',
        to: '/documentation'
      },
      {
        label: 'Figma',
        url: 'https://www.dropbox.com/scl/fi/bhfwymnk8wu0g5530ceas/sakai-2023.fig?rlkey=u0c8n6xgn44db9t4zkd1brr3l&dl=0',
        icon: 'pi pi-fw pi-pencil',
        target: '_blank'
      },
      {
        label: 'View Source',
        icon: 'pi pi-fw pi-search',
        url: 'https://github.com/primefaces/sakai-vue',
        target: '_blank'
      },
      {
        label: 'Nuxt Version',
        url: 'https://github.com/primefaces/sakai-nuxt',
        icon: 'pi pi-fw pi-star'
      }
    ],
  },
]);
</script>

<template>
  <ul class="layout-menu">
    <template v-for="(item, i) in model" :key="item">
      <app-menu-item v-if="!item.separator" :item="item" :index="i"></app-menu-item>
      <li v-if="item.separator" class="menu-separator"></li>
    </template>
  </ul>
</template>

<style>
@media (max-width: 991px) {
  .layout-wrapper .layout-sidebar {
    width: 400px;
    z-index: 999999;
  }
}

@media (max-width: 500px) {
  .layout-wrapper .layout-sidebar {
    width: 90vw;
    z-index: 999999;
  }
}
</style>
