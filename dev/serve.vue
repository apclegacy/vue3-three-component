<script lang="ts">
import { defineComponent } from 'vue';
import testScene from './sketch/testScene';
import ThreeSketch from '../src/three-sketch.vue';

export default defineComponent({
  name: 'ServeDev',
  components: {
    ThreeSketch,
  },
  setup() {
    return {
      testScene,
    };
  },
});
</script>

<template>
  <div id="app">
    <three-sketch class="sketch-container" :src="testScene" />
  </div>
</template>

<style scoped>
  .sketch-container {
    height: 100vh;
    width: 100vw;
  }
</style>
