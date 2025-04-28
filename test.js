
/*

window.addEventListener('touchstart', function(){
  
  const counters = document.querySelectorAll('.value');
const speed = 10;

counters.forEach( counter => {
  const animate = () => {
  
  const value = +counter.getAttribute('akhi');
  const data = +counter.innerText;
     
  const time = value / speed;
     
     if(data < value) {
          counter.innerText = Math.floor(data + time);
          setTimeout(animate, 1000);
        }else{
          counter.innerText = value;
        }
     
   }
   
   animate();
});


});

*/

import * as THREE from '../jsm/three.module.js';
import { OrbitControls }from './jsm/OrbitControls.js';
import * as CANNON from '../jsm/cannon-es.js';
import CannonDebugRenderer from "./jsm/CannonDebugRenderer.js";
import { GLTFLoader } from "./jsm/GLTFLoader.js";



const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1,200 );
//.                 200
const renderer = new THREE.WebGLRenderer({
  antialias: true
});
renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( window.innerWidth, window.innerHeight );

document.body.appendChild( renderer.domElement );








const ambientLight = new THREE.AmbientLight(0xffffff,3)
scene.add(ambientLight)


// const pointLight = new THREE.PointLight( 0xff0000, 10, 10 );
// //pointLight.position.set( 10, 10, 10 );
// scene.add( pointLight );

const directionalLight = new THREE.DirectionalLight(0xffffff,3)
// directionalLight.position.set(0, 40, 0)
// directionalLight.target.position.set(0, 0, 0)
scene.add(directionalLight)






//--------------------------------------------------------------




const world = new CANNON.World({
  gravity: new CANNON.Vec3(0, -9.82, 0),
});



const  CannonD = new CannonDebugRenderer(scene, world);
const loader= new GLTFLoader();




//_______________
var geometry = new THREE.BoxGeometry(6, 10, 2); 
var material = new THREE.MeshBasicMaterial({ 
   color: 'red'
}); 
  var mesh = new THREE.Mesh(geometry, material); 
 //scene.add(mesh);
 
 

  var geometry = new THREE.BoxGeometry(2, 1, 2); 
var material = new THREE.MeshLambertMaterial({ 
   color: 0xF3FFE2 
}); 
  var meshCamera = new THREE.Mesh(geometry, material); 
  //scene.add(meshCamera); 
 
 
 
 
 
 
var geometryx = new THREE.BoxGeometry(0.5,1.3,1.8);
var materialx = new THREE.MeshBasicMaterial({
  map:new THREE.TextureLoader().load('./img/images (2).jpeg' ),
    
  
});

var geometryx1 = new THREE.BoxGeometry(5, 1, 0.5);
var materialx1 = new THREE.MeshBasicMaterial({ 
  map:new THREE.TextureLoader().load('./img/images (1).jpeg' ),
  
});

var geometryx2 = new THREE.BoxGeometry(0.1, 2, 2);
var materialx2 = new THREE.MeshBasicMaterial({ 
  map:new THREE.TextureLoader().load('./img/images (2).jpeg' ),
  });


var geometryx3 = new THREE.BoxGeometry(1.5, 0.2, 2);
var materialx3 = new THREE.MeshBasicMaterial({
  map: new THREE.TextureLoader().load('./img/images (2).jpeg'),
});


var geometryx4 = new THREE.BoxGeometry(0.2, 0.4, 1.9);
var materialx4 = new THREE.MeshBasicMaterial({
  map: new THREE.TextureLoader().load('./img/images (2).jpeg'),
});


var geometryx5 = new THREE.BoxGeometry(0.3, 1.2, 1.9);
var materialx5 = new THREE.MeshBasicMaterial({
  map: new THREE.TextureLoader().load('./img/images (2).jpeg'),
});


var geometryx6 = new THREE.BoxGeometry(4.5, 0.1, 1.9);
var materialx6 = new THREE.MeshBasicMaterial({
  map: new THREE.TextureLoader().load('./img/images (2).jpeg'),
});


var geometryx7 = new THREE.BoxGeometry(1.5,1,0.1);
var materialx7 = new THREE.MeshBasicMaterial({
  map: new THREE.TextureLoader().load('./img/images (2).jpeg'),
});

var geometryx8 = new THREE.BoxGeometry(1.5,1,0.1);
var materialx8 = new THREE.MeshBasicMaterial({
  map: new THREE.TextureLoader().load('./img/images (2).jpeg'),
});

var geometryx9 = new THREE.BoxGeometry(0.1, 0.9, 0.1);
var materialx9 = new THREE.MeshBasicMaterial({
  map: new THREE.TextureLoader().load('./img/images (2).jpeg'),
});
var geometryx10 = new THREE.BoxGeometry(0.1, 0.9, 0.1);
var materialx10 = new THREE.MeshBasicMaterial({
  map: new THREE.TextureLoader().load('./img/images (2).jpeg'),
});
















const cubeA = new THREE.Mesh(geometryx, materialx);
cubeA.position.set(-4, 0.2, 0);

const cubeB = new THREE.Mesh(geometryx1, materialx1);
cubeB.position.set(0, 0, 0);

const cubeC = new THREE.Mesh(geometryx2, materialx2);
cubeC.position.set(-1.3, 1.4, 0);



const cubeH = new THREE.Mesh(geometryx3, materialx3);
cubeH.position.set(-2, 2.5, 0);


const cubeI = new THREE.Mesh(geometryx4, materialx4);
cubeI.position.set(-2.7,2.4, 0);
cubeI.rotation.set(0,0, -0.2);

const cubeJ = new THREE.Mesh(geometryx5, materialx5);
cubeJ.position.set(-2.9,0.8, 0);
cubeJ.rotation.set(0,0, -0.2);




const cubeK = new THREE.Mesh(geometryx5, materialx5);
cubeK.position.set(-3.4,0.8, 0);
cubeK.rotation.set(0,0, -1.3);

const cubeL = new THREE.Mesh(geometryx6, materialx6);
cubeL.position.set(-2.1,0.5, 0);
//cubeK.rotation.set(0,0, -1.3);

const cubeM = new THREE.Mesh(geometryx7, materialx7);
cubeM.position.set(-2,0.9,-0.9);
//cubeK.rotation.set(0,0, -1.3);


const cubeN = new THREE.Mesh(geometryx8, materialx8);
cubeN.position.set(-2,0.9,0.9);
//cubeK.rotation.set(0,0, -1.3);

const cubeO = new THREE.Mesh(geometryx9, materialx9);
cubeO.position.set(-2.8, 1.8, 0.9);
cubeO.rotation.set(0,0, -0.1);



const cubeP = new THREE.Mesh(geometryx10, materialx10);
cubeP.position.set(-2.8, 1.8, -0.9);
cubeP.rotation.set(0,0, -0.1);


//create a group and add the two cubes
//These cubes can now be rotated / scaled etc as a group
const group = new THREE.Group();
group.add(cubeA);
group.add(cubeB);
group.add(cubeC);
group.add(cubeH);
group.add(cubeI);
group.add(cubeJ);
group.add(cubeK);
group.add(cubeL);
group.add(cubeM);
group.add(cubeN);
group.add(cubeO);
group.add(cubeP);


//scene.add(group);
 
//__________________________________
//______________group1______________
//(1.7, 0.2, 1
var geometryA1 = new THREE.BoxGeometry(3.5, 0.4, 2);
var materialA1 = new THREE.MeshBasicMaterial({ 
map:new THREE.TextureLoader().load('./img/images (1).jpeg' ) ,

  
});

var geometryA2 = new THREE.BoxGeometry(0.3, 1.9, 2);
var materialA2 = new THREE.MeshBasicMaterial({ 
  map:new THREE.TextureLoader().load('./img/images (3).jpeg' )
  
});

var geometryA3 = new THREE.BoxGeometry(3.5, 1.4, 0.4);
var materialA3 = new THREE.MeshBasicMaterial({ 
  map:new THREE.TextureLoader().load('./img/images (3).jpeg' )
  
});

var geometryA4 = new THREE.BoxGeometry(3.5, 1.4, 0.4);
var materialA4 = new THREE.MeshBasicMaterial({ 
  map:new THREE.TextureLoader().load('./img/images (3).jpeg' )
  });





const cubeD = new THREE.Mesh(geometryA1, materialA1);
cubeD.position.set(0,0,0)

const cubeE = new THREE.Mesh(geometryA2, materialA2);
cubeE.position.set(-1.9, 0.7, 0)
//_____
const cubeF = new THREE.Mesh(geometryA3, materialA3);
cubeF.position.set(0, 0.9, -0.8)

const cubeG = new THREE.Mesh(geometryA4, materialA4);
cubeG.position.set(0, 0.9, 0.8)







 const group1 = new THREE.Group();
group1.add(cubeD);
group1.add(cubeE);
group1.add(cubeF);
group1.add(cubeG);

scene.add(group1);
 
 
 
 
 
 
 
 
 
 

//_______________

//const chassisShape1 = new CANNON.Box(new CANNON.Vec3(3, 0.5, 1));
let chassisBody,chassisShape;

 chassisShape = new CANNON.Box(new CANNON.Vec3(3.5, 0.5, 1))
 
 chassisBody = new CANNON.Body({ mass:150})




chassisBody.addShape(chassisShape)

chassisBody.position.set(0, 10, 0)
chassisBody.angularVelocity.set(0, 0, 0)
world.addBody(chassisBody)

//______________________________

 const vehicle = new CANNON.RaycastVehicle({
  chassisBody,
})

