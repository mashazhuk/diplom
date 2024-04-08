<template>
  <primary-header />
  <main class="main">
    <router-view />
  </main>
</template>

<script lang = "ts">
import { defineComponent } from 'vue';
import PrimaryHeader from './components/PrimaryHeader.vue';

export default defineComponent ( {
    components: {
      PrimaryHeader
    }
});
</script>