## 🎁 Example Usage

Please check-out the example files in this folder. if you
want to run them yourself feel free to clone this repo and run

```zsh
npm run serve example/App.vue
```

### 🥱 TLDR (pseudo):

#### In Component (App.vue):

```typescript
// import three.js scene
import testScene from './sketch/testScene';

// import ThreeSketch component
import ThreeSketch from '@alexpetercharles/three-sketch.vue'

...


components: {
  ThreeSketch,
},
setup() {
return {
  // expose Three.js Scene to template
  testScene,
};

...
```
```html 
<template>
  <!-- :src is prop for Three.js Scene. class this dom element for styling !-->
  <three-sketch class="sketch-container" :src="testScene" />
</template>
```

#### In Three.js Sketch (testScene.ts):

```typescript
// do not import * as Three bc this causes bundlers to bundle
// the whole library. use specific imports like this for proper 
// tree shaking. 
import {
  ...
} from 'three';

...

// the ThreeSketch Component calls the Scene function with 
// its container dom Element as a parameter
// use this element the same way you would in a vanilla script.
const testScene = (containerElement: HTMLElement) => {

...

const init = () => {
// IMPORTANT: set renderer properties corresponding to the 
// containerElement parameter. In Three.js examples this is usually the 
// window object.

...

containerElement.appendChild(renderer.domElement);

...

// IMPORTANT: you need to expose the init and animate Funtions for the component to
  // call during its lifecycle
  return {
    init,
    animate,
  };
};

// IMPORTANT: export default!
export default testScene;

```