const vehicle2 = new CANNON.RigidVehicle({
  chassisBody: chassisBody,
})




//_______________________________
let myCar,myBox;

 myBox = new CANNON.Box(new CANNON.Vec3(1.7, 0.2, 1))
 
 myCar = new CANNON.Body({ mass:10})




myCar.addShape(myBox)
myCar.position.set(2, 11, 0)
myCar.angularVelocity.set(0, 0, 0)
world.addBody(myCar)
//_______________


const vehicle1 = new CANNON.RigidVehicle({
  chassisBody:myCar,
})
      

const mass =1;
const mass1 = 0;
const axixWhidth = 5;
const wheelB =new CANNON.Box(new CANNON.Vec3(0.1,0.1,0.3));
const wheelB1 =new CANNON.Box(new CANNON.Vec3(0.1,0.1,0.3));
const wheelB2 =new CANNON.Box(new CANNON.Vec3(0.4,0.1,0.3));
const wheelB3 =new CANNON.Sphere(0.3);
//const wheelB1 =new CANNON.Sphere(0.3);
const wheelC =new CANNON.Box(new CANNON.Vec3(0.1,1,1));
const wheelD =new CANNON.Box(new CANNON.Vec3(1.7,0.7,0.2));
const wheelE =new CANNON.Box(new CANNON.Vec3(0.1,0.1,1));
const wheelF =new CANNON.Box(new CANNON.Vec3(0.1,1,0.5));
const wheelBB =new CANNON.Box(new CANNON.Vec3(0.1,0.1,0.9));




const wheelMaterial1 = new CANNON.Material('ground');
const wheelMaterial2 = new CANNON.Material('wheel');
//___________________
let wheelBodyA1,wheelBodyA2,wheelBodyA3,wheelBodyA4,wheelBodyA5,wheelBodyA6,wheelBodyA7,wheelBodyA8,wheelBodyA9,wheelBodyA10,wheelBodyA11,wheelBodyA12,wheelBodyA13,wheelBodyA14,wheelBodyA15;
//_____________ 
 wheelBodyA2 = new CANNON.Body({
 mass,
   wheelMaterial2,
 });
 wheelBodyA2.addShape(wheelB);
 
 vehicle1.addWheel({
  body:wheelBodyA2,
  position:new CANNON.Vec3(1.3,-0.5,-1),
  axis: new CANNON.Vec3(0,0,1),
  //direction:down
})

//____________
 wheelBodyA3 = new CANNON.Body({
 mass,
   wheelMaterial2,
 });
 wheelBodyA3.addShape(wheelB);
 
 vehicle1.addWheel({
  body:wheelBodyA3,
  position:new CANNON.Vec3(1.3,-0.5,1),
  axis: new CANNON.Vec3(0,0,1),
  //direction:down
})


//____________
wheelBodyA4 = new CANNON.Body({
  mass,
  wheelMaterial2,
});
wheelBodyA4.addShape(wheelB);

vehicle1.addWheel({
  body: wheelBodyA4,
  position: new CANNON.Vec3(-1.7, -0.3, 0),
  axis: new CANNON.Vec3(0, 0, 1),
  //direction:down
})

//____________
wheelBodyA5 = new CANNON.Body({
  mass,
  wheelMaterial2,
});
wheelBodyA5.addShape(wheelC);

vehicle1.addWheel({
  body: wheelBodyA5,
  position: new CANNON.Vec3(-1.9, 0.7, 0),
  axis: new CANNON.Vec3(0, 0, 1),
  //direction:down
})


//____________
wheelBodyA6 = new CANNON.Body({
  mass,
  wheelMaterial2,
});
wheelBodyA6.addShape(wheelB);

vehicle1.addWheel({
  body: wheelBodyA6,
  position: new CANNON.Vec3(-1.7, 1.5, 0),
  axis: new CANNON.Vec3(0, 0, 1),
  //direction:down
})



//____________
wheelBodyA7 = new CANNON.Body({
  mass,
  wheelMaterial2,
});
wheelBodyA7.addShape(wheelD);

vehicle1.addWheel({
  body: wheelBodyA7,
  position: new CANNON.Vec3(0, 0.9,0.8),
  axis: new CANNON.Vec3(0, 0, 1),
  //direction:down
})

//____________
wheelBodyA8 = new CANNON.Body({
  mass,
  wheelMaterial2,
});
wheelBodyA8.addShape(wheelD);

vehicle1.addWheel({
  body: wheelBodyA8,
  position: new CANNON.Vec3(0, 0.9,-0.8),
  axis: new CANNON.Vec3(0, 0, 1),
  //direction:down
})

//____________
wheelBodyA9 = new CANNON.Body({
  mass,
  wheelMaterial2,
});
wheelBodyA9.addShape(wheelE);

vehicle1.addWheel({
  body: wheelBodyA9,
  position: new CANNON.Vec3(-1.3, 1.7,-0),
  axis: new CANNON.Vec3(0, 0, 1),
  //direction:down
})


//____________
wheelBodyA10 = new CANNON.Body({
  mass,
  wheelMaterial2,
});
wheelBodyA10.addShape(wheelE);

vehicle1.addWheel({
  body: wheelBodyA10,
  position: new CANNON.Vec3(1.3, 1.7, -0),
  axis: new CANNON.Vec3(0, 0, 1),
  //direction:down
})


//____________
/*
wheelBodyA11 = new CANNON.Body({
  mass,
  wheelMaterial2,
});
wheelBodyA11.addShape(wheelF);

vehicle1.addWheel({
  body: wheelBodyA11,
  position: new CANNON.Vec3(1.7, 1.5, -0),
  axis: new CANNON.Vec3(0, 0, 1),
  //direction:down
})


//____________

wheelBodyA12 = new CANNON.Body({
  mass,
  wheelMaterial2,
});
wheelBodyA12.addShape(wheelB);

vehicle1.addWheel({
  body: wheelBodyA12,
  position: new CANNON.Vec3(1.9, 1.1, -0),
  axis: new CANNON.Vec3(0, 0, 1),
  //direction:down
})
*/


















const dump = document.getElementById('dump');
dump.addEventListener('touchstart',function(){
 // wheelBodyA4.velocity.set(0,5,0)
 //wheelBodyA4.position.set(0,5,0)
var as =100;

//wheelBodyA12.position.set(5,5,0)

 wheelBodyA4.velocity.set(0, as, 0)
 
  setTimeout(() => {
    if (wheelBodyA4.velocity.y < 0){
    wheelBodyA4.velocity.set(0, as, 0)
    } else {
    wheelBodyA4.velocity.set(0, as, 0)
    }
   },1000)
  //_________________ 
 
})
  
   
   
   
   
   
   











//____________________________________
//_______________vehical2__________
let wheelBody2A1,wheelBody2A2,wheelBody2A3,wheelBody2A4,wheelBody2A5,wheelBody2A6,wheelBody2A7,wheelBody2A8,wheelBody2A9;
//,wheelBody2A10,wheelBody2A11;
wheelBody2A1 = new CANNON.Body({
  mass,
  wheelMaterial2,
});
wheelBody2A1.addShape(wheelB1);

vehicle2.addWheel({
  body: wheelBody2A1,
  position: new CANNON.Vec3(3.5, 0.6, 1),
  axis: new CANNON.Vec3(0, 0, 1),
  //direction:down
})

//____________________

wheelBody2A2 = new CANNON.Body({
  mass,
  wheelMaterial2,
});
wheelBody2A2.addShape(wheelB1);

vehicle2.addWheel({
  body: wheelBody2A2,
  position: new CANNON.Vec3(3.5, 0.6, -1),
  axis: new CANNON.Vec3(0, 0, 1),
  //direction:down
})

//____________________

wheelBody2A3 = new CANNON.Body({
  mass,
  wheelMaterial2,
});
wheelBody2A3.addShape(wheelB1);

vehicle2.addWheel({
  body: wheelBody2A3,
  position: new CANNON.Vec3(3.5, 0.6, -1),
  axis: new CANNON.Vec3(0, 0, 1),
  //direction:down
})

//____________________

wheelBody2A4 = new CANNON.Body({
  mass,
  wheelMaterial2,
});
wheelBody2A4.addShape(wheelB1);

vehicle2.addWheel({
  body: wheelBody2A4,
  position: new CANNON.Vec3(3.1, 0.6, 1),
  axis: new CANNON.Vec3(0, 0, 1),
  //direction:down
})



//____________________

wheelBody2A5 = new CANNON.Body({
  mass,
  wheelMaterial2,
});
wheelBody2A5.addShape(wheelB1);

vehicle2.addWheel({
  body: wheelBody2A5,
  position: new CANNON.Vec3(3.3, 0.6, 0.4),
  axis: new CANNON.Vec3(0, 0, 1),
  //direction:down
})


//____________________

wheelBody2A6 = new CANNON.Body({
  mass,
  wheelMaterial2,
});
wheelBody2A6.addShape(wheelB1);

vehicle2.addWheel({
  body: wheelBody2A6,
  position: new CANNON.Vec3(3.3, 0.6, -0.4),
  axis: new CANNON.Vec3(0, 0, 1),
  //direction:down
})


//____________________

wheelBody2A7 = new CANNON.Body({
  mass,
  wheelMaterial2,
});
wheelBody2A7.addShape(wheelB2);

vehicle2.addWheel({
  body: wheelBody2A7,
  position: new CANNON.Vec3(3.3, 0.8,1.3),
  axis: new CANNON.Vec3(0, 0, 1),
  //direction:down
})

