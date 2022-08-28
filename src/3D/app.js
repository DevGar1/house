import {
  BoxBufferGeometry,
  Color,
  Mesh,
  MeshBasicMaterial,
  MeshNormalMaterial,
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
} from "three";

let camera, scene, renderer;
export class App {
  constructor(container) {
    const width = container.innerWidth;
    const heidht = container.innerHeight;
    const aspectContainer = width / heidht;
    camera = new PerspectiveCamera(60, aspectContainer, 0.1, 100);
    camera.position.set(0, 0, 10);
    scene = new Scene();
    renderer = new WebGLRenderer({});
    renderer.setPixelRatio(Math.min(2, window.devicePixelRatio));
    renderer.setSize(width, heidht);
    container.addEventListener("resize", () => this.reResize(container));
    document.body.appendChild(renderer.domElement);

    const geometry = new BoxBufferGeometry(2, 2, 2);
    const material = new MeshBasicMaterial({ color: "red" });
    const mesh = new Mesh(geometry, material);
    scene.add(mesh);
    this.render();
  }

  reResize(container) {
    const width = container.innerWidth;
    const heidht = container.innerHeight;
    camera.aspect = container.innerWidth / container.innerHeight;

    camera.updateProjectionMatrix();
    renderer.setSize(width, heidht);
    this.render()
  }

  render() {
    renderer.render(scene, camera);
  }
}
