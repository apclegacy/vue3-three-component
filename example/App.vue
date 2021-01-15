<script lang="ts">
// example Application
// examples the usage of vue3-three-component
// lexiboi / 15.01.2021 / MIT
import { defineComponent } from 'vue';

// import three.js scene
import testScene from './sketch/testScene';

// import ThreeSketch component
// import ThreeSketch from '@alexpetercharles/three-sketch.vue'
import ThreeSketch from '../src/three-sketch.vue';

export default defineComponent({
  name: 'App',
  components: {
    ThreeSketch,
  },
  setup() {
    return {
      // expose Three.js Scene to template
      testScene,
    };
  },
});
</script>

<template>
  <!-- :src is prop for Three.js Scene. class this dom element for styling !-->
  <three-sketch class="sketch-container" :src="testScene" />
</template>

<style lang="scss">
  .sketch-container {
    height: 100vh;
    width: 100vw;
  }
</style>