//____________________

wheelBody2A8 = new CANNON.Body({
  mass,
  wheelMaterial2,
});
wheelBody2A8.addShape(wheelB2);

vehicle2.addWheel({
  body: wheelBody2A8,
  position: new CANNON.Vec3(3.3, 0.8,-1.3),
  axis: new CANNON.Vec3(0, 0, 1),
  //direction:down
})


//____________________

wheelBody2A9 = new CANNON.Body({
  mass,
  wheelMaterial2,
});
wheelBody2A9.addShape(wheelBB);

vehicle2.addWheel({
  body: wheelBody2A9,
  position: new CANNON.Vec3(2.7,4,0),
  axis: new CANNON.Vec3(0, 0, 1),
  //direction:down
})
let wheelBody2A10,wheelBody2A11,wheelBody2A12,wheelBody2A13;

wheelBody2A10 = new CANNON.Body({
  mass,
  wheelMaterial2,
});
wheelBody2A10.addShape(wheelB);

vehicle2.addWheel({
  body: wheelBody2A10,
  position: new CANNON.Vec3(0.5, 0.8,0),
  axis: new CANNON.Vec3(0, 0, 1),
  //direction:down
})


//_____________
wheelBody2A11 = new CANNON.Body({
  mass,
  wheelMaterial2,
});
wheelBody2A11.addShape(wheelB);

vehicle2.addWheel({
  body: wheelBody2A11,
  position: new CANNON.Vec3(-0.2, 1.8,0),
  axis: new CANNON.Vec3(0, 0, 1),
  //direction:down
})

//_____________
wheelBody2A12 = new CANNON.Body({
  mass,
  wheelMaterial2,
});
wheelBody2A12.addShape(wheelB3);

vehicle2.addWheel({
  body: wheelBody2A12,
  position: new CANNON.Vec3(0.7,1.8,1.3),
  axis: new CANNON.Vec3(0, 0, 1),
  //direction:down
})

//_____________
wheelBody2A13 = new CANNON.Body({
  mass,
  wheelMaterial2,
});
wheelBody2A13.addShape(wheelB3);

vehicle2.addWheel({
  body: wheelBody2A13,
  position: new CANNON.Vec3(0.7,1.8,-1.3),
  axis: new CANNON.Vec3(0, 0, 1),
  //direction:down
})















vehicle2.addToWorld(world)
vehicle1.addToWorld(world)
//____________________________
function malBox(){
  
const mal = new CANNON.Body({
  mass: 1,
  shape: new CANNON.Box(new CANNON.Vec3(0.2, 0.2, 0.2)),
  position: new CANNON.Vec3(-0.3, 2.4, 0)
});
world.addBody(mal);

//_______
const mal1 = new CANNON.Body({
  mass: 1,
  shape: new CANNON.Box(new CANNON.Vec3(0.2, 0.2, 0.2)),
  position: new CANNON.Vec3(-0.3, 2.4, 0)
});
world.addBody(mal1);

//_______
const mal2 = new CANNON.Body({
  mass: 1,
  shape: new CANNON.Box(new CANNON.Vec3(0.2, 0.2, 0.2)),
  position: new CANNON.Vec3(0.3, 2.4, 0)
});
world.addBody(mal2);


//_______
const mal3 = new CANNON.Body({
  mass: 1,
  shape: new CANNON.Box(new CANNON.Vec3(0.2, 0.2, 0.2)),
  position: new CANNON.Vec3(0.3, 2.4, 0)
});
world.addBody(mal3);



//_______
const mal4 = new CANNON.Body({
  mass: 1,
  shape: new CANNON.Box(new CANNON.Vec3(0.2, 0.3, 0.2)),
  position: new CANNON.Vec3(0.5, 2.4, 0)
});
world.addBody(mal4);

//_______
const mal5 = new CANNON.Body({
  mass: 1,
  shape: new CANNON.Box(new CANNON.Vec3(0.2, 0.3, 0.2)),
  position: new CANNON.Vec3(0, 2.8, 0)
});
world.addBody(mal5);
//_______














}//malBox();
var et = document.getElementById('et');
et.addEventListener('click', function(){
    //==========
var geometry = new THREE.BoxGeometry(0.4, 0.6, 0.4);
var material = new THREE.MeshLambertMaterial(
{
  color: 'red'
});
var malA1 = new THREE.Mesh(geometry, material);
malA1.position.set(4.5, 4.6,-1.4);
scene.add(malA1);    
    
    
    
 //___   
  var geometry = new THREE.BoxGeometry(0.4,0.6,0.4);
  var material = new THREE.MeshLambertMaterial(
  {
    color: 'red'
  });
  var malA6 = new THREE.Mesh(geometry, material);
  scene.add(malA6);
  
  
  const malBox = new CANNON.Box(new CANNON.Vec3(0.2, 0.3, 0.2))
  const mala6 = new CANNON.Body({
  mass: 1,
  shape:malBox ,
  position: new CANNON.Vec3(4.5, 4.6,-1.4)
});
mala6.addShape(malBox);
world.addBody(mala6);
  
  

function mal() {
  requestAnimationFrame(mal)
  malA6.position.copy(mala6.position)
  malA6.quaternion.copy(mala6.quaternion)
}mal(); 
  
  
});






//_____________________________
const wheelOptions = {
  radius: 0.5,
  directionLocal: new CANNON.Vec3(0, -1, 0),
  suspensionStiffness: 30,
  suspensionRestLength: 0.3,
  frictionSlip: 1.4,
  dampingRelaxation: 0.9,
  dampingCompression: 0.9,
  maxSuspensionForce: 100000,
  rollInfluence: 0.01,
  axleLocal: new CANNON.Vec3(0, 0, 1),
  chassisConnectionPointLocal: new CANNON.Vec3(-1, 0, 1),
  maxSuspensionTravel: 0.3,
  customSlidingRotationalSpeed: -30,
  useCustomSlidingRotationalSpeed: true,
}


wheelOptions.chassisConnectionPointLocal.set(-2.9, -0.3, 1)
vehicle.addWheel(wheelOptions)


wheelOptions.chassisConnectionPointLocal.set(-2.9, -0.3, -1)
vehicle.addWheel(wheelOptions)

wheelOptions.chassisConnectionPointLocal.set(2.7, -0.3, 1)
vehicle.addWheel(wheelOptions)

wheelOptions.chassisConnectionPointLocal.set(2.7, -0.3, -1)

vehicle.addWheel(wheelOptions)

vehicle.addToWorld(world)
// Add the wheel bodies
  // 0.5, 0.5, 0.5, 7
  
  
  
  
  
  
  var geometry = new THREE.SphereGeometry(0.6);
  var material = new THREE.MeshLambertMaterial(
  {
    color:'red'
  });
  var mesh1 = new THREE.Mesh(geometry, material);
  scene.add(mesh1);
  
  
  
  
  //==========
var geometry = new THREE.SphereGeometry(0.6);
var material = new THREE.MeshLambertMaterial(
{
  color: 'red'
});
var mesh2 = new THREE.Mesh(geometry, material);
scene.add(mesh2);  

  //==========
var geometry = new THREE.SphereGeometry(0.6);
var material = new THREE.MeshLambertMaterial(
{
  color: 'red'
});
var mesh3 = new THREE.Mesh(geometry, material);
scene.add(mesh3);  

  //==========
var geometry = new THREE.SphereGeometry(0.6);
var material = new THREE.MeshLambertMaterial(
{
  color: 'red'
});
var mesh4 = new THREE.Mesh(geometry, material);
scene.add(mesh4);  


  
  
  
  //******************************
  const wheelBodies = []
  
  
  let wi;
   wi = new CANNON.Sphere(0.6)
   
  
   
   
  const wheelMaterial = new CANNON.Material('wheel')
        
  vehicle.wheelInfos.forEach((wheel)=>{
  // const cylinderShape = new CANNON.Cylinder(wheel.radius, wheel.radius, wheel.radius / 2, 20)
  // //wheel.radius, wheel.radius, wheel.radius / 2, 20
  
  
  const wheelBody = new CANNON.Body({
    mass: 0,
    material: wheelMaterial,
  })
  wheelBody.type = CANNON.Body.KINEMATIC
  wheelBody.collisionFilterGroup = 0
  
  
  
  
  
  
  
  
  
  const quaternion = new CANNON.Quaternion().setFromEuler(-Math.PI / 2, 0, 0)
  
  
  
   
  
  
  
  wheelBody.addShape(wi, new CANNON.Vec3(), quaternion)
  wheelBodies.push(wheelBody)
  world.addBody(wheelBody)
 
    
  })







        // Update the wheel bodies
  world.addEventListener('postStep',() =>{
  for (let i = 0; i < vehicle.wheelInfos.length; i++){
    
    
  vehicle.updateWheelTransform(i)
  
  const transform = vehicle.wheelInfos[0].worldTransform
 
  const wheelBody = wheelBodies[0]
  wheelBody.position.copy(transform.position)
  wheelBody.quaternion.copy(transform.quaternion)
  //-----------
 mesh1.position.copy(transform.position)
 mesh1.quaternion.copy(transform.quaternion)
 
 
   //-----1
   const transform1 = vehicle.wheelInfos[1].worldTransform
  
  const wheelBody1 = wheelBodies[1]
  wheelBody1.position.copy(transform1.position)
  wheelBody1.quaternion.copy(transform1.quaternion)
 
 mesh2.position.copy(transform1.position)
 mesh2.quaternion.copy(transform1.quaternion)
 
 
 
    //-----2
   const transform2 = vehicle.wheelInfos[2].worldTransform
  
  const wheelBody2 = wheelBodies[2]
  wheelBody2.position.copy(transform2.position)
  wheelBody2.quaternion.copy(transform2.quaternion)
 
 mesh3.position.copy(transform2.position)
 mesh3.quaternion.copy(transform2.quaternion)
 
 
     //-----3
const transform3 = vehicle.wheelInfos[3].worldTransform
 
const wheelBody3 = wheelBodies[3]
wheelBody3.position.copy(transform3.position)
wheelBody3.quaternion.copy(transform3.quaternion)
 
mesh4.position.copy(transform3.position)
mesh4.quaternion.copy(transform3.quaternion)
 
 
 
 
 
 
 
  
 }

 
 
})
//_____________________________________

