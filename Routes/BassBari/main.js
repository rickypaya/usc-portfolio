import * as THREE from 'three';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';

//smooth scrolling & scroll trigger
const lenis = new Lenis();
lenis.on("scroll", ScrollTrigger.update);
gsap.ticker.add((time) => {
    lenis.raf(time*1000);
});
gsap.ticker.lagSmoothing(0);

//setup
//camera!
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const textLoader = new THREE.TextureLoader();
const texture = textLoader.load("./assets/theater-background.jpg");
texture.minFilter = THREE.LinearFilter;
const scene = new THREE.Scene();
scene.background = texture;
const renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true,
});
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setClearColor(0xffffff, 1);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.physicallyCorrectLights = true;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 3;
document.querySelector("#three-container").appendChild(renderer.domElement);

//window resize responsiveness
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight);
    const box = new THREE.Box3().setFromObject(model);
    let center = box.getCenter(new THREE.Vector3());
    model.position.sub(center);

    const size = box.getSize(new THREE.Vector3());
    const maxDim = Math.max(size.x, size.y, size.z);
    camera.position.z = maxDim * 1.2;
    basicAnimate();
}, false);

//loaders
let model;
const loader = new GLTFLoader();
loader.load(
    './models/Theater-simple.glb',
    function (gltf) {
        model = gltf.scene;
        console.log(model);
        model.traverse((node) => {
            if(node.isMesh) {
                if(node.material) {
                    node.material.metalness = 0;
                    node.material.roughness = 1.0;
                    node.material.envMapIntensity = 1.5;
                }
                node.castShadow = true;
                node.recieveShadow = true;
            }
        });

        const box = new THREE.Box3().setFromObject(model);
        let center = box.getCenter(new THREE.Vector3());
        model.position.sub(center);
        scene.add(model);

        const size = box.getSize(new THREE.Vector3());
        const maxDim = Math.max(size.x, size.y, size.z);
        camera.position.z = maxDim * 1.2;
        camera.lookAt(0, 0, 0);

        model.scale.set(0, 0, 0);
        playInitialAnimation();

        cancelAnimationFrame(basicAnimate);
        animate();
        
    },
    function (xhr) {
    },
    undefined, function (error) {
        console.log("Error: " + error)
    }
);

const floatAmp = 0.1;
const floatSpeed = 1.5;
const rotationSpeed = 0.3;
let isFloating = true;
let currentScroll = 0;
const stickyHeight = window.innerHeight;
const scheduleSection = document.querySelector("#Contact");
const schedulePos = scheduleSection.offsetTop;

function playInitialAnimation() {
    //initial animation to scale in theater
    if(model) {
        setTimeout(() => {
            gsap.to(model.rotation, {
                y: model.rotation.y + Math.PI * 2 + Math.PI/32,
                duration: 2,
                ease: "power2.out",
            });
            gsap.to(model.scale, {
                x: 1.5, y: 1.5, z: 1.5,
                duration: 1.5,
                ease: "power2.in", 
            });

        }, 2000);
    }
}

ScrollTrigger.create({
    //animation for rescaling theater after dismissing
    trigger: "#Hero",
    start: "top top",
    end: `${stickyHeight/2}px`,
    onEnterBack: () => {
        if(model) {            
            gsap.to(model.rotation, {
                y: model.rotation.y + Math.PI / 4,
                duration: 2,
                ease: "power2.inOut",
            });
            gsap.to(model.scale, {
                x: 1.5, y: 1.5, z: 1.5,
                duration: 1.5,
                ease: "power2.in", 
            });
        }
        isFloating = true;
        document.querySelector(".contact-container").classList.remove("show-contact-cards");
    }
})

ScrollTrigger.create({
    trigger: "#Biography",
    start: "top top",
    end: `${stickyHeight}px`,
    pin: true,
    onEnter: () => {
        if(model && model.scale.x > 0) {
            gsap.to(model.scale, {
                x: 2, y: 2, z: 1.5,
                duration: 1,
                ease: "power2.in"
            });
            gsap.to(model.rotation, {
                y: model.rotation.y + Math.PI / 4,
                duration: 2,
                ease: "power2.inOut",
            })
        }
    },
    onEnterBack: () => {
        if(model && model.scale.x > 0) {
            //return model to y rotation 0
            gsap.to(model.rotation, {
                y: 0,
                duration: 0.5,
                ease: "power2.in",
                onComplete: () => {
                    //scale out to 1
                            gsap.to(model.rotation, {
                                y: Math.PI/8,
                                duration: 1,
                                ease: "power2.in",
                            })
                }
            })
        }
    }
});
        

ScrollTrigger.create({
    trigger: "#Performances",
    start: "top top",
    end: `${stickyHeight}px`,
    pin: true,
    onEnter: () => {
        if(model && model.scale.x > 0) {
            model.position.y = -1;
            //return model to y rotation 0
            gsap.to(model.rotation, {
                y: model.rotation.y - 2 * ( Math.PI/ 4),
                duration: 0.5,
                ease: "power2.in",
                onComplete: () => {
                    //scale out to 1
                    gsap.to(model.scale,{
                        x: 1, y: 1, z:1,
                        duration: 0.5,
                        ease: "power2.out",
                        onComplete: () => {
                            gsap.to(model.position, {
                                x: 2.5
                            })
                        }
                    })
                }
            })
        }
    }
})

ScrollTrigger.create({
    //trigger to spin and scale down theater
    trigger: "#Contact",
    start: "top top",
    end: `${stickyHeight}px`,
    pin: true,
    onEnter: () => {
        if(model) {
            isFloating = false;
            model.position.y = -1.5;
            
            gsap.to(model.rotation, {
                y: model.rotation.y + Math.PI/4,
                onComplete: () => {
                    gsap.to(model.position, {
                        x: 0,
                        onComplete: () => {
                            //spin model 360 deg
                            gsap.to(model.rotation, {
                                y: model.rotation.y + Math.PI * 2,
                                duration: 1,
                                ease: "power2.inOut",
                                onComplete: () => {
                                    //scale model out to 0
                                    gsap.to(model.scale, {
                                        x: 0, y: 0, z: 0,
                                        duration: 0.5,
                                        ease: "power2.in",
                                    })
                                }
                            })
                        }
                    })
                }
            })
                
        }
        setTimeout(() => {
            document.querySelector(".contact-container").classList.add("show-contact-cards");
        },2000)
    }
});

document.getElementById("nav-button").addEventListener('click', () => {
    document.querySelector(".off-screen-menu").classList.toggle("show");
})

lenis.on("scroll", (e) => {
    currentScroll = e.scroll;
})

function animate() {
    if(model){
        //floating animation
        if(isFloating){
            const floatOffset = Math.sin(Date.now() * 0.001 * floatSpeed) * floatAmp -2;
            model.position.y = floatOffset;
        }
    }
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
}

//lights!
const ambientLight = new THREE.AmbientLight(0xffffff, 3);
scene.add(ambientLight);

const mainLight = new THREE.DirectionalLight(0xffffff, 2);
mainLight.position.set(0, 10, 0);
scene.add(mainLight);

const spotLight = new THREE.SpotLight(0xEFDECD, 40, 5, -Math.PI/16);
spotLight.position.set(0, 1.8, 0);
spotLight.castShadow = true;
scene.add(spotLight);

const pointLight = new THREE.PointLight(0xCC7F3B, 30, 30, 1);
pointLight.position.set(0, 1, 3);
pointLight.castShadow = true;
scene.add(pointLight);

//action!
function basicAnimate() {
    renderer.render(scene, camera);
    requestAnimationFrame(basicAnimate);
}

basicAnimate();