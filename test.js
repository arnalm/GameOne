
/*

window.addEventListener('touchstart', function(){
  Barn.glb
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

//scene.fog = new THREE.Fog(Math.random()*0xcccccc, 1, 200);
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1,200000 );
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

//let cameramesh;

var geometry = new THREE.BoxGeometry(4, 1, 1.4);


const cameramesh = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({
 map: new THREE.TextureLoader().load('./images (28).jpeg'),
   transparent: true,
   opacity: 0.9,
}));

scene.add(cameramesh);

const helper = new THREE.Box3Helper(new THREE.Box3().setFromObject(cameramesh), 0xffff00);
//helper.position.set(0,50,0)
scene.add(helper);

const groupA = new THREE.Group();
groupA.add(cameramesh);
groupA.add(helper);



scene.add(groupA);











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

//chassisBody.position.set(268, 10, 200)

chassisBody.position.set(28, 1.6, -2)
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
 
 myCar = new CANNON.Body({ mass:15})




myCar.addShape(myBox);
//myCar.position.set(870, 11, 170);
myCar.position.set(30, 2.5, -2);

//Anish

myCar.angularVelocity.set(0,0,0)
world.addBody(myCar)
//_______________


const vehicle1 = new CANNON.RigidVehicle({
  chassisBody:myCar,
})
      
//________samanLodMasinA1_______ 


      
      
      

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


//stationA



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
  position: new CANNON.Vec3(4,3.7,0),
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










//stationB













vehicle2.addToWorld(world)
vehicle1.addToWorld(world)
//____________________________
let malCube,mal;
function malBox(){
var geometry = new THREE.BoxGeometry(2, 0.7,1);
var material = new THREE.MeshBasicMaterial({
  map: new THREE.TextureLoader().load('./images (28).jpeg'),
});

 malCube = new THREE.Mesh(geometry, material);
scene.add(malCube) 
  
  
  
  
  
  
  
  
  
  
const malBX=new CANNON.Box(new CANNON.Vec3(1, 0.35, 0.5));
mal = new CANNON.Body({
  mass: 1,
  position: new CANNON.Vec3(30,3.5, -1.9)
});
mal.addShape(malBX);
world.addBody(mal);





}malBox();

var et = document.getElementById('et');
et.addEventListener('click',function(){
  
  malBox();
  //scene.add(malCube)
  //mal.addShape(malBX);
//  world.addBody(mal);
  
});







var geometry = new THREE.BoxGeometry(4, 2.5, 2);
var material = new THREE.MeshBasicMaterial({
  map: new THREE.TextureLoader().load('./images (28).jpeg'),
  transparent: true,
  opacity: 0.4,
});
let malCube1;
malCube1 = new THREE.Mesh(geometry, material);
malCube1.position.set(30.4,3,-2)
scene.add(malCube1)
  
  
  
  
  
  
  
//toMap 930, 11, 90

var geometry = new THREE.BoxGeometry(4, 2.5, 2);
var material = new THREE.MeshBasicMaterial({
  map: new THREE.TextureLoader().load('./images (28).jpeg'),
  transparent: true,
  opacity: 0.4,
});
let malCube2;
malCube2 = new THREE.Mesh(geometry, material);
malCube2.position.set(870, -1, 170)
scene.add(malCube2)
































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
  
  const maxForce = 300
  
  
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
let truck,mesh1,mesh2,mesh3,mesh4;


  loader.load('./img/tireA.glb', function(gltf) {
  mesh1 = gltf.scene;
  mesh1.scale.set(0.6,0.6,0.7);
  mesh1.position.set(50,0,0)
  scene.add(mesh1)
    loader.load('./img/tireA.glb', function(gltf) {
    mesh2 = gltf.scene;
    mesh2.scale.set(0.6,0.6,0.7);
    mesh2.position.set(50, 0, 0)
    scene.add(mesh2)
 loader.load('./img/tireA.glb', function(gltf) {
  mesh3 = gltf.scene;
  mesh3.scale.set(0.6,0.6,0.9);
  mesh3.position.set(50, 0, 0)
  scene.add(mesh3)
  loader.load('./img/tireA.glb', function(gltf) {
  mesh4 = gltf.scene;
  mesh4.scale.set(0.6,0.6,0.9);
  mesh4.position.set(50, 0, 0)
  scene.add(mesh4)
 //___Truck model 
  loader.load('./img/sceneA.glb', function(gltf) {
  truck = gltf.scene;
  truck.scale.set(1.1, 1, 1);
  truck.position.set(50, 0, 0)
  
  scene.add(truck)
  animate();
});
  
  
  
  //________________
});
});   
    
    
    
    
  });
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


//___18
var geometry = new THREE.SphereGeometry(200);
var material = new THREE.MeshBasicMaterial({
  map: new THREE.TextureLoader().load('./img/bac.jpeg')
});
var s18 = new THREE.Mesh(geometry, material);
scene.add(s18);

const S18 = new CANNON.Body({
  mass: 0,
  shape: new CANNON.Sphere(200),
  position: new CANNON.Vec3(600, -120, -20)
})
S18.quaternion.setFromEuler(1.5, 1, 0)
world.addBody(S18)


//___19
var geometry = new THREE.SphereGeometry(200);
var material = new THREE.MeshBasicMaterial({
  map: new THREE.TextureLoader().load('./img/bac.jpeg')
});
var s19 = new THREE.Mesh(geometry, material);
scene.add(s19);

const S19 = new CANNON.Body({
  mass: 0,
  shape: new CANNON.Sphere(200),
  position: new CANNON.Vec3(500, -160, 55)
})
S19.quaternion.setFromEuler(1.5, 1, 0)
world.addBody(S19)



//___20
var geometry = new THREE.SphereGeometry(200);
var material = new THREE.MeshBasicMaterial({
  map: new THREE.TextureLoader().load('./img/bac.jpeg')
});
var s20 = new THREE.Mesh(geometry, material);
scene.add(s20);

const S20 = new CANNON.Body({
  mass: 0,
  shape: new CANNON.Sphere(200),
  position: new CANNON.Vec3(650, -180, 100)
})
S20.quaternion.setFromEuler(1.5, 1, 0)
world.addBody(S20)


//___21
var geometry = new THREE.SphereGeometry(200);
var material = new THREE.MeshBasicMaterial({
  map: new THREE.TextureLoader().load('./img/bac.jpeg')
});
var s21 = new THREE.Mesh(geometry, material);
scene.add(s21);

const S21 = new CANNON.Body({
  mass: 0,
  shape: new CANNON.Sphere(200),
  position: new CANNON.Vec3(620, -185, 287)
})
S21.quaternion.setFromEuler(1.5, 1, 0)
world.addBody(S21)








//___22
var geometry = new THREE.SphereGeometry(200);
var material = new THREE.MeshBasicMaterial({
  map: new THREE.TextureLoader().load('./img/bac.jpeg')
});
var s22 = new THREE.Mesh(geometry, material);
scene.add(s22);

const S22 = new CANNON.Body({
  mass: 0,
  shape: new CANNON.Sphere(200),
  position: new CANNON.Vec3(520, -185, 287)
})
S22.quaternion.setFromEuler(1.5, 1, 0)
world.addBody(S22)





//.   jangalA






















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

loader.load('./img/Tree.glb', function(gltf) {
  var tree1 = gltf.scene;
  tree1.position.set(-22, 2.5, -18)
  scene.add(tree1)
});




loader.load('./img/Tree.glb', function(gltf){
  var tree1 = gltf.scene;
  tree1.position.set(0,3,-10)
  tree1.rotation.y = 1;
  scene.add(tree1)
});

loader.load('./img/Tree.glb', function(gltf) {
  var tree1 = gltf.scene;
  tree1.position.set(0, 2.5, -15)
  tree1.rotation.y = 0.3;
  scene.add(tree1)
});

loader.load('./img/Tree.glb', function(gltf) {
  var tree1 = gltf.scene;
  tree1.position.set(-8, 2.5, -15)
  scene.add(tree1)
});


loader.load('./img/Tree.glb', function(gltf) {
  var tree1 = gltf.scene;
  tree1.position.set(-4, 2, -15)
  tree1.rotation.y = 0.7;
  scene.add(tree1)
});




loader.load('./img/Tree.glb', function(gltf) {
  var tree1 = gltf.scene;
  tree1.position.set(10, 2,-20)
  tree1.rotation.y = 0.7;
  scene.add(tree1)
});

loader.load('./img/Tree.glb', function(gltf) {
  var tree1 = gltf.scene;
  tree1.position.set(25, 0, -25)
  scene.add(tree1)
});

loader.load('./img/Tree.glb', function(gltf) {
  var tree1 = gltf.scene;
  tree1.position.set(50, 0, -6)
  scene.add(tree1)
});

loader.load('./img/Tree.glb', function(gltf) {
  var tree1 = gltf.scene;
  tree1.position.set(70, 0, 6)
  tree1.rotation.y = 1;
  scene.add(tree1)
});


loader.load('./img/Tree.glb', function(gltf) {
  var tree1 = gltf.scene;
  tree1.position.set(80, 0, 30)
  tree1.rotation.y = -1;
  scene.add(tree1)
});

loader.load('./img/Tree.glb', function(gltf) {
  var tree1 = gltf.scene;
  tree1.position.set(125, 0, 40)
  tree1.rotation.y = -1;
  scene.add(tree1)
});


loader.load('./img/Tree.glb', function(gltf) {
  var tree1 = gltf.scene;
  tree1.position.set(153, 0, 40)
  tree1.rotation.y = -1;
  scene.add(tree1)
});


loader.load('./img/Tree.glb', function(gltf) {
  var tree1 = gltf.scene;
  tree1.position.set(155, 0, 60)
  tree1.rotation.y = -0.2;
  scene.add(tree1)
});


loader.load('./img/Tree.glb', function(gltf) {
  var tree1 = gltf.scene;
  tree1.position.set(180, 0, 110)
  tree1.rotation.y = 1;
  scene.add(tree1)
});

loader.load('./img/Tree.glb', function(gltf) {
  var tree1 = gltf.scene;
  tree1.position.set(200, 0.7, 110)
  tree1.rotation.y = -1;
  scene.add(tree1)
});

loader.load('./img/Tree.glb', function(gltf) {
  var tree1 = gltf.scene;
  tree1.position.set(215, 1, 100)
  tree1.rotation.y = 1;
  scene.add(tree1)
});


loader.load('./img/Tree.glb', function(gltf) {
  var tree1 = gltf.scene;
  tree1.position.set(170, 1, 100)
  tree1.rotation.y = 1;
  scene.add(tree1)
});

loader.load('./img/Tree.glb', function(gltf) {
  var tree1 = gltf.scene;
  tree1.position.set(170, 1, 90)
  tree1.rotation.y = -1;
  scene.add(tree1)
});

loader.load('./img/Tree.glb', function(gltf) {
  var tree1 = gltf.scene;
  tree1.position.set(120, 0, 70)
  tree1.rotation.y = -0;
  scene.add(tree1)
});

loader.load('./img/Tree.glb', function(gltf) {
  var tree1 = gltf.scene;
  tree1.position.set(130, 0, 80)
  tree1.rotation.y = -1;
  scene.add(tree1)
});


loader.load('./img/Tree.glb', function(gltf) {
  var tree1 = gltf.scene;
  tree1.position.set(150, 0, 103)
  tree1.rotation.y = -1.3;
  scene.add(tree1)
});

loader.load('./img/Tree.glb', function(gltf) {
  var tree1 = gltf.scene;
  tree1.position.set(150, 0, 150)
  tree1.rotation.y = -1;
  scene.add(tree1)
});

loader.load('./img/Tree.glb', function(gltf) {
  var tree1 = gltf.scene;
  tree1.position.set(145, 0, 147)
  tree1.rotation.y = 1;
  scene.add(tree1)
});

loader.load('./img/Tree.glb', function(gltf) {
  var tree1 = gltf.scene;
  tree1.position.set(160, 1, 147)
  tree1.rotation.y = 0.2;
  scene.add(tree1)
});


loader.load('./img/Tree.glb', function(gltf) {
  var tree1 = gltf.scene;
  tree1.position.set(170, 5, 160)
  tree1.rotation.y = 0.6;
  scene.add(tree1)
});


loader.load('./img/Tree.glb', function(gltf) {
  var tree1 = gltf.scene;
  tree1.position.set(190, 3, 160)
  tree1.rotation.y = -0.6;
  scene.add(tree1)
});
loader.load('./img/Tree.glb', function(gltf) {
  var tree1 = gltf.scene;
  tree1.position.set(190, 1, 150)
  tree1.rotation.y = 0.6;
  scene.add(tree1)
});

loader.load('./img/Tree.glb', function(gltf) {
  var tree1 = gltf.scene;
  tree1.position.set(180, 1, 145)
  tree1.rotation.y = 0;
  scene.add(tree1)
});

loader.load('./img/Tree.glb', function(gltf) {
  var tree1 = gltf.scene;
  tree1.position.set(100, 1,105)
  tree1.rotation.y = 0;
  scene.add(tree1)
});

loader.load('./img/Tree.glb', function(gltf) {
  var tree1 = gltf.scene;
  tree1.position.set(110, 1, 120)
  tree1.rotation.y = 1;
  scene.add(tree1)
});

loader.load('./img/Tree.glb', function(gltf) {
  var tree1 = gltf.scene;
  tree1.position.set(110, 1, 102)
  tree1.rotation.y = 1;
  scene.add(tree1)
});

loader.load('./img/Tree.glb', function(gltf) {
  var tree1 = gltf.scene;
  tree1.position.set(120, 1, 120)
  tree1.rotation.y = -1;
  scene.add(tree1)
});


loader.load('./img/Tree.glb', function(gltf) {
  var tree1 = gltf.scene;
  tree1.position.set(125, 1, 110)
  tree1.rotation.y = -1.5;
  scene.add(tree1)
});


loader.load('./img/Tree.glb', function(gltf) {
  var tree1 = gltf.scene;
  tree1.position.set(80, 1, 110)
  tree1.rotation.y = 0;
  scene.add(tree1)
});

loader.load('./img/Tree.glb', function(gltf) {
  var tree1 = gltf.scene;
  tree1.position.set(60, 1, 110)
  tree1.rotation.y = 0.3;
  scene.add(tree1)
});

loader.load('./img/Tree.glb', function(gltf) {
  var tree1 = gltf.scene;
  tree1.position.set(50, 1, 90)
  tree1.rotation.y = -0.3;
  scene.add(tree1)
});

loader.load('./img/Tree.glb', function(gltf) {
  var tree1 = gltf.scene;
  tree1.position.set(40, 0.2, 105)
  tree1.rotation.y = -1.5;
  scene.add(tree1)
});

loader.load('./img/Tree.glb', function(gltf) {
  var tree1 = gltf.scene;
  tree1.position.set(40, 0, 60)
  tree1.rotation.y = -1.5;
  scene.add(tree1)
});


loader.load('./img/Tree.glb', function(gltf) {
  var tree1 = gltf.scene;
  tree1.position.set(50, 0, 50)
  tree1.rotation.y = -0.2;
  scene.add(tree1)
});

loader.load('./img/Tree.glb', function(gltf) {
  var tree1 = gltf.scene;
  tree1.position.set(50, 0, 40)
  tree1.rotation.y = 0.2;
  scene.add(tree1)
});

loader.load('./img/Tree.glb', function(gltf) {
  var tree1 = gltf.scene;
  tree1.position.set(50, 0, 30)
  tree1.rotation.y = 1.5;
  scene.add(tree1)
});


loader.load('./img/Tree.glb', function(gltf) {
  var tree1 = gltf.scene;
  tree1.position.set(40, 0, 20)
  tree1.rotation.y = 0.5;
  scene.add(tree1)
});

loader.load('./img/Tree.glb', function(gltf) {
  var tree1 = gltf.scene;
  tree1.position.set(10, 4, 20)
  tree1.rotation.y = 0.5;
  scene.add(tree1)
});


loader.load('./img/Tree.glb', function(gltf) {
  var tree1 = gltf.scene;
  tree1.position.set(5, 3, 16)
  tree1.rotation.y = -0.5;
  scene.add(tree1)
});





//___________GRASS____________
loader.load('./img/grass.glb', function(gltf) {
  var tree1 = gltf.scene;
  tree1.scale.set(5,10,1);
  tree1.position.set(0, 0.5, -5)
  scene.add(tree1)
});


loader.load('./img/grass.glb', function(gltf) {
  var tree1 = gltf.scene;
  tree1.scale.set(5,10,1);
  tree1.position.set(30, 0.5, -30)
  scene.add(tree1)
});


loader.load('./img/grass.glb', function(gltf) {
  var tree1 = gltf.scene;
  tree1.scale.set(1, 10, 5);
  tree1.position.set(45, 1, 30)
  scene.add(tree1)
});

loader.load('./img/grass.glb', function(gltf) {
  var tree1 = gltf.scene;
  tree1.scale.set(10,10,1);
  tree1.position.set(50, 1,110)
  scene.add(tree1)
});

loader.load('./img/grass.glb', function(gltf) {
  var tree1 = gltf.scene;
  tree1.scale.set(18, 30, 18);
  tree1.position.set(-70, 1.5, 120)
  scene.add(tree1)
});

loader.load('./img/grass.glb', function(gltf) {
  var tree1 = gltf.scene;
  tree1.scale.set(18, 30, 18);
  tree1.position.set(-70, 1.5, 80)
  scene.add(tree1)
});



loader.load('./img/grass.glb', function(gltf){
  var tree1 = gltf.scene;
  tree1.scale.set(10, 10, 2);
  
  tree1.position.set(0,2.5,15)
  
  scene.add(tree1)
});

loader.load('./img/grass.glb', function(gltf){
  var tree1 = gltf.scene;
  tree1.scale.set(5, 10, 2);
  
  tree1.position.set(80,-0.5,10)
  tree1.rotation.y = -0.5;
  scene.add(tree1)
});

loader.load('./img/grass.glb', function(gltf){
  var tree1 = gltf.scene;
  tree1.scale.set(5, 10, 2);
  
  tree1.position.set(80,-0.5,30)
  tree1.rotation.y = -0.3;
  scene.add(tree1)
});


loader.load('./img/grass.glb', function(gltf) {
  var tree1 = gltf.scene;
  tree1.scale.set(5, 10, 2);
  
  tree1.position.set(50, -0.5, 30)
  tree1.rotation.y = -0.3;
  scene.add(tree1)
});

loader.load('./img/grass.glb', function(gltf) {
  var tree1 = gltf.scene;
  tree1.scale.set(2, 10, 5);
  
  tree1.position.set(47, -0.5, 40)
  tree1.rotation.y = -0.1;
  scene.add(tree1)
});

loader.load('./img/grass.glb', function(gltf) {
  var tree1 = gltf.scene;
  tree1.scale.set(2, 10, 5);
  
  tree1.position.set(55, -0.5, 100)
  tree1.rotation.y = -0.1;
  scene.add(tree1)
});

loader.load('./img/grass.glb', function(gltf) {
  var tree1 = gltf.scene;
  tree1.scale.set(5, 10, 2);
  
  tree1.position.set(100, -0.5, 100)
  tree1.rotation.y = -0.1;
  scene.add(tree1)
});



loader.load('./img/grass.glb', function(gltf) {
  var tree1 = gltf.scene;
  tree1.scale.set(5, 10, 2);
  
  tree1.position.set(120, -0.5, 100)
  tree1.rotation.y = -0.1;
  scene.add(tree1)
});


loader.load('./img/grass.glb', function(gltf) {
  var tree1 = gltf.scene;
  tree1.scale.set(2, 10, 5);
  
  tree1.position.set(120, -0.5, 120)
  tree1.rotation.y = -0.1;
  scene.add(tree1)
});
loader.load('./img/grass.glb', function(gltf) {
  var tree1 = gltf.scene;
  tree1.scale.set(5, 10, 2);
  
  tree1.position.set(146, -0.5, 150)
  tree1.rotation.y = -0.1;
  scene.add(tree1)
});

loader.load('./img/grass.glb', function(gltf) {
  var tree1 = gltf.scene;
  tree1.scale.set(5, 10, 2);
  
  tree1.position.set(127, -0.5,78)
  tree1.rotation.y = -0.1;
  scene.add(tree1)
});

loader.load('./img/grass.glb', function(gltf) {
  var tree1 = gltf.scene;
  tree1.scale.set(2, 10, 5);
  
  tree1.position.set(150, -0.5,100)
  tree1.rotation.y = -0.1;
  scene.add(tree1)
});


loader.load('./img/grass.glb', function(gltf) {
  var tree1 = gltf.scene;
  tree1.scale.set(2, 10, 5);
  
  tree1.position.set(180, -0.5,110)
  tree1.rotation.y = 0.5;
  scene.add(tree1)
});

loader.load('./img/grass.glb', function(gltf) {
  var tree1 = gltf.scene;
  tree1.scale.set(2, 10, 5);
  
  tree1.position.set(210, -0.5,110)
  tree1.rotation.y = 0.5;
  scene.add(tree1)
});



loader.load('./img/grass.glb', function(gltf) {
  var tree1 = gltf.scene;
  tree1.scale.set(5, 10, 2);
  
  tree1.position.set(180, 3,160)
  tree1.rotation.y = 0.5;
  scene.add(tree1)
});

loader.load('./img/grass.glb', function(gltf) {
  var tree1 = gltf.scene;
  tree1.scale.set(5, 10, 2);
  
  tree1.position.set(180, 2, 150)
  tree1.rotation.y = 0;
  scene.add(tree1)
});


loader.load('./img/grass.glb', function(gltf) {
  var tree1 = gltf.scene;
  tree1.scale.set(5, 10, 2);
  
  tree1.position.set(170, 0.3, 145)
  tree1.rotation.y = 0;
  scene.add(tree1)
});

loader.load('./img/grass.glb', function(gltf) {
  var tree1 = gltf.scene;
  tree1.scale.set(5, 10, 2);
  
  tree1.position.set(195, 0.3, 160)
  tree1.rotation.y = -1.3;
  scene.add(tree1)
});

//____________________________
//__________cityOne___________

loader.load('./cityHouse/Radio tower.glb', function(gltf) {
  var city1 = gltf.scene;
  city1.scale.set(0.4, 0.5, 0.4);
  city1.position.set(210, 0.3, 160)
  city1.rotation.y = -1.3;
  scene.add(city1)
});


loader.load('./cityHouse/Building B.glb', function(gltf) {
  var city1 = gltf.scene;
  city1.scale.set(5, 6, 5);
  city1.position.set(250, 0.3, 165)
  city1.rotation.y = -1.6;
  scene.add(city1)
});


loader.load('./cityHouse/Building.glb', function(gltf) {
  var city1 = gltf.scene;
  city1.scale.set(5, 6, 5);
  city1.position.set(250, 0.3, 180)
  city1.rotation.y = -1.6;
  scene.add(city1)
});

loader.load('./cityHouse/Building.glb', function(gltf) {
  var city1 = gltf.scene;
  city1.scale.set(5, 6, 5);
  city1.position.set(260, 0.3, 180)
  city1.rotation.y = 0;
  scene.add(city1)
});

loader.load('./cityHouse/Building.glb', function(gltf) {
  var city1 = gltf.scene;
  city1.scale.set(5, 6, 5);
  city1.position.set(225, 0.3, 220)
  city1.rotation.y = 3.1;
  scene.add(city1)
});

loader.load('./cityHouse/Donut Store.glb', function(gltf) {
  var city1 = gltf.scene;
  city1.scale.set(2, 2, 2);
  city1.position.set(235,2,210)
  city1.rotation.y = 0;
  scene.add(city1)
});

loader.load('./cityHouse/Donut Store.glb', function(gltf) {
  var city1 = gltf.scene;
  city1.scale.set(2, 2, 2);
  city1.position.set(245, 2, 210)
  city1.rotation.y = 0;
  scene.add(city1)
});

loader.load('./cityHouse/Hospital.glb', function(gltf) {
  var city1 = gltf.scene;
  city1.scale.set(0.02, 0.03,0.02);
  city1.position.set(270, 3, 210)
  city1.rotation.y = 1.6;
  scene.add(city1)
});


loader.load('./cityHouse/Simple house.glb', function(gltf) {
  var city1 = gltf.scene;
  city1.scale.set(2, 3,2);
  city1.position.set(290, 3, 200)
  city1.rotation.y = 1.6;
  scene.add(city1)
});

loader.load('./cityHouse/Simple house.glb', function(gltf) {
  var city1 = gltf.scene;
  city1.scale.set(2, 3, 2);
  city1.position.set(290, 3, 185)
  city1.rotation.y = -1.6;
  scene.add(city1)
});


loader.load('./cityHouse/treeA1.glb', function(gltf) {
  var tree1 = gltf.scene;
  tree1.scale.set(1, 1, 1);
  tree1.position.set(280, 0.5, 185)
  tree1.rotation.y = -1.6;
  scene.add(tree1)
});

loader.load('./cityHouse/treeA1.glb', function(gltf) {
  var tree1 = gltf.scene;
  tree1.scale.set(1, 1, 1);
  tree1.position.set(270, 0.5, 185)
  tree1.rotation.y = 1.6;
  scene.add(tree1)
});


loader.load('./cityHouse/treeA1.glb', function(gltf) {
  var tree1 = gltf.scene;
  tree1.scale.set(1, 1, 1);
  tree1.position.set(250, 0.5, 188)
  tree1.rotation.y = 1.6;
  scene.add(tree1)
});

loader.load('./cityHouse/treeA1.glb', function(gltf) {
  var tree1 = gltf.scene;
  tree1.scale.set(1, 1, 1);
  tree1.position.set(240, 0.5, 188)
  tree1.rotation.y = -1.6;
  scene.add(tree1)
});

loader.load('./cityHouse/treeA1.glb', function(gltf) {
  var tree1 = gltf.scene;
  tree1.scale.set(1, 1, 1);
  tree1.position.set(240,0.5, 170)
  tree1.rotation.y = -1.6;
  scene.add(tree1)
});

loader.load('./cityHouse/treeA1.glb', function(gltf) {
  var tree1 = gltf.scene;
  tree1.scale.set(1, 1, 1);
  tree1.position.set(210, 0.5, 170)
  tree1.rotation.y = -1.6;
  scene.add(tree1)
});



loader.load('./cityHouse/treeA1.glb', function(gltf) {
  var tree1 = gltf.scene;
  tree1.scale.set(1, 1, 1);
  tree1.position.set(210, 0.5, 180)
  tree1.rotation.y = 1.6;
  scene.add(tree1)
});

loader.load('./cityHouse/treeA1.glb', function(gltf) {
  var tree1 = gltf.scene;
  tree1.scale.set(1, 1, 1);
  tree1.position.set(250, 0.5, 205)
  tree1.rotation.y = -1.6;
  scene.add(tree1)
});

loader.load('./cityHouse/treeA1.glb', function(gltf) {
  var tree1 = gltf.scene;
  tree1.scale.set(1, 1, 1);
  tree1.position.set(280, 0.5, 205)
  tree1.rotation.y = -1.6;
  scene.add(tree1)
});


loader.load('./roadImg/fance.glb', function(gltf) {
  var tree1 = gltf.scene;
  tree1.scale.set(2, 2, 2);
  tree1.position.set(900, -5,175)
  tree1.rotation.y = -1.6;
  scene.add(tree1)
});

loader.load('./roadImg/fance.glb', function(gltf) {
  var tree1 = gltf.scene;
  tree1.scale.set(2, 2, 2);
  tree1.position.set(850, -5,175)
  tree1.rotation.y = -1.6;
  scene.add(tree1)
});

loader.load('./roadImg/fance.glb', function(gltf) {
  var tree1 = gltf.scene;
  tree1.scale.set(2, 2, 2);
  tree1.position.set(900, -5, 150)
  tree1.rotation.y = 0;
  scene.add(tree1)
});

loader.load('./roadImg/fance.glb', function(gltf) {
  var tree1 = gltf.scene;
  tree1.scale.set(2, 2, 2);
  tree1.position.set(873, -5, 150)
  tree1.rotation.y = 0;
  scene.add(tree1)
});

loader.load('./cityHouse/Building (2).glb', function(gltf) {
  var tree1 = gltf.scene;
  tree1.scale.set(4, 5, 3);
  tree1.position.set(910, -5, 160)
  tree1.rotation.y = 1.5;
  scene.add(tree1)
});

loader.load('./cityHouse/Building (2).glb', function(gltf) {
  var tree1 = gltf.scene;
  tree1.scale.set(4, 5, 3);
  tree1.position.set(910, -5, 190)
  tree1.rotation.y = 0.5;
  scene.add(tree1)
});

loader.load('./cityHouse/Building (2).glb', function(gltf) {
  var tree1 = gltf.scene;
  tree1.scale.set(4, 5, 3);
  tree1.position.set(895, -5, 195)
  tree1.rotation.y = 0.1;
  scene.add(tree1)
});


loader.load('./cityHouse/Building (2).glb', function(gltf) {
  var tree1 = gltf.scene;
  tree1.scale.set(4, 5, 3);
  tree1.position.set(945, -5,200)
  tree1.rotation.y = -1.7;
  scene.add(tree1)
});


loader.load('./cityHouse/Simple house.glb', function(gltf) {
  var tree1 = gltf.scene;
  tree1.scale.set(2, 3, 2);
  tree1.position.set(945, -1,160)
  tree1.rotation.y = 1.5;
  scene.add(tree1)
});






const house =new CANNON.Body({
  mass:0,
  shape:new CANNON.Box(new CANNON.Vec3(3,8,5)),
  position:new CANNON.Vec3(910.5,3,160)
});
world.addBody(house)

const house1 =new CANNON.Body({
  mass:0,
  shape:new CANNON.Box(new CANNON.Vec3(3,8,3)),
  position:new CANNON.Vec3(946.5,3,161)
});
world.addBody(house1)


const house2 =new CANNON.Body({
  mass:0,
  shape:new CANNON.Box(new CANNON.Vec3(3,8,4.3)),
  position:new CANNON.Vec3(946.5,3,200)
});
world.addBody(house2)

const house3 = new CANNON.Body({
  mass: 0,
  shape: new CANNON.Box(new CANNON.Vec3(3, 8, 4.3)),
  position: new CANNON.Vec3(910.5, 3, 190)
});

world.addBody(house3)


const house4 = new CANNON.Body({
  mass: 0,
  shape: new CANNON.Box(new CANNON.Vec3(4.5, 8, 3)),
  position: new CANNON.Vec3(894.9, 3, 195)
});

world.addBody(house4)

const house5 = new CANNON.Body({
  mass: 0,
  shape: new CANNON.Box(new CANNON.Vec3(28,3,0.5)),
  position: new CANNON.Vec3(875.9, -2, 150)
});
world.addBody(house5)


const house6 = new CANNON.Body({
  mass: 0,
  shape: new CANNON.Box(new CANNON.Vec3(0.5, 3, 15)),
  position: new CANNON.Vec3(850.5, -2, 164)
});

world.addBody(house6)

const house7 = new CANNON.Body({
  mass: 0,
  shape: new CANNON.Box(new CANNON.Vec3(0.5, 3, 15)),
  position: new CANNON.Vec3(901, -2, 164)
});
world.addBody(house7)


const house8 = new CANNON.Body({
  mass: 0,
  shape: new CANNON.Box(new CANNON.Vec3(1, 10, 1)),
  position: new CANNON.Vec3(210.5, 6, 160)
});
world.addBody(house8)

const house9 = new CANNON.Body({
  mass: 0,
  shape: new CANNON.Box(new CANNON.Vec3(6, 10, 5)),
  position: new CANNON.Vec3(250, 6, 164.5)
});
world.addBody(house9)


const house10 = new CANNON.Body({
  mass: 0,
  shape: new CANNON.Box(new CANNON.Vec3(9.7, 10, 5)),
  position: new CANNON.Vec3(255, 6, 180)
});
world.addBody(house10)

const house11 = new CANNON.Body({
  mass: 0,
  shape: new CANNON.Box(new CANNON.Vec3(6.2, 10, 3.3)),
  position: new CANNON.Vec3(273, 6, 209.5)
});
world.addBody(house11)


const house12 = new CANNON.Body({
  mass: 0,
  shape: new CANNON.Box(new CANNON.Vec3(7.5, 10, 3.3)),
  position: new CANNON.Vec3(240, 6, 209.5)
});
world.addBody(house12)

const house13 = new CANNON.Body({
  mass: 0,
  shape: new CANNON.Box(new CANNON.Vec3(5, 10, 3.3)),
  position: new CANNON.Vec3(225, 6, 220)
});
world.addBody(house13)


const house14 = new CANNON.Body({
  mass: 0,
  shape: new CANNON.Box(new CANNON.Vec3(3, 10,2.7)),
  position: new CANNON.Vec3(290.7, 6, 201)
});
world.addBody(house14)



const house15 = new CANNON.Body({
  mass: 0,
  shape: new CANNON.Box(new CANNON.Vec3(3, 10, 2.7)),
  position: new CANNON.Vec3(289.5, 6,184)
});
world.addBody(house15)





//villageA
































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



//_______________________________
//____________roadOne____________

//________ road22
var geometry = new THREE.BoxGeometry(20, 3.1, 18);
var material = new THREE.MeshBasicMaterial({
  map: new THREE.TextureLoader().load('./roadImg/road1.jpeg')
});
var ro22 = new THREE.Mesh(geometry, material);
scene.add(ro22);

const road22 = new CANNON.Box(new CANNON.Vec3(10, 1.7, 9));
const rO22 = new CANNON.Body({
  mass: 0,
  position: new CANNON.Vec3(309, -1.3, 192)
})
rO22.quaternion.setFromEuler(0,0, 0);
rO22.addShape(road22)
world.addBody(rO22)

//________ road23
var geometry = new THREE.BoxGeometry(20, 3, 18);
var material = new THREE.MeshBasicMaterial({
  map: new THREE.TextureLoader().load('./roadImg/road1.jpeg')
});
var ro23 = new THREE.Mesh(geometry, material);
scene.add(ro23);

const road23 = new CANNON.Box(new CANNON.Vec3(10, 1.7, 9));
const rO23 = new CANNON.Body({
  mass: 0,
  position: new CANNON.Vec3(328, -1.3, 192)
})
rO23.quaternion.setFromEuler(0,0, 0);
rO23.addShape(road23)
world.addBody(rO23)


//________ road24
var geometry = new THREE.BoxGeometry(20, 3.1, 18);
var material = new THREE.MeshBasicMaterial({
  map: new THREE.TextureLoader().load('./roadImg/road1.jpeg')
});
var ro24 = new THREE.Mesh(geometry, material);
scene.add(ro24);

const road24 = new CANNON.Box(new CANNON.Vec3(10, 1.7, 9));
const rO24 = new CANNON.Body({
  mass: 0,
  position: new CANNON.Vec3(348, -1.3, 192)
})
rO24.quaternion.setFromEuler(0,0, 0);
rO24.addShape(road24)
world.addBody(rO24)


//________ road25
var geometry = new THREE.BoxGeometry(20, 3, 18);
var material = new THREE.MeshBasicMaterial({
  map: new THREE.TextureLoader().load('./roadImg/road1.jpeg')
});
var ro25 = new THREE.Mesh(geometry, material);
scene.add(ro25);

const road25 = new CANNON.Box(new CANNON.Vec3(10, 1.7, 9));
const rO25 = new CANNON.Body({
  mass: 0,
  position: new CANNON.Vec3(368, -1.3, 192)
})
rO25.quaternion.setFromEuler(0,0, 0);
rO25.addShape(road25)
world.addBody(rO25)


//________ road26
var geometry = new THREE.BoxGeometry(20, 3.1, 18);
var material = new THREE.MeshBasicMaterial({
  map: new THREE.TextureLoader().load('./roadImg/road1.jpeg')
});
var ro26 = new THREE.Mesh(geometry, material);
scene.add(ro26);

const road26 = new CANNON.Box(new CANNON.Vec3(10, 1.7, 9));
const rO26 = new CANNON.Body({
  mass: 0,
  position: new CANNON.Vec3(388, -1.3, 192)
})
rO26.quaternion.setFromEuler(0, 0, 0);
rO26.addShape(road26)
world.addBody(rO26)


//________ road27
var geometry = new THREE.BoxGeometry(20, 3, 18);
var material = new THREE.MeshBasicMaterial({
  map: new THREE.TextureLoader().load('./roadImg/road1.jpeg')
});
var ro27 = new THREE.Mesh(geometry, material);
scene.add(ro27);

const road27 = new CANNON.Box(new CANNON.Vec3(10, 1.7, 9));
const rO27 = new CANNON.Body({
  mass: 0,
  position: new CANNON.Vec3(408, -1.3, 192)
})
rO27.quaternion.setFromEuler(0, 0, 0);
rO27.addShape(road27)
world.addBody(rO27)

//________ road28
var geometry = new THREE.BoxGeometry(20, 3.1, 18);
var material = new THREE.MeshBasicMaterial({
  map: new THREE.TextureLoader().load('./roadImg/road1.jpeg')
});
var ro28 = new THREE.Mesh(geometry, material);
scene.add(ro28);

const road28 = new CANNON.Box(new CANNON.Vec3(10, 1.7, 9));
const rO28 = new CANNON.Body({
  mass: 0,
  position: new CANNON.Vec3(428, -1.3, 192)
})
rO28.quaternion.setFromEuler(0, 0, 0);
rO28.addShape(road28)
world.addBody(rO28)

//________ road29
var geometry = new THREE.BoxGeometry(20, 3, 18);
var material = new THREE.MeshBasicMaterial({
  map: new THREE.TextureLoader().load('./roadImg/road1.jpeg')
});
var ro29 = new THREE.Mesh(geometry, material);
scene.add(ro29);

const road29 = new CANNON.Box(new CANNON.Vec3(10, 1.7, 9));
const rO29 = new CANNON.Body({
  mass: 0,
  position: new CANNON.Vec3(448, -1.3, 192)
})
rO29.quaternion.setFromEuler(0, 0, 0);
rO29.addShape(road29)
world.addBody(rO29)


//________ road30
var geometry = new THREE.BoxGeometry(20, 3.1, 18);
var material = new THREE.MeshBasicMaterial({
  map: new THREE.TextureLoader().load('./roadImg/road1.jpeg')
});
var ro30 = new THREE.Mesh(geometry, material);
scene.add(ro30);

const road30 = new CANNON.Box(new CANNON.Vec3(10, 1.7, 9));
const rO30 = new CANNON.Body({
  mass: 0,
  position: new CANNON.Vec3(468, -1.3, 192)
})
rO30.quaternion.setFromEuler(0, 0, 0);
rO30.addShape(road30)
world.addBody(rO30)

//________ road31
var geometry = new THREE.BoxGeometry(20, 3, 18);
var material = new THREE.MeshBasicMaterial({
  map: new THREE.TextureLoader().load('./roadImg/road1.jpeg')
});
var ro31 = new THREE.Mesh(geometry, material);
scene.add(ro31);

const road31 = new CANNON.Box(new CANNON.Vec3(10, 1.7, 9));
const rO31 = new CANNON.Body({
  mass: 0,
  position: new CANNON.Vec3(490, -1.3, 192)
})
rO31.quaternion.setFromEuler(0, 0, 0);
rO31.addShape(road31)
world.addBody(rO31)


//________ road32
var geometry = new THREE.BoxGeometry(20, 3.1, 18);
var material = new THREE.MeshBasicMaterial({
  map: new THREE.TextureLoader().load('./roadImg/road1.jpeg')
});
var ro32 = new THREE.Mesh(geometry, material);
scene.add(ro32);

const road32 = new CANNON.Box(new CANNON.Vec3(10, 1.7, 9));
const rO32 = new CANNON.Body({
  mass: 0,
  position: new CANNON.Vec3(510, -1.3, 192)
})
rO32.quaternion.setFromEuler(0, 0, 0);
rO32.addShape(road32)
world.addBody(rO32)



//________ road33
var geometry = new THREE.BoxGeometry(20, 3, 18);
var material = new THREE.MeshBasicMaterial({
  map: new THREE.TextureLoader().load('./roadImg/road1.jpeg')
});
var ro33 = new THREE.Mesh(geometry, material);
scene.add(ro33);

const road33 = new CANNON.Box(new CANNON.Vec3(10, 1.7, 9));
const rO33 = new CANNON.Body({
  mass: 0,
  position: new CANNON.Vec3(530, -1.3, 192)
})
rO33.quaternion.setFromEuler(0, 0, 0);
rO33.addShape(road33)
world.addBody(rO33)

//________ road34
var geometry = new THREE.BoxGeometry(20, 3.1, 18);
var material = new THREE.MeshBasicMaterial({
  map: new THREE.TextureLoader().load('./roadImg/road1.jpeg')
});
var ro34 = new THREE.Mesh(geometry, material);
scene.add(ro34);

const road34 = new CANNON.Box(new CANNON.Vec3(10, 1.7, 9));
const rO34 = new CANNON.Body({
  mass: 0,
  position: new CANNON.Vec3(550, -1.3, 192)
})
rO34.quaternion.setFromEuler(0, 0, 0);
rO34.addShape(road34)
world.addBody(rO34)



//________ road35
var geometry = new THREE.BoxGeometry(20, 3, 18);
var material = new THREE.MeshBasicMaterial({
  map: new THREE.TextureLoader().load('./roadImg/road1.jpeg')
});
var ro35 = new THREE.Mesh(geometry, material);
scene.add(ro35);

const road35 = new CANNON.Box(new CANNON.Vec3(10, 1.7, 9));
const rO35 = new CANNON.Body({
  mass: 0,
  position: new CANNON.Vec3(570, -1.3, 192)
})
rO35.quaternion.setFromEuler(0, 0, 0);
rO35.addShape(road35)
world.addBody(rO35)



//________ road36
var geometry = new THREE.BoxGeometry(20, 3.1, 18);
var material = new THREE.MeshBasicMaterial({
  map: new THREE.TextureLoader().load('./roadImg/road1.jpeg')
});
var ro36 = new THREE.Mesh(geometry, material);
scene.add(ro36);

const road36 = new CANNON.Box(new CANNON.Vec3(10, 1.7, 9));
const rO36 = new CANNON.Body({
  mass: 0,
  position: new CANNON.Vec3(580.5, -1.3, 192)
})
rO36.quaternion.setFromEuler(0, 0, 0);
rO36.addShape(road36)
world.addBody(rO36)


//________ road37
var geometry = new THREE.BoxGeometry(20, 3, 18);
var material = new THREE.MeshBasicMaterial({
  map: new THREE.TextureLoader().load('./roadImg/road1.jpeg')
});
var ro37 = new THREE.Mesh(geometry, material);
scene.add(ro37);

const road37 = new CANNON.Box(new CANNON.Vec3(10, 1.7, 9));
const rO37 = new CANNON.Body({
  mass: 0,
  position: new CANNON.Vec3(599, -2.2, 193)
})
rO37.quaternion.setFromEuler(0,-0.1, -0.1);
rO37.addShape(road37)
world.addBody(rO37)


//________ road37
var geometry = new THREE.BoxGeometry(20, 3, 18);
var material = new THREE.MeshBasicMaterial({
  map: new THREE.TextureLoader().load('./roadImg/road1.jpeg')
});
var ro38 = new THREE.Mesh(geometry, material);
scene.add(ro38);

const road38 = new CANNON.Box(new CANNON.Vec3(10, 1.7, 9));
const rO38 = new CANNON.Body({
  mass: 0,
  position: new CANNON.Vec3(618, -4.1, 194.8)
})
rO38.quaternion.setFromEuler(0,-0.1, -0.1);
rO38.addShape(road38)
world.addBody(rO38)




//________ road39
var geometry = new THREE.BoxGeometry(20, 3.1, 18);
var material = new THREE.MeshBasicMaterial({
  map: new THREE.TextureLoader().load('./roadImg/road1.jpeg')
});
var ro39 = new THREE.Mesh(geometry, material);
scene.add(ro39);

const road39 = new CANNON.Box(new CANNON.Vec3(10, 1.7, 9));
const rO39 = new CANNON.Body({
  mass: 0,
  position: new CANNON.Vec3(637, -6.1, 197)
})
rO39.quaternion.setFromEuler(0,-0.1, -0.1);
rO39.addShape(road39)
world.addBody(rO39)


//________ road40
var geometry = new THREE.BoxGeometry(20, 3.1, 18);
var material = new THREE.MeshBasicMaterial({
  map: new THREE.TextureLoader().load('./roadImg/road1.jpeg')
});
var ro40 = new THREE.Mesh(geometry, material);
scene.add(ro40);

const road40 = new CANNON.Box(new CANNON.Vec3(10, 1.7, 9));
const rO40 = new CANNON.Body({
  mass: 0,
  position: new CANNON.Vec3(647, -6.1, 199)
})
rO40.quaternion.setFromEuler(0,-0.2,0);
rO40.addShape(road40)
world.addBody(rO40)


//________ road41
var geometry = new THREE.BoxGeometry(20, 3, 18);
var material = new THREE.MeshBasicMaterial({
  map: new THREE.TextureLoader().load('./roadImg/road1.jpeg')
});
var ro41 = new THREE.Mesh(geometry, material);
scene.add(ro41);

const road41 = new CANNON.Box(new CANNON.Vec3(10, 1.7, 9));
const rO41 = new CANNON.Body({
  mass: 0,
  position: new CANNON.Vec3(666, -6.1, 203)
})
rO41.quaternion.setFromEuler(0, -0.2, 0);
rO41.addShape(road41)
world.addBody(rO41)


//________ road42
var geometry = new THREE.BoxGeometry(20, 3.1, 18);
var material = new THREE.MeshBasicMaterial({
  map: new THREE.TextureLoader().load('./roadImg/road1.jpeg')
});
var ro42 = new THREE.Mesh(geometry, material);
scene.add(ro42);

const road42 = new CANNON.Box(new CANNON.Vec3(10, 1.7, 9));
const rO42 = new CANNON.Body({
  mass: 0,
  position: new CANNON.Vec3(683, -6.1, 206.5)
})
rO42.quaternion.setFromEuler(0, -0.2, 0);
rO42.addShape(road42)
world.addBody(rO42)

//________ road43
var geometry = new THREE.BoxGeometry(20, 3, 18);
var material = new THREE.MeshBasicMaterial({
  map: new THREE.TextureLoader().load('./roadImg/road1.jpeg')
});
var ro43 = new THREE.Mesh(geometry, material);
scene.add(ro43);

const road43 = new CANNON.Box(new CANNON.Vec3(10, 1.7, 9));
const rO43 = new CANNON.Body({
  mass: 0,
  position: new CANNON.Vec3(702, -6.1,210.5)
})
rO43.quaternion.setFromEuler(0, -0.2, 0);
rO43.addShape(road43)
world.addBody(rO43)


//________ road44
var geometry = new THREE.BoxGeometry(20, 3.1, 18);
var material = new THREE.MeshBasicMaterial({
  map: new THREE.TextureLoader().load('./roadImg/road1.jpeg')
});
var ro44 = new THREE.Mesh(geometry, material);
scene.add(ro44);

const road44 = new CANNON.Box(new CANNON.Vec3(10, 1.7, 9));
const rO44 = new CANNON.Body({
  mass: 0,
  position: new CANNON.Vec3(717, -6.1, 213)
})
rO44.quaternion.setFromEuler(0,-0.1, 0);
rO44.addShape(road44);
world.addBody(rO44);

//________ road45
var geometry = new THREE.BoxGeometry(20, 3, 18);
var material = new THREE.MeshBasicMaterial({
  map: new THREE.TextureLoader().load('./roadImg/road1.jpeg')
});
var ro45 = new THREE.Mesh(geometry, material);
scene.add(ro45);

const road45 = new CANNON.Box(new CANNON.Vec3(10, 1.7, 9));
const rO45 = new CANNON.Body({
  mass: 0,
  position: new CANNON.Vec3(734, -6.1, 213.7)
})
rO45.quaternion.setFromEuler(0, -0, 0);
rO45.addShape(road45);
world.addBody(rO45);

//________ road46
var geometry = new THREE.BoxGeometry(20, 3.1, 18);
var material = new THREE.MeshBasicMaterial({
  map: new THREE.TextureLoader().load('./roadImg/road1.jpeg')
});
var ro46 = new THREE.Mesh(geometry, material);
scene.add(ro46);

const road46 = new CANNON.Box(new CANNON.Vec3(10, 1.7, 9));
const rO46 = new CANNON.Body({
  mass: 0,
  position: new CANNON.Vec3(754, -6.1, 213.7)
})
rO46.quaternion.setFromEuler(0, -0, 0);
rO46.addShape(road46);
world.addBody(rO46);

//________ road47
var geometry = new THREE.BoxGeometry(20, 3, 18);
var material = new THREE.MeshBasicMaterial({
  map: new THREE.TextureLoader().load('./roadImg/road1.jpeg')
});
var ro47 = new THREE.Mesh(geometry, material);
scene.add(ro47);

const road47 = new CANNON.Box(new CANNON.Vec3(10, 1.7, 9));
const rO47 = new CANNON.Body({
  mass: 0,
  position: new CANNON.Vec3(773, -6.1, 213.7)
})
rO47.quaternion.setFromEuler(0, -0, 0);
rO47.addShape(road47);
world.addBody(rO47);




//________ road48
var geometry = new THREE.BoxGeometry(20, 3.1, 18);
var material = new THREE.MeshBasicMaterial({
  map: new THREE.TextureLoader().load('./roadImg/road1.jpeg')
});
var ro48 = new THREE.Mesh(geometry, material);
scene.add(ro48);

const road48 = new CANNON.Box(new CANNON.Vec3(10, 1.7, 9));
const rO48 = new CANNON.Body({
  mass: 0,
  position: new CANNON.Vec3(790, -6.1, 213.7)
})
rO48.quaternion.setFromEuler(0, -0, 0);
rO48.addShape(road48);
world.addBody(rO48);




//________ road49
var geometry = new THREE.BoxGeometry(20, 3, 18);
var material = new THREE.MeshBasicMaterial({
  map: new THREE.TextureLoader().load('./roadImg/road1.jpeg')
});
var ro49 = new THREE.Mesh(geometry, material);
scene.add(ro49);

const road49 = new CANNON.Box(new CANNON.Vec3(10, 1.7, 9));
const rO49 = new CANNON.Body({
  mass: 0,
  position: new CANNON.Vec3(810, -6.1, 213.7)
})
rO49.quaternion.setFromEuler(0, -0, 0);
rO49.addShape(road49);
world.addBody(rO49);



//________ road50
var geometry = new THREE.BoxGeometry(20, 3.1, 18);
var material = new THREE.MeshBasicMaterial({
  map: new THREE.TextureLoader().load('./roadImg/road1.jpeg')
});
var ro50 = new THREE.Mesh(geometry, material);
scene.add(ro50);

const road50 = new CANNON.Box(new CANNON.Vec3(10, 1.7, 9));
const rO50 = new CANNON.Body({
  mass: 0,
  position: new CANNON.Vec3(830, -6.1, 213.7)
})
rO50.quaternion.setFromEuler(0, -0, 0);
rO50.addShape(road50);
world.addBody(rO50);


//________ road51
var geometry = new THREE.BoxGeometry(20, 3.1, 18);
var material = new THREE.MeshBasicMaterial({
  map: new THREE.TextureLoader().load('./roadImg/road1.jpeg')
});
var ro51 = new THREE.Mesh(geometry, material);
scene.add(ro51);

const road51 = new CANNON.Box(new CANNON.Vec3(10, 1.7, 9));
const rO51 = new CANNON.Body({
  mass: 0,
  position: new CANNON.Vec3(839, -6.1, 213.7)
})
rO51.quaternion.setFromEuler(0,0, 0.1);
rO51.addShape(road51);
world.addBody(rO51);


//________ road52
var geometry = new THREE.BoxGeometry(20, 3.1, 18);
var material = new THREE.MeshBasicMaterial({
  map: new THREE.TextureLoader().load('./roadImg/road1.jpeg')
});
var ro52 = new THREE.Mesh(geometry, material);
scene.add(ro52);

const road52 = new CANNON.Box(new CANNON.Vec3(10, 1.7, 9));
const rO52 = new CANNON.Body({
  mass: 0,
  position: new CANNON.Vec3(858.4, -6.1, 213.7)
})
rO52.quaternion.setFromEuler(0,0, -0.1);
rO52.addShape(road52);
world.addBody(rO52);


//________ road53
var geometry = new THREE.BoxGeometry(20, 3.1, 18);
var material = new THREE.MeshBasicMaterial({
  map: new THREE.TextureLoader().load('./img/stone Road.jpeg')
});
var ro53 = new THREE.Mesh(geometry, material);
scene.add(ro53);

const road53 = new CANNON.Box(new CANNON.Vec3(10, 1.7, 9));
const rO53 = new CANNON.Body({
  mass: 0,
  position: new CANNON.Vec3(868, -6.1, 213.7)
})
rO53.quaternion.setFromEuler(0, 0, -0);
rO53.addShape(road53);
world.addBody(rO53);


//________ road54
var geometry = new THREE.BoxGeometry(20, 3, 18);
var material = new THREE.MeshBasicMaterial({
  map: new THREE.TextureLoader().load('./img/stone Road.jpeg')
});
var ro54 = new THREE.Mesh(geometry, material);
scene.add(ro54);

const road54 = new CANNON.Box(new CANNON.Vec3(10, 1.7, 9));
const rO54 = new CANNON.Body({
  mass: 0,
  position: new CANNON.Vec3(885, -6.09, 213.7)
})
rO54.quaternion.setFromEuler(0, 0, -0);
rO54.addShape(road54);
world.addBody(rO54);


//________ road55
var geometry = new THREE.BoxGeometry(20, 3, 18);
var material = new THREE.MeshBasicMaterial({
  map: new THREE.TextureLoader().load('./img/stone Road.jpeg')
});
var ro55 = new THREE.Mesh(geometry, material);
scene.add(ro55);

const road55 = new CANNON.Box(new CANNON.Vec3(10, 1.7, 9));
const rO55 = new CANNON.Body({
  mass: 0,
  position: new CANNON.Vec3(902, -6.08, 211.7)
})
rO55.quaternion.setFromEuler(0,0.2, 0);
rO55.addShape(road55);
world.addBody(rO55);

//________ road56
var geometry = new THREE.BoxGeometry(20, 3.1, 18);
var material = new THREE.MeshBasicMaterial({
  map: new THREE.TextureLoader().load('./img/stone Road.jpeg')
});
var ro56 = new THREE.Mesh(geometry, material);
scene.add(ro56);

const road56 = new CANNON.Box(new CANNON.Vec3(10, 1.7, 9));
const rO56 = new CANNON.Body({
  mass: 0,
  position: new CANNON.Vec3(915, -6.08, 206 )
})
rO56.quaternion.setFromEuler(0, 0.6, 0);
rO56.addShape(road56);
world.addBody(rO56);

//________ road57
var geometry = new THREE.BoxGeometry(20, 3, 18);
var material = new THREE.MeshBasicMaterial({
  map: new THREE.TextureLoader().load('./img/stone Road.jpeg')
});
var ro57 = new THREE.Mesh(geometry, material);
scene.add(ro57);

const road57 = new CANNON.Box(new CANNON.Vec3(10, 1.7, 9));
const rO57 = new CANNON.Body({
  mass: 0,
  position: new CANNON.Vec3(927, -6.08, 195)
})
rO57.quaternion.setFromEuler(0,1, 0);
rO57.addShape(road57);
world.addBody(rO57);


//________ road58
var geometry = new THREE.BoxGeometry(20, 3.1, 18);
var material = new THREE.MeshBasicMaterial({
  map: new THREE.TextureLoader().load('./img/stone Road.jpeg')
});
var ro58 = new THREE.Mesh(geometry, material);
scene.add(ro58);

const road58 = new CANNON.Box(new CANNON.Vec3(10, 1.7, 9));
const rO58 = new CANNON.Body({
  mass: 0,
  position: new CANNON.Vec3(932.5, -6.08, 180)
})
rO58.quaternion.setFromEuler(0,1.5, 0);
rO58.addShape(road58);
world.addBody(rO58);


//________ road59
var geometry = new THREE.BoxGeometry(20, 3, 18);
var material = new THREE.MeshBasicMaterial({
  map: new THREE.TextureLoader().load('./img/stone Road.jpeg')
});
var ro59 = new THREE.Mesh(geometry, material);
scene.add(ro59);

const road59 = new CANNON.Box(new CANNON.Vec3(10, 1.7, 9));
const rO59 = new CANNON.Body({
  mass: 0,
  position: new CANNON.Vec3(932.5, -6.08, 160)
})
rO59.quaternion.setFromEuler(0,1.6, 0);
rO59.addShape(road59);
world.addBody(rO59);


//________ road60
var geometry = new THREE.BoxGeometry(20, 3, 18);
var material = new THREE.MeshBasicMaterial({
  map: new THREE.TextureLoader().load('./img/stone Road.jpeg')
});
var ro60 = new THREE.Mesh(geometry, material);
scene.add(ro60);

const road60 = new CANNON.Box(new CANNON.Vec3(10, 1.7, 9));
const rO60 = new CANNON.Body({
  mass: 0,
  position: new CANNON.Vec3(931.9, -5.08, 140)
})
rO60.quaternion.setFromEuler(0, 1.6, 0.1);
rO60.addShape(road60);
world.addBody(rO60);


//________ road61
var geometry = new THREE.BoxGeometry(20, 3.1, 18);
var material = new THREE.MeshBasicMaterial({
  map: new THREE.TextureLoader().load('./img/stone Road.jpeg')
});
var ro61 = new THREE.Mesh(geometry, material);
scene.add(ro61);

const road61 = new CANNON.Box(new CANNON.Vec3(10, 1.7, 9));
const rO61 = new CANNON.Body({
  mass: 0,
  position: new CANNON.Vec3(931.4, -3.2, 121)
})
rO61.quaternion.setFromEuler(0, 1.6, 0.1);
rO61.addShape(road61);
world.addBody(rO61);


//________ road62
var geometry = new THREE.BoxGeometry(20, 3.1, 18);
var material = new THREE.MeshBasicMaterial({
  map: new THREE.TextureLoader().load('./img/stone Road.jpeg')
});
var ro62 = new THREE.Mesh(geometry, material);
scene.add(ro62);

const road62 = new CANNON.Box(new CANNON.Vec3(10, 1.7, 9));
const rO62 = new CANNON.Body({
  mass: 0,
  position: new CANNON.Vec3(931,-2.2, 101.5)
})
rO62.quaternion.setFromEuler(0, 1.6, 0);
rO62.addShape(road62);
world.addBody(rO62);

//________ road63
var geometry = new THREE.BoxGeometry(20, 3, 18);
var material = new THREE.MeshBasicMaterial({
  map: new THREE.TextureLoader().load('./img/stone Road.jpeg')
});
var ro63 = new THREE.Mesh(geometry, material);
scene.add(ro63);

const road63 = new CANNON.Box(new CANNON.Vec3(10, 1.7, 9));
const rO63 = new CANNON.Body({
  mass: 0,
  position: new CANNON.Vec3(933,-2.2, 87)
})
rO63.quaternion.setFromEuler(0, 1.2, 0);
rO63.addShape(road63);
world.addBody(rO63);


//________ road64
var geometry = new THREE.BoxGeometry(20, 3.1, 18);
var material = new THREE.MeshBasicMaterial({
  map: new THREE.TextureLoader().load('./img/stone Road.jpeg')
});
var ro64 = new THREE.Mesh(geometry, material);
scene.add(ro64);

const road64 = new CANNON.Box(new CANNON.Vec3(10, 1.7, 9));
const rO64 = new CANNON.Body({
  mass: 0,
  position: new CANNON.Vec3(942,-2.2, 74)
})
rO64.quaternion.setFromEuler(0,0.8, 0);
rO64.addShape(road64);
world.addBody(rO64);



//________ road65
var geometry = new THREE.BoxGeometry(20, 3, 18);
var material = new THREE.MeshBasicMaterial({
  map: new THREE.TextureLoader().load('./img/stone Road.jpeg')
});
var ro65 = new THREE.Mesh(geometry, material);
scene.add(ro65);

const road65 = new CANNON.Box(new CANNON.Vec3(10, 1.7, 9));
const rO65 = new CANNON.Body({
  mass: 0,
  position: new CANNON.Vec3(955,-2.2,63.8)
})
rO65.quaternion.setFromEuler(0,0.5, 0);
rO65.addShape(road65);
world.addBody(rO65);



//________ road66
var geometry = new THREE.BoxGeometry(20, 3.1, 18);
var material = new THREE.MeshBasicMaterial({
  map: new THREE.TextureLoader().load('./img/stone Road.jpeg')
});
var ro66 = new THREE.Mesh(geometry, material);
scene.add(ro66);

const road66 = new CANNON.Box(new CANNON.Vec3(10, 1.7, 9));
const rO66 = new CANNON.Body({
  mass: 0,
  position: new CANNON.Vec3(969.9, -2.2, 60)
})
rO66.quaternion.setFromEuler(0, 0, 0);
rO66.addShape(road66);
world.addBody(rO66);










//. margA


//.  secondPlace

//_________12
var geometry = new THREE.BoxGeometry(100,3,100); 
var material = new THREE.MeshBasicMaterial({ 
   map:new THREE.TextureLoader().load('./img/bac.jpeg' )
}); 
  var p12 = new THREE.Mesh(geometry, material); 
 scene.add(p12);
 
 const please12=new CANNON.Box(new CANNON.Vec3(50,1.7,50));
 const P12 = new CANNON.Body({
   mass:0,
   position:new CANNON.Vec3(540,-1.4,200)
 })
 P12.quaternion.setFromEuler(0,0,0);
 P12.addShape(please12)
world.addBody(P12)



//_________13
var geometry = new THREE.BoxGeometry(100,3,100); 
var material = new THREE.MeshBasicMaterial({ 
   map:new THREE.TextureLoader().load('./img/bac.jpeg' )
}); 
  var p13 = new THREE.Mesh(geometry, material); 
 scene.add(p13);
 
 const please13=new CANNON.Box(new CANNON.Vec3(50,1.7,50));
 const P13 = new CANNON.Body({
   mass:0,
   position:new CANNON.Vec3(570,-1.4,170)
 })
 P13.quaternion.setFromEuler(0.2,0,0);
 P13.addShape(please13)
world.addBody(P13)


//_________14
var geometry = new THREE.BoxGeometry(100,3,100); 
var material = new THREE.MeshBasicMaterial({ 
   map:new THREE.TextureLoader().load('./img/bac.jpeg' )
}); 
  var p14 = new THREE.Mesh(geometry, material); 
 scene.add(p14);
 
 const please14=new CANNON.Box(new CANNON.Vec3(50,1.7,50));
 const P14 = new CANNON.Body({
   mass:0,
   position:new CANNON.Vec3(570,-1.4,220)
 })
 P14.quaternion.setFromEuler(-0.2,0,0);
 P14.addShape(please14)
world.addBody(P14)


//_________15
var geometry = new THREE.BoxGeometry(100,3,100); 
var material = new THREE.MeshBasicMaterial({ 
   map:new THREE.TextureLoader().load('./img/bac.jpeg' )
}); 
  var p15 = new THREE.Mesh(geometry, material); 
 scene.add(p15);
 
 const please15=new CANNON.Box(new CANNON.Vec3(50,1.7,50));
 const P15 = new CANNON.Body({
   mass:0,
   position:new CANNON.Vec3(638,-6.3,200)
 })
 P15.quaternion.setFromEuler(0,0,-0.1);
 P15.addShape(please15)
world.addBody(P15)


//_________16
var geometry = new THREE.BoxGeometry(100,3,100); 
var material = new THREE.MeshBasicMaterial({ 
   map:new THREE.TextureLoader().load('./img/bac.jpeg' )
}); 
  var p16 = new THREE.Mesh(geometry, material); 
 scene.add(p16);
 
 const please16 =new CANNON.Box(new CANNON.Vec3(50,1.7,50));
 const P16 = new CANNON.Body({
   mass:0,
   position:new CANNON.Vec3(685,-6.3,200)
 })
 P16.quaternion.setFromEuler(0,0,0);
 P16.addShape(please16)
world.addBody(P16)

//_________17
var geometry = new THREE.BoxGeometry(500, 3, 500);
var material = new THREE.MeshBasicMaterial({
  map: new THREE.TextureLoader().load('./img/bac.jpeg')
});
var p17 = new THREE.Mesh(geometry, material);
scene.add(p17);

const please17 = new CANNON.Box(new CANNON.Vec3(250, 1.7, 250));
const P17 = new CANNON.Body({
  mass: 0,
  position: new CANNON.Vec3(983, -6.3, 50)
})
P17.quaternion.setFromEuler(0, 0, 0);
P17.addShape(please17)
world.addBody(P17)

//_________18
var geometry = new THREE.BoxGeometry(100, 3, 100);
var material = new THREE.MeshBasicMaterial({
  map: new THREE.TextureLoader().load('./img/bac.jpeg')
});
var p18 = new THREE.Mesh(geometry, material);
scene.add(p18);

const please18 = new CANNON.Box(new CANNON.Vec3(50, 1.7, 50));
const P18 = new CANNON.Body({
  mass: 0,
  position: new CANNON.Vec3(500, -1.2, 135)
})
P18.quaternion.setFromEuler(0, 0, 0);
P18.addShape(please18)
world.addBody(P18)


//_________19
var geometry = new THREE.BoxGeometry(100, 3, 100);
var material = new THREE.MeshBasicMaterial({
  map: new THREE.TextureLoader().load('./img/bac.jpeg')
});
var p19 = new THREE.Mesh(geometry, material);
scene.add(p19);

const please19 = new CANNON.Box(new CANNON.Vec3(50, 1.7, 50));
const P19 = new CANNON.Body({
  mass: 0,
  position: new CANNON.Vec3(500, -1.2, 250)
})
P19.quaternion.setFromEuler(0,0, 0);
P19.addShape(please19)
world.addBody(P19)


//_________20
var geometry = new THREE.BoxGeometry(100, 3, 100);
var material = new THREE.MeshBasicMaterial({
  map: new THREE.TextureLoader().load('./img/bac.jpeg')
});
var p20 = new THREE.Mesh(geometry, material);
scene.add(p20);

const please20 = new CANNON.Box(new CANNON.Vec3(50, 1.7, 50));
const P20 = new CANNON.Body({
  mass: 0,
  position: new CANNON.Vec3(750, -6.1, 280)
})
P20.quaternion.setFromEuler(0, 0, 0);
P20.addShape(please20)
world.addBody(P20)



//_________21
var geometry = new THREE.BoxGeometry(100, 3, 100);
var material = new THREE.MeshBasicMaterial({
  map: new THREE.TextureLoader().load('./img/bac.jpeg')
});
var p21 = new THREE.Mesh(geometry, material);
scene.add(p21);

const please21 = new CANNON.Box(new CANNON.Vec3(50, 1.7, 50));
const P21 = new CANNON.Body({
  mass: 0,
  position: new CANNON.Vec3(750, -6.1, 150)
})
P21.quaternion.setFromEuler(0, 0, 0);
P21.addShape(please21)
world.addBody(P21)


//_________22
var geometry = new THREE.BoxGeometry(100, 3, 100);
var material = new THREE.MeshBasicMaterial({
  map: new THREE.TextureLoader().load('./img/stone.jpeg')
});
var p22 = new THREE.Mesh(geometry, material);
scene.add(p22);

const please22 = new CANNON.Box(new CANNON.Vec3(50, 1.7, 50));
const P22 = new CANNON.Body({
  mass: 0,
  position: new CANNON.Vec3(900, -6.1, 200)
})
P22.quaternion.setFromEuler(0, 0, 0);
P22.addShape(please22)
world.addBody(P22)

//. placeA














// gamePlace



















/*
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

*/