const move1=document.getElementById('m1');
const move2=document.getElementById('m2');     
 const move3=document.getElementById('m3');     

 const move4=document.getElementById('m4');   
const move5=document.getElementById('m5');   

 move1.addEventListener('touchstart',function(){
  
  const maxForce = 500
  
  
   vehicle.applyEngineForce(-maxForce, 2)
   vehicle.applyEngineForce(-maxForce, 3)
 });        

move1.addEventListener('touchend',function(){
  
  const maxForce = 0
  
  
   vehicle.applyEngineForce(-maxForce, 2)
   vehicle.applyEngineForce(-maxForce, 3)
 });        









 move2.addEventListener('touchstart',function(){
 const maxSteerVal = 0.5  
 vehicle.setSteeringValue(maxSteerVal, 0)
 vehicle.setSteeringValue(maxSteerVal, 1)
 });
 move2.addEventListener('touchend',function(){
  const maxSteerVal1 = 0
   vehicle.setSteeringValue(maxSteerVal1, 0)
   vehicle.setSteeringValue(maxSteerVal1, 1)
  });


 move3.addEventListener('touchstart', function() {
 const maxSteerVal = 0.5
  vehicle.setSteeringValue(-maxSteerVal, 0)
 vehicle.setSteeringValue(-maxSteerVal, 1)
 });

move3.addEventListener('touchend', function() {
   const maxSteerVal2 = 0
   vehicle.setSteeringValue(maxSteerVal2, 0)
   vehicle.setSteeringValue(maxSteerVal2, 1)
 });



move4.addEventListener('touchstart', function() {
  const brakeForce =13
    vehicle.setBrake(brakeForce, 0)
     vehicle.setBrake(brakeForce, 1)
     vehicle.setBrake(brakeForce, 2)
     vehicle.setBrake(brakeForce, 3)
    });
  
 move4.addEventListener('touchend',function(){
   vehicle.setBrake(0, 0)
   vehicle.setBrake(0, 1)
  vehicle.setBrake(0, 2)
  vehicle.setBrake(0, 3)
})

move5.addEventListener('touchstart', function() {
  const maxForce1 = 100
   vehicle.applyEngineForce(maxForce1, 2)
  vehicle.applyEngineForce(maxForce1, 3)
})

move5.addEventListener('touchend', function() {
  const maxForce1 = 0
  vehicle.applyEngineForce(maxForce1, 2)
  vehicle.applyEngineForce(maxForce1, 3)
})
 





document.addEventListener('keydown', (event) => {
    const maxSteerVal = 0.5
           const maxForce = 300
           const brakeForce = 10
  
           switch (event.key) {
             case 'w':
             case 'ArrowUp':
               vehicle.applyEngineForce(-maxForce, 2)
               vehicle.applyEngineForce(-maxForce, 3)
               break
  
             case 's':
             case 'ArrowDown':
               vehicle.applyEngineForce(maxForce, 2)
               vehicle.applyEngineForce(maxForce, 3)
               break
  
             case 'a':
             case 'ArrowLeft':
               vehicle.setSteeringValue(maxSteerVal, 0)
               vehicle.setSteeringValue(maxSteerVal, 1)
               break
               case 'd':
                case 'ArrowRight':
                  vehicle.setSteeringValue(-maxSteerVal, 0)
                  vehicle.setSteeringValue(-maxSteerVal, 1)
                  break
    
                case 'b':
                  vehicle.setBrake(brakeForce, 0)
                  vehicle.setBrake(brakeForce, 1)
                  vehicle.setBrake(brakeForce, 2)
                  vehicle.setBrake(brakeForce, 3)
                  break
  
                  case 'r':
                    restartCurrentScene()
                    break
              }
            })
  
            // restartCurrentScene
  
    // Reset force on keyup
    document.addEventListener('keyup', (event) => {
      switch (event.key) {
        case 'w':
        case 'ArrowUp':
          vehicle.applyEngineForce(0, 2)
          vehicle.applyEngineForce(0, 3)
          break
  
        case 's':
        case 'ArrowDown':
          vehicle.applyEngineForce(0, 2)
          vehicle.applyEngineForce(0, 3)
          break
  
        case 'a':
        case 'ArrowLeft':
          vehicle.setSteeringValue(0, 0)
          vehicle.setSteeringValue(0, 1)
          break
          case 'd':
            case 'ArrowRight':
              vehicle.setSteeringValue(0, 0)
              vehicle.setSteeringValue(0, 1)
              break
  
            case 'b':
              vehicle.setBrake(0, 0)
              vehicle.setBrake(0, 1)
              vehicle.setBrake(0, 2)
              vehicle.setBrake(0, 3)
              break
  }
  })   
              
                       
  






//__________model gltfloader________
//_____________________________________
/*
loader.load('./modelA/Mine.glb',function(gltf){
  const maintain = gltf.scene;
  maintain.scale.set(10,10,10);
  maintain.position.set(11,3,0);
  maintain.rotation.set(0,-1.5,0)
  scene.add(maintain)
});


loader.load('./tree/Oak Tree.glb',function(gltf){
  const maintain = gltf.scene;
  maintain.scale.set(1.5,3,1);
  maintain.position.set(9,-2,-10);
  maintain.rotation.set(0,1.5,0)
  scene.add(maintain)
});

loader.load('./tree/Oak Tree.glb', function(gltf) {
  const maintain = gltf.scene;
  maintain.scale.set(1.5, 3, 1);
  maintain.position.set(9, -2, 10);
  maintain.rotation.set(0, 1.9, 0)
  scene.add(maintain)
});

loader.load('./house/Cottage (1).glb', function(gltf) {
  const maintain = gltf.scene;
  maintain.scale.set(0.8, 1, 0.8);
  maintain.position.set(-4, 0,-20);
  maintain.rotation.set(0, 0, 0)
  scene.add(maintain)
});

loader.load('./house/Cottage (1).glb', function(gltf) {
  const maintain = gltf.scene;
  maintain.scale.set(0.8, 1, 0.8);
  maintain.position.set(-45, 0,-25);
  maintain.rotation.set(0, 0, 0)
  scene.add(maintain)
});

loader.load('./villageMarket/Rock.glb', function(gltf) {
  const maintain = gltf.scene;
  maintain.scale.set(8, 5,8);
  maintain.position.set(-49, -6,-12);
  maintain.rotation.set(0, 0, 0)
  scene.add(maintain)
});

loader.load('./villageMarket/Tree.glb', function(gltf) {
  const maintain = gltf.scene;
  maintain.scale.set(2, 5,2);
  maintain.position.set(-40, 0,10);
  maintain.rotation.set(0, 0, 0)
  scene.add(maintain)
});

*/
let truck;
loader.load('./sceneA.glb', function(gltf) {
  truck = gltf.scene;
  truck.scale.set(1.1, 1, 1);
  truck.position.set(50,0,0)
  
  scene.add(truck)
  animate();
});










//______________Sphere_______________

var geometry = new THREE.SphereGeometry(50); 
var material = new THREE.MeshBasicMaterial({ 
   map:new THREE.TextureLoader().load('./img/bac.jpeg' )
}); 
  var s1 = new THREE.Mesh(geometry, material); 
 scene.add(s1);
 
 
 const S1 = new CANNON.Body({
   mass:0,
   shape:new CANNON.Sphere(50),
   position:new CANNON.Vec3(0,-35,-50)
 })
 S1.quaternion.setFromEuler(0,0,1.5)
world.addBody(S1)

//_____2
var geometry = new THREE.SphereGeometry(50); 
var material = new THREE.MeshBasicMaterial({ 
   map:new THREE.TextureLoader().load('./img/grass_dirt.png' )
}); 
  var s2 = new THREE.Mesh(geometry, material); 
 scene.add(s2);
 



const S2 = new CANNON.Body({
   mass:0,
   shape:new CANNON.Sphere(50),
   position:new CANNON.Vec3(-5,-46,-10)
 })
 S2.quaternion.setFromEuler(-0.8,0, 0)
world.addBody(S2)


//_____3

var geometry = new THREE.SphereGeometry(50); 
var material = new THREE.MeshBasicMaterial({ 
   map:new THREE.TextureLoader().load('./img/grass_dirt.png' )
}); 
  var s3 = new THREE.Mesh(geometry, material); 
 scene.add(s3);
 


const S3 = new CANNON.Body({
  mass: 0,
  shape: new CANNON.Sphere(50),
  position: new CANNON.Vec3(-5, -46, 10)
})
S3.quaternion.setFromEuler(1,0, 0)
world.addBody(S3)

