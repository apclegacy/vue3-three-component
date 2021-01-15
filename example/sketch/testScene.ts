// example Application
// examples a three.js Sketch for usage with vue3-three-component
// lexiboi / 15.01.2021 / MIT

// do not import * as Three bc this causes bundlers to bundle
// the whole library. use specific imports like this for proper 
// tree shaking. 
import {
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
  BoxGeometry,
  MeshBasicMaterial,
  Mesh,
} from 'three';

// the ThreeSketch Component calls the Scene function with 
// its container dom Element as a parameter
// use this element the same way you would in a vanilla script.
const testScene = (containerElement: HTMLElement) => {

  // define vars
  let camera: PerspectiveCamera;
  let scene: Scene;
  let renderer: WebGLRenderer;

  let cube: Mesh;


  const init = () => {
    // IMPORTANT: set renderer properties corresponding to the 
    // containerElement parameter. In Three.js examples this is usually the 
    // window object.
    camera = new PerspectiveCamera(75,
      containerElement.offsetWidth / containerElement.offsetHeight, 0.1, 1000);
    camera.position.z = 5;

    scene = new Scene();

    // renderer
    renderer = new WebGLRenderer({ antialias: true, preserveDrawingBuffer: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(containerElement.offsetWidth, containerElement.offsetHeight);
    containerElement.appendChild(renderer.domElement);

    // objects
    const geometry = new BoxGeometry();
    const material = new MeshBasicMaterial({ color: 0x00ff00 });
    cube = new Mesh(geometry, material);
    scene.add(cube);
  };

  const animate = () => {
    requestAnimationFrame(animate);

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
  };

  // IMPORTANT: you need to expose the init and animate Funtions for the component to
  // call during its lifecycle
  return {
    init,
    animate,
  };
};

// IMPORTANT: export default!
export default testScene;
