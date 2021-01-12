import {
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
  BoxGeometry,
  MeshBasicMaterial,
  Mesh,
} from 'three';

const testScene = (containerElement: HTMLElement) => {
  let camera: PerspectiveCamera;
  let scene: Scene;
  let renderer: WebGLRenderer;

  let cube: Mesh;

  const init = () => {
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

  return {
    init,
    animate,
  };
};

export default testScene;