//_______4
var geometry = new THREE.SphereGeometry(50); 
var material = new THREE.MeshBasicMaterial({ 
   map:new THREE.TextureLoader().load('./img/bac.jpeg' )
}); 
  var s4 = new THREE.Mesh(geometry, material); 
 scene.add(s4);
 
const S4 = new CANNON.Body({
  mass: 0,
  shape: new CANNON.Sphere(50),
  position: new CANNON.Vec3(-2, -40, 40)
})
S4.quaternion.setFromEuler(1, 0,0)
world.addBody(S4)


//_______5
var geometry = new THREE.SphereGeometry(50);
var material = new THREE.MeshBasicMaterial({
  map: new THREE.TextureLoader().load('./img/bac.jpeg')
});
var s5 = new THREE.Mesh(geometry, material);
scene.add(s5);

const S5 = new CANNON.Body({
  mass: 0,
  shape: new CANNON.Sphere(50),
  position: new CANNON.Vec3(20, -40, 40)
})
S5.quaternion.setFromEuler(1, 0, 0)
world.addBody(S5)


//_______6
var geometry = new THREE.SphereGeometry(50);
var material = new THREE.MeshBasicMaterial({
  map: new THREE.TextureLoader().load('./img/bac.jpeg')
});
var s6 = new THREE.Mesh(geometry, material);
scene.add(s6);

const S6 = new CANNON.Body({
  mass: 0,
  shape: new CANNON.Sphere(50),
  position: new CANNON.Vec3(100, -40, 50)
})
S6.quaternion.setFromEuler(1, 0, 0)
world.addBody(S6)

//_______7
var geometry = new THREE.SphereGeometry(100);
var material = new THREE.MeshBasicMaterial({
  map: new THREE.TextureLoader().load('./img/bac.jpeg')
});
var s7 = new THREE.Mesh(geometry, material);
scene.add(s7);

const S7 = new CANNON.Body({
  mass: 0,
  shape: new CANNON.Sphere(100),
  position: new CANNON.Vec3(90, -80, -50)
})
S7.quaternion.setFromEuler(1.5, 0, 0)
world.addBody(S7)



//_______8
var geometry = new THREE.SphereGeometry(100);
var material = new THREE.MeshBasicMaterial({
  map: new THREE.TextureLoader().load('./img/bac.jpeg')
});
var s8 = new THREE.Mesh(geometry, material);
scene.add(s8);

const S8 = new CANNON.Body({
  mass: 0,
  shape: new CANNON.Sphere(100),
  position: new CANNON.Vec3(140, -80, -20)
})
S8.quaternion.setFromEuler(1.5, 0, 0)
world.addBody(S8)


//_______9
var geometry = new THREE.SphereGeometry(100);
var material = new THREE.MeshBasicMaterial({
  map: new THREE.TextureLoader().load('./img/bac.jpeg')
});
var s9 = new THREE.Mesh(geometry, material);
scene.add(s9);

const S9 = new CANNON.Body({
  mass: 0,
  shape: new CANNON.Sphere(100),
  position: new CANNON.Vec3(95, -80, 180)
})
S9.quaternion.setFromEuler(1.5, 0, 0)
world.addBody(S9)


//_______10
var geometry = new THREE.SphereGeometry(100);
var material = new THREE.MeshBasicMaterial({
  map: new THREE.TextureLoader().load('./img/bac.jpeg')
});
var s10 = new THREE.Mesh(geometry, material);
scene.add(s10);

const S10 = new CANNON.Body({
  mass: 0,
  shape: new CANNON.Sphere(100),
  position: new CANNON.Vec3(50, -90, 150)
})
S10.quaternion.setFromEuler(1.5, 1, 0)
world.addBody(S10)


//_______11
var geometry = new THREE.SphereGeometry(100);
var material = new THREE.MeshBasicMaterial({
  map: new THREE.TextureLoader().load('./img/bac.jpeg')
});
var s11 = new THREE.Mesh(geometry, material);
scene.add(s11);

const S11 = new CANNON.Body({
  mass: 0,
  shape: new CANNON.Sphere(100),
  position: new CANNON.Vec3(250, -90, 100)
})
S11.quaternion.setFromEuler(1.5, 1, 0)
world.addBody(S11)


//_______12
var geometry = new THREE.SphereGeometry(100);
var material = new THREE.MeshBasicMaterial({
  map: new THREE.TextureLoader().load('./img/bac.jpeg')
});
var s12 = new THREE.Mesh(geometry, material);
scene.add(s12);

const S12 = new CANNON.Body({
  mass: 0,
  shape: new CANNON.Sphere(100),
  position: new CANNON.Vec3(200, -93, 80)
})
S12.quaternion.setFromEuler(1.5, 1, 0)
world.addBody(S12)


//_______13
var geometry = new THREE.SphereGeometry(100);
var material = new THREE.MeshBasicMaterial({
  map: new THREE.TextureLoader().load('./img/bac.jpeg')
});

  var s13 = new THREE.Mesh(geometry, material);
  scene.add(s13);

const S13 = new CANNON.Body({
  mass: 0,
  shape: new CANNON.Sphere(100),
  position: new CANNON.Vec3(170, -93, 175)
})
S13.quaternion.setFromEuler(1.5, 1, 0)
world.addBody(S13)


//___14
var geometry = new THREE.SphereGeometry(100);
var material = new THREE.MeshBasicMaterial({
  map: new THREE.TextureLoader().load('./img/bac.jpeg')
});
var s14= new THREE.Mesh(geometry, material);
scene.add(s14);

const S14 = new CANNON.Body({
  mass: 0,
  shape: new CANNON.Sphere(100),
  position: new CANNON.Vec3(-130, -77, 175)
})
S14.quaternion.setFromEuler(1.5, 1, 0)
world.addBody(S14)

//___15
var geometry = new THREE.SphereGeometry(100);
var material = new THREE.MeshBasicMaterial({
  map: new THREE.TextureLoader().load('./img/bac.jpeg')
});
var s15 = new THREE.Mesh(geometry, material);
scene.add(s15);

const S15 = new CANNON.Body({
  mass: 0,
  shape: new CANNON.Sphere(100),
  position: new CANNON.Vec3(-90, -82, 120)
})
S15.quaternion.setFromEuler(1.5, 1, 0)
world.addBody(S15)



//___16
var geometry = new THREE.SphereGeometry(100);
var material = new THREE.MeshBasicMaterial({
  map: new THREE.TextureLoader().load('./img/bac.jpeg')
});
var s16 = new THREE.Mesh(geometry, material);
scene.add(s16);

const S16 = new CANNON.Body({
  mass: 0,
  shape: new CANNON.Sphere(100),
  position: new CANNON.Vec3(-90, -87, 80)
})
S16.quaternion.setFromEuler(1.5, 1, 0)
world.addBody(S16)

//___17
var geometry = new THREE.SphereGeometry(100);
var material = new THREE.MeshBasicMaterial({
  map: new THREE.TextureLoader().load('./img/bac.jpeg')
});
var s17 = new THREE.Mesh(geometry, material);
scene.add(s17);

const S17 = new CANNON.Body({
  mass: 0,
  shape: new CANNON.Sphere(100),
  position: new CANNON.Vec3(-90, -87, -60)
})
S17.quaternion.setFromEuler(1.5, 1, 0)
world.addBody(S17)



























//           village1 code end...
//___________________________________________________place box
var geometry = new THREE.BoxGeometry(1000, 0.2, 1000); 
var material = new THREE.MeshBasicMaterial({ 
   map:new THREE.TextureLoader().load('./img/bac.jpeg' )
}); 
  var p1 = new THREE.Mesh(geometry, material); 
 scene.add(p1);
 
  const P1 = new CANNON.Body({
   mass:0,
   shape:new CANNON.Box(new CANNON.Vec3(500,0.3,500)),
   position:new CANNON.Vec3(0,0,0)
 })
world.addBody(P1)

//_________2
var geometry = new THREE.BoxGeometry(100, 7, 100); 
var material = new THREE.MeshBasicMaterial({ 
   map:new THREE.TextureLoader().load('./img/bac.jpeg' )
}); 
  var p2 = new THREE.Mesh(geometry, material); 
 scene.add(p2);
 
 const please2=new CANNON.Box(new CANNON.Vec3(50,3.7,50));
 const P2 = new CANNON.Body({
   mass:0,
   shape:please2,
   position:new CANNON.Vec3(-60,-1,0)
 })
 P2.quaternion.setFromEuler(0,0,0);
 P2.addShape(please2)
world.addBody(P2)


//_________3
var geometry = new THREE.BoxGeometry(40,4, 40); 
var material = new THREE.MeshBasicMaterial({ 
   map:new THREE.TextureLoader().load('./img/bac.jpeg' )
}); 
  var p3 = new THREE.Mesh(geometry, material); 
 scene.add(p3);
 
 const please3=new CANNON.Box(new CANNON.Vec3(20,2.2,20));
 const P3 = new CANNON.Body({
   mass:0,
   position:new CANNON.Vec3(-76,2,0)
 })
 P3.quaternion.setFromEuler(0,0,0);
 P3.addShape(please3)
world.addBody(P3)



//_________4
var geometry = new THREE.BoxGeometry(40,3, 40); 
var material = new THREE.MeshBasicMaterial({ 
   map:new THREE.TextureLoader().load('./img/bac.jpeg' )
}); 
  var p4 = new THREE.Mesh(geometry, material); 
 scene.add(p4);
 
 const please4=new CANNON.Box(new CANNON.Vec3(20,1.7,20));
 const P4 = new CANNON.Body({
   mass:0,
   position:new CANNON.Vec3(-50,1.4,0)
 })
 P4.quaternion.setFromEuler(0,0,0);
 P4.addShape(please4)
