import * as THREE from 'three'

// Placeholder scene. The real entry point grows in milestone M0 (the scale
// spike) — floating origin, logarithmic depth, log zoom. For now this just
// proves the build/dev pipeline renders something.

const app = document.getElementById('app')
if (!app) throw new Error('#app container not found')

const renderer = new THREE.WebGLRenderer({ antialias: true, logarithmicDepthBuffer: true })
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
renderer.setSize(window.innerWidth, window.innerHeight)
app.appendChild(renderer.domElement)

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1e-3, 1e12)
camera.position.set(0, 1.5, 5)
camera.lookAt(0, 0, 0)

const sun = new THREE.Mesh(
  new THREE.SphereGeometry(1, 48, 48),
  new THREE.MeshBasicMaterial({ color: 0xffcc44 }),
)
scene.add(sun)

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
})

renderer.setAnimationLoop(() => {
  sun.rotation.y += 0.002
  renderer.render(scene, camera)
})
