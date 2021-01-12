<script lang="ts">
import {
  defineComponent,
  onMounted,
  ref,
} from 'vue';

export default defineComponent({
  name: 'ThreeSketch',
  props: {
    sketch: {
      type: Function,
      required: true,
    },
  },
  setup(props) {
    const container = ref<HTMLElement | null>(null);

    onMounted(() => {
      const containerElement = container.value;
      if (containerElement instanceof HTMLElement) {
        const {
          init,
          animate,
        } = props.sketch(containerElement);

        if (typeof init === 'undefined') {
          throw (new Error('init Function is undefinded! It needs to be exposed in the sketch.'));
        }

        init();

        if (typeof animate === 'undefined') {
          throw (new Error('animate Function is undefinded! It needs to be exposed in the sketch.'));
        }

        animate();
      } else {
        throw (new Error('HTMLElement not found!'));
      }
    });
    return {
      container,
    };
  },
});
</script>

<template>
  <div id="container" ref="container"></div>
</template>