camera.position.set(30,30,30);

cameramesh.add(camera)
renderer.setClearColor("lightcyan");





 const controls = new OrbitControls( camera, renderer.domElement );
 
 controls.maxPolarAngle = Math.PI * 0.495;
// //controls.target.set( 0, 2, 0 );
 controls.minDistance = 10.0;
 controls.maxDistance = 20.0;
 controls.update();






window.onresize = function () {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );

};

function animate() {
    requestAnimationFrame(animate);
 world.fixedStep();
//CannonD.update();

 controls.update();
camera.lookAt(cameramesh.position)



cameramesh.position.copy(chassisBody.position)
cameramesh.quaternion.copy(chassisBody.quaternion)




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

s18.position.copy(S18.position)
s18.quaternion.copy(S18.quaternion)

s19.position.copy(S19.position)
s19.quaternion.copy(S19.quaternion)

s20.position.copy(S20.position)
s20.quaternion.copy(S20.quaternion)

s21.position.copy(S21.position)
s21.quaternion.copy(S21.quaternion)

s22.position.copy(S22.position)
s22.quaternion.copy(S22.quaternion)






//.  jangalB






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

p12.position.copy(P12.position)
p12.quaternion.copy(P12.quaternion)


p13.position.copy(P13.position)
p13.quaternion.copy(P13.quaternion)

p14.position.copy(P14.position)
p14.quaternion.copy(P14.quaternion)

p15.position.copy(P15.position)
p15.quaternion.copy(P15.quaternion)
p16.position.copy(P16.position)
p16.quaternion.copy(P16.quaternion)

p17.position.copy(P17.position)
p17.quaternion.copy(P17.quaternion)

p18.position.copy(P18.position)
p18.quaternion.copy(P18.quaternion)

p19.position.copy(P19.position)
p19.quaternion.copy(P19.quaternion)

p20.position.copy(P20.position)
p20.quaternion.copy(P20.quaternion)

p21.position.copy(P21.position)
p21.quaternion.copy(P21.quaternion)

p22.position.copy(P22.position)
p22.quaternion.copy(P22.quaternion)

// PlaceB





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


ro22.position.copy(rO22.position);
ro22.quaternion.copy(rO22.quaternion);


ro23.position.copy(rO23.position);
ro23.quaternion.copy(rO23.quaternion);

ro24.position.copy(rO24.position);
ro24.quaternion.copy(rO24.quaternion);


ro25.position.copy(rO25.position);
ro25.quaternion.copy(rO25.quaternion);

ro26.position.copy(rO26.position);
ro26.quaternion.copy(rO26.quaternion);

ro27.position.copy(rO27.position);
ro27.quaternion.copy(rO27.quaternion);

ro28.position.copy(rO28.position);
ro28.quaternion.copy(rO28.quaternion);

ro29.position.copy(rO29.position);
ro29.quaternion.copy(rO29.quaternion);


ro30.position.copy(rO30.position);
ro30.quaternion.copy(rO30.quaternion);


ro31.position.copy(rO31.position);
ro31.quaternion.copy(rO31.quaternion);


ro32.position.copy(rO32.position);
ro32.quaternion.copy(rO32.quaternion);


ro33.position.copy(rO33.position);
ro33.quaternion.copy(rO33.quaternion);


ro34.position.copy(rO34.position);
ro34.quaternion.copy(rO34.quaternion);

ro35.position.copy(rO35.position);
ro35.quaternion.copy(rO35.quaternion);

ro36.position.copy(rO36.position);
ro36.quaternion.copy(rO36.quaternion);

ro37.position.copy(rO37.position);
ro37.quaternion.copy(rO37.quaternion);

ro38.position.copy(rO38.position);
ro38.quaternion.copy(rO38.quaternion);

ro39.position.copy(rO39.position);
ro39.quaternion.copy(rO39.quaternion);

ro40.position.copy(rO40.position);
ro40.quaternion.copy(rO40.quaternion);


ro41.position.copy(rO41.position);
ro41.quaternion.copy(rO41.quaternion);

ro42.position.copy(rO42.position);
ro42.quaternion.copy(rO42.quaternion);

ro43.position.copy(rO43.position);
ro43.quaternion.copy(rO43.quaternion);

ro44.position.copy(rO44.position);
ro44.quaternion.copy(rO44.quaternion);


ro45.position.copy(rO45.position);
ro45.quaternion.copy(rO45.quaternion);

ro46.position.copy(rO46.position);
ro46.quaternion.copy(rO46.quaternion);

ro47.position.copy(rO47.position);
ro47.quaternion.copy(rO47.quaternion);



ro48.position.copy(rO48.position);
ro48.quaternion.copy(rO48.quaternion);

ro49.position.copy(rO49.position);
ro49.quaternion.copy(rO49.quaternion);

ro50.position.copy(rO50.position);
ro50.quaternion.copy(rO50.quaternion);

ro51.position.copy(rO51.position);
ro51.quaternion.copy(rO51.quaternion);

ro52.position.copy(rO52.position);
ro52.quaternion.copy(rO52.quaternion);


ro53.position.copy(rO53.position);
ro53.quaternion.copy(rO53.quaternion);

ro54.position.copy(rO54.position);
ro54.quaternion.copy(rO54.quaternion);


ro55.position.copy(rO55.position);
ro55.quaternion.copy(rO55.quaternion);


ro56.position.copy(rO56.position);
ro56.quaternion.copy(rO56.quaternion);

ro57.position.copy(rO57.position);
ro57.quaternion.copy(rO57.quaternion);

ro58.position.copy(rO58.position);
ro58.quaternion.copy(rO58.quaternion);

ro59.position.copy(rO59.position);
ro59.quaternion.copy(rO59.quaternion);

ro60.position.copy(rO60.position);
ro60.quaternion.copy(rO60.quaternion);


ro61.position.copy(rO61.position);
ro61.quaternion.copy(rO61.quaternion);


ro62.position.copy(rO62.position);
ro62.quaternion.copy(rO62.quaternion);


ro63.position.copy(rO63.position);
ro63.quaternion.copy(rO63.quaternion);

ro64.position.copy(rO64.position);
ro64.quaternion.copy(rO64.quaternion);

ro65.position.copy(rO65.position);
ro65.quaternion.copy(rO65.quaternion);


ro66.position.copy(rO66.position);
ro66.quaternion.copy(rO66.quaternion);




malCube.position.copy(mal.position);
malCube.quaternion.copy(mal.quaternion);






//. margB

renderer.render( scene, camera );
}







