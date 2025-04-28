const raycaster = new THREE.Raycaster();
const pointer = new THREE.Vector2();

function onPointerMove(event) {
  pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
  pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;
  
  raycaster.setFromCamera(pointer, camera);
const intersects = raycaster.intersectObjects(scene.children);
for (let i = 0; i < intersects.length; i++) {
  intersects[i].object.material.color.set(Math.random()* 0xffffff);
  //alert('pass')
}
  
  
  
  
  
  
}


window.addEventListener( 'pointerup', onPointerMove );