world.addBody(P4)



//_________5
var geometry = new THREE.BoxGeometry(40,3, 40); 
var material = new THREE.MeshBasicMaterial({ 
   map:new THREE.TextureLoader().load('./img/bac.jpeg' )
}); 
  var p5 = new THREE.Mesh(geometry, material); 
 scene.add(p5);
 
 const please5=new CANNON.Box(new CANNON.Vec3(20,1.7,20));
 const P5 = new CANNON.Body({
   mass:0,
   position:new CANNON.Vec3(-40,1.4,60)
 })
 P5.quaternion.setFromEuler(0,0,0);
 P5.addShape(please5)
world.addBody(P5)


//_________6
var geometry = new THREE.BoxGeometry(40,3, 40); 
var material = new THREE.MeshBasicMaterial({ 
   map:new THREE.TextureLoader().load('./img/bac.jpeg' )
}); 
  var p6 = new THREE.Mesh(geometry, material); 
 scene.add(p6);
 
 const please6=new CANNON.Box(new CANNON.Vec3(20,1.7,20));
 const P6 = new CANNON.Body({
   mass:0,
   position:new CANNON.Vec3(25,-1.1,-20)
 })
 P6.quaternion.setFromEuler(0,0,0);
 P6.addShape(please6)
world.addBody(P6)



//_________7
var geometry = new THREE.BoxGeometry(40,3, 40); 
var material = new THREE.MeshBasicMaterial({ 
   map:new THREE.TextureLoader().load('./img/bac.jpeg' )
}); 
  var p7 = new THREE.Mesh(geometry, material); 
 scene.add(p7);
 
 const please7=new CANNON.Box(new CANNON.Vec3(20,1.7,20));
 const P7 = new CANNON.Body({
   mass:0,
   position:new CANNON.Vec3(40,-1,50)
 })
 P7.quaternion.setFromEuler(0,0,0);
 P7.addShape(please7)
world.addBody(P7)


//_________8
var geometry = new THREE.BoxGeometry(100,3,100); 
var material = new THREE.MeshBasicMaterial({ 
   map:new THREE.TextureLoader().load('./img/bac.jpeg' )
}); 
  var p8 = new THREE.Mesh(geometry, material); 
 scene.add(p8);
 
 const please8=new CANNON.Box(new CANNON.Vec3(50,1.7,50));
 const P8 = new CANNON.Body({
   mass:0,
   position:new CANNON.Vec3(0,-0.7,90)
 })
 P8.quaternion.setFromEuler(0,0,0);
 P8.addShape(please8)
world.addBody(P8)


//_________9
var geometry = new THREE.BoxGeometry(100,3,100); 
var material = new THREE.MeshBasicMaterial({ 
   map:new THREE.TextureLoader().load('./img/bac.jpeg' )
}); 
  var p9 = new THREE.Mesh(geometry, material); 
 scene.add(p9);
 
 const please9=new CANNON.Box(new CANNON.Vec3(50,1.7,50));
 const P9 = new CANNON.Body({
   mass:0,
   position:new CANNON.Vec3(80,-0.4,150)
 })
 P9.quaternion.setFromEuler(0,0,0);
 P9.addShape(please9)
world.addBody(P9)



//_________10
var geometry = new THREE.BoxGeometry(100,3,100); 
var material = new THREE.MeshBasicMaterial({ 
   map:new THREE.TextureLoader().load('./img/bac.jpeg' )
}); 
  var p10 = new THREE.Mesh(geometry, material); 
 scene.add(p10);
 
 const please10=new CANNON.Box(new CANNON.Vec3(50,1.7,50));
 const P10 = new CANNON.Body({
   mass:0,
   position:new CANNON.Vec3(170,-0.9,190)
 })
 P10.quaternion.setFromEuler(0,0,0);
 P10.addShape(please10)
world.addBody(P10)

//_________11
var geometry = new THREE.BoxGeometry(100,3,100); 
var material = new THREE.MeshBasicMaterial({ 
   map:new THREE.TextureLoader().load('./img/bac.jpeg' )
}); 
  var p11 = new THREE.Mesh(geometry, material); 
 scene.add(p11);
 
 const please11=new CANNON.Box(new CANNON.Vec3(50,1.7,50));
 const P11 = new CANNON.Body({
   mass:0,
   position:new CANNON.Vec3(200,-0.9,80)
 })
 P11.quaternion.setFromEuler(0,0,0);
 P11.addShape(please11)
world.addBody(P11)





/*__________gltfLoader________*/
//const loader=new GLTFLoader();

loader.load('./villageMarket/Barn.glb', function(gltf) {
  var tree1 = gltf.scene;
  tree1.scale.set(18, 20, 18);
  tree1.position.set(-22, 2.5, -18)
  scene.add(tree1)
});



/*
loader.load('./villageMarket/Tree.glb', function(gltf){
  var tree1 = gltf.scene;
  tree1.position.set(0,5.5,-10)
  scene.add(tree1)
});

loader.load('./villageMarket/Tree.glb', function(gltf) {
  var tree1 = gltf.scene;
  tree1.position.set(0, 5.5, -15)
  scene.add(tree1)
});

loader.load('./villageMarket/Tree.glb', function(gltf) {
  var tree1 = gltf.scene;
  tree1.position.set(-8, 5.5, -15)
  scene.add(tree1)
});


loader.load('./tree/tree1.glb', function(gltf) {
  var tree1 = gltf.scene;
  tree1.position.set(-4, 2, -15)
  scene.add(tree1)
});




loader.load('./tree/tree1.glb', function(gltf) {
  var tree1 = gltf.scene;
  tree1.position.set(10, 2,-20)
  scene.add(tree1)
});

loader.load('./tree/tree1.glb', function(gltf) {
  var tree1 = gltf.scene;
  tree1.position.set(25, 0, -25)
  scene.add(tree1)
});

loader.load('./tree/tree1.glb', function(gltf) {
  var tree1 = gltf.scene;
  tree1.position.set(50, 0, -6)
  scene.add(tree1)
});

loader.load('./tree/tree1.glb', function(gltf) {
  var tree1 = gltf.scene;
  tree1.position.set(70, 0, 6)
  tree1.rotation.y = 1;
  scene.add(tree1)
});


loader.load('./tree/tree1.glb', function(gltf) {
  var tree1 = gltf.scene;
  tree1.position.set(80, 0, 30)
  tree1.rotation.y = -1;
  scene.add(tree1)
});

loader.load('./tree/tree1.glb', function(gltf) {
  var tree1 = gltf.scene;
  tree1.position.set(125, 0, 40)
  tree1.rotation.y = -1;
  scene.add(tree1)
});


loader.load('./tree/tree1.glb', function(gltf) {
  var tree1 = gltf.scene;
  tree1.position.set(153, 0, 40)
  tree1.rotation.y = -1;
  scene.add(tree1)
});


loader.load('./tree/tree1.glb', function(gltf) {
  var tree1 = gltf.scene;
  tree1.position.set(155, 0, 60)
  tree1.rotation.y = -1;
  scene.add(tree1)
});


loader.load('./tree/tree1.glb', function(gltf) {
  var tree1 = gltf.scene;
  tree1.position.set(180, 0, 110)
  tree1.rotation.y = -1;
  scene.add(tree1)
});

loader.load('./tree/tree1.glb', function(gltf) {
  var tree1 = gltf.scene;
  tree1.position.set(200, 0.7, 110)
  tree1.rotation.y = -1;
  scene.add(tree1)
});

loader.load('./tree/tree1.glb', function(gltf) {
  var tree1 = gltf.scene;
  tree1.position.set(215, 1, 100)
  tree1.rotation.y = 1;
  scene.add(tree1)
});























//___________GRASS____________
loader.load('./villageMarket/Grass Patch.glb', function(gltf) {
  var tree1 = gltf.scene;
  tree1.scale.set(18,20,18);
  tree1.position.set(-22, 2.5, -50)
  scene.add(tree1)
});


loader.load('./villageMarket/Grass Patch.glb', function(gltf) {
  var tree1 = gltf.scene;
  tree1.scale.set(18,20,18);
  tree1.position.set(22, 2.5, -50)
  scene.add(tree1)
});


loader.load('./villageMarket/Grass Patch.glb', function(gltf) {
  var tree1 = gltf.scene;
  tree1.scale.set(18, 20, 18);
  tree1.position.set(22, 2.5, 50)
  scene.add(tree1)
});

loader.load('./villageMarket/Grass Patch.glb', function(gltf) {
  var tree1 = gltf.scene;
  tree1.scale.set(18, 20, 18);
  tree1.position.set(50, 1.5,120)
  scene.add(tree1)
});

loader.load('./villageMarket/Grass Patch.glb', function(gltf) {
  var tree1 = gltf.scene;
  tree1.scale.set(18, 20, 18);
  tree1.position.set(-50, 1.5, 120)
  scene.add(tree1)
});

loader.load('./villageMarket/Grass Patch.glb', function(gltf) {
  var tree1 = gltf.scene;
  tree1.scale.set(18, 20, 18);
  tree1.position.set(-50, 1.5, 80)
  scene.add(tree1)
});



loader.load('/villageMarket/Tree.glb', function(gltf){
  var tree1 = gltf.scene;
  tree1.position.set(0,5.5,10)
  scene.add(tree1)
});

*/








