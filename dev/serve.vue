<script lang="ts">
import { defineComponent } from 'vue';
import ThreeSketch from '../src/three-sketch.vue';

export default defineComponent({
  name: 'ServeDev',
  components: {
    ThreeSketch,
  },
});
</script>

<template>
  <div id="app">
    <three-sketch />
  </div>
</template>
