import * as THREE from '../jsm/three.module.js';
import { OrbitControls } from './jsm/OrbitControls.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
  antialias: true
});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);


//----WINDOW RESIZE HANDLING-----
const geometry = new THREE.BoxGeometry(10, 0.1, 10);
const material = new THREE.MeshBasicMaterial({ color: 'red' });
const blockPlane = new THREE.Mesh(geometry, material);
scene.add(blockPlane);


function createBox() {
  const geometry = new THREE.BoxGeometry(5, 1, 5);
  const material = new THREE.MeshBasicMaterial({ color: 'green' });
  const box = new THREE.Mesh(geometry, material);
  box.position.set(9,0,0)
  scene.add(box);
  
  

}










//______________________________
const raycaster = new THREE.Raycaster();
const pointer = new THREE.Vector2();







function onPointerMove(event) {
  pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
  pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;
  
  raycaster.setFromCamera(pointer, camera);
  const intersects = raycaster.intersectObjects(scene.children);
  
  
  
  
  
  
  for (let i = 0; i < intersects.length; i++) {
    
    
    intersects[i].object.material.color.set(Math.random()* 0xffffff);
    

    
    
  }
  
}


window.addEventListener('pointerup', onPointerMove);




















function createFloor(){
  
  
  
  
}

// box

createFloor()
createBox()
renderer.setClearColor('cyan')
const control = new OrbitControls(camera, renderer.domElement);
camera.position.z = 50

const fullscreenIcon = document.getElementById('fullscreenIcon');

fullscreenIcon.addEventListener('pointerup', () => {
  
  if (renderer.domElement.requestFullscreen) {
    renderer.domElement.requestFullscreen();
    
  } else if (renderer.domElement.webkitRequestFullscreen) {
    renderer.domElement.webkitRequestFullscreen();
  } else if (renderer.domElement.msRequestFullscreen) {
    renderer.domElement.msRequestFullscreen();
    
  }
  
});
window.onresize = function() {
  
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  
  renderer.setSize(window.innerWidth, window.innerHeight);
  
};





function animate(param) {
  requestAnimationFrame(animate)
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  renderer.render(scene, camera)
}





animate()