//--------------------------------------------------------------
//____________Road______________
var geometry = new THREE.BoxGeometry(20,3,18); 
var material = new THREE.MeshBasicMaterial({ 
   map:new THREE.TextureLoader().load('.//roadImg/road1.jpeg' )
}); 
  var ro1 = new THREE.Mesh(geometry, material); 
 scene.add(ro1);
 
 const road1=new CANNON.Box(new CANNON.Vec3(10,1.7,9));
 const rO1 = new CANNON.Body({
   mass:0,
   position:new CANNON.Vec3(20,-1.3,3)
 })
 rO1.quaternion.setFromEuler(0,0,0);
 rO1.addShape(road1)
world.addBody(rO1)

//________road2_____

var geometry = new THREE.BoxGeometry(20,3,18); 
var material = new THREE.MeshBasicMaterial({ 
   map:new THREE.TextureLoader().load('./roadImg/road1.jpeg' )
}); 
  var ro2 = new THREE.Mesh(geometry, material); 
 scene.add(ro2);
 
 const road2=new CANNON.Box(new CANNON.Vec3(10,1.7,9));
 const rO2 = new CANNON.Body({
   mass:0,
   position:new CANNON.Vec3(39.8,-1.3,3)
 })
 rO2.quaternion.setFromEuler(0,0,0);
 rO2.addShape(road2)
world.addBody(rO2)


//________road3_____

var geometry = new THREE.BoxGeometry(20,3.1,18); 
var material = new THREE.MeshBasicMaterial({ 
   map:new THREE.TextureLoader().load('./roadImg/road1.jpeg' )
}); 
  var ro3 = new THREE.Mesh(geometry, material); 
 scene.add(ro3);
 
 const road3=new CANNON.Box(new CANNON.Vec3(10,1.7,9));
 const rO3 = new CANNON.Body({
   mass:0,
   position:new CANNON.Vec3(52.6,-1.3,10)
 })
 rO3.quaternion.setFromEuler(0,-0.7,0);
 rO3.addShape(road3)
world.addBody(rO3)


//________road4_____
var geometry = new THREE.BoxGeometry(20,3,18); 
var material = new THREE.MeshBasicMaterial({ 
   map:new THREE.TextureLoader().load('./roadImg/road1.jpeg' )
}); 
  var ro4 = new THREE.Mesh(geometry, material); 
 scene.add(ro4);
 
 const road4=new CANNON.Box(new CANNON.Vec3(10,1.7,9));
 const rO4 = new CANNON.Body({
   mass:0,
   position:new CANNON.Vec3(63,-1.3,23)
 })
 rO4.quaternion.setFromEuler(0,-1.1,0);
 rO4.addShape(road4)
world.addBody(rO4)


//________road5_____
var geometry = new THREE.BoxGeometry(20, 3.1, 18);
var material = new THREE.MeshBasicMaterial({
  map: new THREE.TextureLoader().load('./roadImg/road1.jpeg')
});
var ro5 = new THREE.Mesh(geometry, material);
scene.add(ro5);

const road5 = new CANNON.Box(new CANNON.Vec3(10, 1.7, 9));
const rO5 = new CANNON.Body({
  mass: 0,
  position: new CANNON.Vec3(67.4, -1.3, 40)
})
rO5.quaternion.setFromEuler(0, -1.5, 0);
rO5.addShape(road5)
world.addBody(rO5)


//________road6_____
var geometry = new THREE.BoxGeometry(20, 3.1,18);
var material = new THREE.MeshBasicMaterial({
  map: new THREE.TextureLoader().load('./roadImg/road1.jpeg')
});
var ro6 = new THREE.Mesh(geometry, material);
scene.add(ro6);

const road6 = new CANNON.Box(new CANNON.Vec3(10, 1.7, 9));
const rO6 = new CANNON.Body({
  mass: 0,
  position: new CANNON.Vec3(68, -1.3, 60)
})
rO6.quaternion.setFromEuler(0, -1.5, 0);
rO6.addShape(road6)
world.addBody(rO6)


//________road7_____
var geometry = new THREE.BoxGeometry(20, 3,18);
var material = new THREE.MeshBasicMaterial({
  map: new THREE.TextureLoader().load('./roadImg/road1.jpeg')
});
var ro7 = new THREE.Mesh(geometry, material);
scene.add(ro7);

const road7 = new CANNON.Box(new CANNON.Vec3(10, 1.7, 9));
const rO7 = new CANNON.Body({
  mass: 0,
  position: new CANNON.Vec3(72, -1.3, 75)
})
rO7.quaternion.setFromEuler(0, -1, 0);
rO7.addShape(road7)
world.addBody(rO7)



//________road8_____
var geometry = new THREE.BoxGeometry(20,3.1,18);
var material = new THREE.MeshBasicMaterial({
  map: new THREE.TextureLoader().load('./roadImg/road1.jpeg')
});
var ro8 = new THREE.Mesh(geometry, material);
scene.add(ro8);

const road8 = new CANNON.Box(new CANNON.Vec3(10, 1.7, 9));
const rO8 = new CANNON.Body({
  mass: 0,
  position: new CANNON.Vec3(80, -1.3, 80)
})
rO8.quaternion.setFromEuler(0, -0.6, 0);
rO8.addShape(road8)
world.addBody(rO8)


//________road9_____
var geometry = new THREE.BoxGeometry(20,3,18);
var material = new THREE.MeshBasicMaterial({
  map: new THREE.TextureLoader().load('./roadImg/road1.jpeg')
});
var ro9 = new THREE.Mesh(geometry, material);
scene.add(ro9);

const road9 = new CANNON.Box(new CANNON.Vec3(10, 1.7, 9));
const rO9 = new CANNON.Body({
  mass: 0,
  position: new CANNON.Vec3(94, -1.3, 86)
})
rO9.quaternion.setFromEuler(0,-0, 0);
rO9.addShape(road9)
world.addBody(rO9)

//________road10_____
var geometry = new THREE.BoxGeometry(20,3.1,18);
var material = new THREE.MeshBasicMaterial({
  map: new THREE.TextureLoader().load('./roadImg/road1.jpeg')
});
var ro10 = new THREE.Mesh(geometry, material);
scene.add(ro10);

const road10 = new CANNON.Box(new CANNON.Vec3(10, 1.7, 9));
const rO10 = new CANNON.Body({
  mass: 0,
  position: new CANNON.Vec3(113, -1.3, 86)
})
rO10.quaternion.setFromEuler(0,-0, 0);
rO10.addShape(road10)
world.addBody(rO10)

//________road11_____
var geometry = new THREE.BoxGeometry(20,3,18);
var material = new THREE.MeshBasicMaterial({
  map: new THREE.TextureLoader().load('./roadImg/road1.jpeg')
});
var ro11 = new THREE.Mesh(geometry, material);
scene.add(ro11);

const road11 = new CANNON.Box(new CANNON.Vec3(10, 1.7, 9));
const rO11 = new CANNON.Body({
  mass: 0,
  position: new CANNON.Vec3(130, -1.3, 90)
})
rO11.quaternion.setFromEuler(0,-0.5, 0);
rO11.addShape(road11)
world.addBody(rO11)

//________road12_____
var geometry = new THREE.BoxGeometry(20,3.1,18);
var material = new THREE.MeshBasicMaterial({
  map: new THREE.TextureLoader().load('./roadImg/road1.jpeg')
});
var ro12 = new THREE.Mesh(geometry, material);
scene.add(ro12);

const road12 = new CANNON.Box(new CANNON.Vec3(10, 1.7, 9));
const rO12 = new CANNON.Body({
  mass: 0,
  position: new CANNON.Vec3(135, -1.3, 100)
})
rO12.quaternion.setFromEuler(0,-1.2, 0);
rO12.addShape(road12)
world.addBody(rO12)



//________road13_____
var geometry = new THREE.BoxGeometry(20,3,18);
var material = new THREE.MeshBasicMaterial({
  map: new THREE.TextureLoader().load('./roadImg/road1.jpeg')
});
var ro13 = new THREE.Mesh(geometry, material);
scene.add(ro13);

const road13 = new CANNON.Box(new CANNON.Vec3(10, 1.7, 9));
const rO13 = new CANNON.Body({
  mass: 0,
  position: new CANNON.Vec3(139,-1.3, 115)
})
rO13.quaternion.setFromEuler(0,-1.5, 0);
rO13.addShape(road13)
world.addBody(rO13)

//________road14_____
var geometry = new THREE.BoxGeometry(20,3.1,18);
var material = new THREE.MeshBasicMaterial({
  map: new THREE.TextureLoader().load('./roadImg/road1.jpeg')
});
var ro14 = new THREE.Mesh(geometry, material);
scene.add(ro14);

const road14 = new CANNON.Box(new CANNON.Vec3(10, 1.7, 9));
const rO14 = new CANNON.Body({
  mass: 0,
  position: new CANNON.Vec3(145,-1.3, 127)
})
rO14.quaternion.setFromEuler(0,-1, 0);
rO14.addShape(road14)
world.addBody(rO14)



//________road15_____
var geometry = new THREE.BoxGeometry(20,3,18);
var material = new THREE.MeshBasicMaterial({
  map: new THREE.TextureLoader().load('./roadImg/road1.jpeg')
});
var ro15 = new THREE.Mesh(geometry, material);
scene.add(ro15);

const road15 = new CANNON.Box(new CANNON.Vec3(10, 1.7, 9));
const rO15 = new CANNON.Body({
  mass: 0,
  position: new CANNON.Vec3(150,-1.3, 136)
})
rO15.quaternion.setFromEuler(0,0, 0);
rO15.addShape(road15)
world.addBody(rO15)

//________road16_____
var geometry = new THREE.BoxGeometry(20,3.1,18);
var material = new THREE.MeshBasicMaterial({
  map: new THREE.TextureLoader().load('./roadImg/road1.jpeg')
});
var ro16 = new THREE.Mesh(geometry, material);
scene.add(ro16);

const road16 = new CANNON.Box(new CANNON.Vec3(10, 1.7, 9));
const rO16 = new CANNON.Body({
  mass: 0,
  position: new CANNON.Vec3(168,-1.3, 136)
})
rO16.quaternion.setFromEuler(0,0, 0);
rO16.addShape(road16)
world.addBody(rO16)


//________road17_____
var geometry = new THREE.BoxGeometry(20,3.1,18);
var material = new THREE.MeshBasicMaterial({
  map: new THREE.TextureLoader().load('./roadImg/road1.jpeg')
});
var ro17 = new THREE.Mesh(geometry, material);
scene.add(ro17);

const road17 = new CANNON.Box(new CANNON.Vec3(10, 1.7, 9));
const rO17 = new CANNON.Body({
  mass: 0,
  position: new CANNON.Vec3(188,-1.3, 136)
})
rO17.quaternion.setFromEuler(0,0, 0);
rO17.addShape(road17)
world.addBody(rO17)


//________road18_____
var geometry = new THREE.BoxGeometry(20,3.1,18);
var material = new THREE.MeshBasicMaterial({
  map: new THREE.TextureLoader().load('./roadImg/road1.jpeg')
});
var ro18 = new THREE.Mesh(geometry, material);
scene.add(ro18);

const road18 = new CANNON.Box(new CANNON.Vec3(10, 1.7, 9));
const rO18 = new CANNON.Body({
  mass: 0,
  position: new CANNON.Vec3(208,-1.3, 136)
})
rO18.quaternion.setFromEuler(0,0, 0);
rO18.addShape(road18)
world.addBody(rO18)


//________road19_____
var geometry = new THREE.BoxGeometry(20,3,18);
var material = new THREE.MeshBasicMaterial({
  map: new THREE.TextureLoader().load('./roadImg/road1.jpeg')
});
var ro19 = new THREE.Mesh(geometry, material);
scene.add(ro19);

const road19 = new CANNON.Box(new CANNON.Vec3(10, 1.7, 9));
const rO19 = new CANNON.Body({
  mass: 0,
  position: new CANNON.Vec3(220,-1.3, 137)
})
rO19.quaternion.setFromEuler(0,-0.4, 0);
rO19.addShape(road19)
world.addBody(rO19)



//________road20_____
var geometry = new THREE.BoxGeometry(20,3.1,18);
var material = new THREE.MeshBasicMaterial({
  map: new THREE.TextureLoader().load('./roadImg/road1.jpeg')
});
var ro20 = new THREE.Mesh(geometry, material);
scene.add(ro20);

const road20 = new CANNON.Box(new CANNON.Vec3(10, 1.7, 9));
const rO20 = new CANNON.Body({
  mass: 0,
  position: new CANNON.Vec3(227,-1.3, 149)
})
rO20.quaternion.setFromEuler(0,-1.4, 0);
rO20.addShape(road20)
world.addBody(rO20)
//______________________________
//____________to________________

//________road20_____
var geometry = new THREE.BoxGeometry(100, 3,100);
var material = new THREE.MeshBasicMaterial({
  map: new THREE.TextureLoader().load('./img/Floors.jpg')
});
var ro21 = new THREE.Mesh(geometry, material);
scene.add(ro21);

const road21 = new CANNON.Box(new CANNON.Vec3(50, 1.7,50));
const rO21 = new CANNON.Body({
  mass: 0,
  position: new CANNON.Vec3(250, -1.3, 205)
})
rO21.quaternion.setFromEuler(0,0, 0);
rO21.addShape(road21)
world.addBody(rO21)





























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






camera.position.set(0,0,30);

group1.add(camera)
renderer.setClearColor("lightcyan");
 const controls = new OrbitControls( camera, renderer.domElement );
// controls.maxPolarAngle = Math.PI * 0.495;
// //controls.target.set( 0, 2, 0 );
// controls.minDistance = 10.0;
// controls.maxDistance = 20.0;
// controls.update();





window.onresize = function () {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );

};

function animate() {
    requestAnimationFrame(animate);
 world.fixedStep();
 CannonD.update();
 controls.update();
camera.lookAt(group1.position)



//group.position.copy(chassisBody.position)
//group.quaternion.copy(chassisBody.quaternion)

truck.position.copy(chassisBody.position)
truck.quaternion.copy(chassisBody.quaternion)


group1.position.copy(myCar.position)
group1.quaternion.copy(myCar.quaternion)



//______________Sphere__________
s1.position.copy(S1.position)
s1.quaternion.copy(S1.quaternion)

s2.position.copy(S2.position)
s2.quaternion.copy(S2.quaternion)

s3.position.copy(S3.position)
s3.quaternion.copy(S3.quaternion)

s4.position.copy(S4.position)
s4.quaternion.copy(S4.quaternion)

s5.position.copy(S5.position)
s5.quaternion.copy(S5.quaternion)

s6.position.copy(S6.position)
s6.quaternion.copy(S6.quaternion)

s7.position.copy(S7.position)
s7.quaternion.copy(S7.quaternion)

s8.position.copy(S8.position)
s8.quaternion.copy(S8.quaternion)

s9.position.copy(S9.position)
s9.quaternion.copy(S9.quaternion)

s10.position.copy(S10.position)
s10.quaternion.copy(S10.quaternion)

s11.position.copy(S11.position)
s11.quaternion.copy(S11.quaternion)

s12.position.copy(S12.position)
s12.quaternion.copy(S12.quaternion)

s13.position.copy(S13.position)
s13.quaternion.copy(S13.quaternion)

s14.position.copy(S14.position)
s14.quaternion.copy(S14.quaternion)

s15.position.copy(S15.position)
s15.quaternion.copy(S15.quaternion)

s16.position.copy(S16.position)
s16.quaternion.copy(S16.quaternion)


s17.position.copy(S17.position)
s17.quaternion.copy(S17.quaternion)












//_______________Box__________________
p1.position.copy(P1.position)
p1.quaternion.copy(P1.quaternion)

p2.position.copy(P2.position)
p2.quaternion.copy(P2.quaternion)

p3.position.copy(P3.position)
p3.quaternion.copy(P3.quaternion)

p4.position.copy(P4.position)
p4.quaternion.copy(P4.quaternion)

p5.position.copy(P5.position)
p5.quaternion.copy(P5.quaternion)

p6.position.copy(P6.position)
p6.quaternion.copy(P6.quaternion)


p7.position.copy(P7.position)
p7.quaternion.copy(P7.quaternion)

p8.position.copy(P8.position)
p8.quaternion.copy(P8.quaternion)

p9.position.copy(P9.position)
p9.quaternion.copy(P9.quaternion)

p10.position.copy(P10.position)
p10.quaternion.copy(P10.quaternion)

p11.position.copy(P11.position)
p11.quaternion.copy(P11.quaternion)




//______________________________
//__________ROAD___________

ro1.position.copy(rO1.position);
ro1.quaternion.copy(rO1.quaternion);
ro2.position.copy(rO2.position);
ro2.quaternion.copy(rO2.quaternion);

ro3.position.copy(rO3.position);
ro3.quaternion.copy(rO3.quaternion);

ro4.position.copy(rO4.position);
ro4.quaternion.copy(rO4.quaternion);

ro5.position.copy(rO5.position);
ro5.quaternion.copy(rO5.quaternion);

ro6.position.copy(rO6.position);
ro6.quaternion.copy(rO6.quaternion);

ro7.position.copy(rO7.position);
ro7.quaternion.copy(rO7.quaternion);

ro8.position.copy(rO8.position);
ro8.quaternion.copy(rO8.quaternion);

ro9.position.copy(rO9.position);
ro9.quaternion.copy(rO9.quaternion);

ro10.position.copy(rO10.position);
ro10.quaternion.copy(rO10.quaternion);

ro11.position.copy(rO11.position);
ro11.quaternion.copy(rO11.quaternion);

ro12.position.copy(rO12.position);
ro12.quaternion.copy(rO12.quaternion);

ro13.position.copy(rO13.position);
ro13.quaternion.copy(rO13.quaternion);


ro14.position.copy(rO14.position);
ro14.quaternion.copy(rO14.quaternion);

ro15.position.copy(rO15.position);
ro15.quaternion.copy(rO15.quaternion);

ro16.position.copy(rO16.position);
ro16.quaternion.copy(rO16.quaternion);

ro17.position.copy(rO17.position);
ro17.quaternion.copy(rO17.quaternion);

ro18.position.copy(rO18.position);
ro18.quaternion.copy(rO18.quaternion);

ro19.position.copy(rO19.position);
ro19.quaternion.copy(rO19.quaternion);

ro20.position.copy(rO20.position);
ro20.quaternion.copy(rO20.quaternion);


ro21.position.copy(rO21.position);
ro21.quaternion.copy(rO21.quaternion);























renderer.render( scene, camera );
}







