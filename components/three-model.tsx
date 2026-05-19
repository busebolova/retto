"use client"

import { useEffect, useRef } from "react"

export default function ThreeModel() {
  const mountRef = useRef<HTMLDivElement>(null)
  const initializedRef = useRef(false)

  useEffect(() => {
    if (!mountRef.current) return
    // Strict Mode double-mount önlemi: zaten başlatıldıysa çık
    if (initializedRef.current) return
    initializedRef.current = true

    let animationId: number
    let renderer: any
    let scene: any
    let camera: any
    let model: any
    let time = 0
    let isVisible = true
    let destroyed = false

    const isMobile = window.innerWidth < 768
    const initCamZ = isMobile ? 5.5 : 6
    const target = { rotY: 0, rotX: 0, rotZ: 0, posY: 0, camZ: initCamZ }
    const current = { rotY: 0, rotX: 0, rotZ: 0, posY: 0, camZ: initCamZ }

    async function init() {
      const THREE = await import("three")
      const { GLTFLoader } = await import("three/addons/loaders/GLTFLoader.js")
      const { RoomEnvironment } = await import("three/addons/environments/RoomEnvironment.js")

      // Async sonrası destroyed kontrolü
      if (destroyed || !mountRef.current) return

      const mount = mountRef.current
      const width = mount.clientWidth
      const height = mount.clientHeight

      scene = new THREE.Scene()
      scene.background = null

      const fov = isMobile ? 46 : 40
      camera = new THREE.PerspectiveCamera(fov, width / height, 0.1, 100)
      camera.position.set(0, 0, initCamZ)

      renderer = new THREE.WebGLRenderer({
        antialias: !isMobile,
        alpha: true,
        powerPreference: "high-performance",
        precision: isMobile ? "mediump" : "highp",
      })
      renderer.setSize(width, height)
      renderer.setPixelRatio(isMobile ? 1 : Math.min(window.devicePixelRatio, 2))
      renderer.setClearColor(0x000000, 0)
      renderer.toneMapping = THREE.ACESFilmicToneMapping
      renderer.toneMappingExposure = isMobile ? 3.0 : 3.5
      renderer.outputColorSpace = THREE.SRGBColorSpace
      renderer.shadowMap.enabled = false

      if (renderer.domElement) {
        renderer.domElement.style.willChange = "transform"
        renderer.domElement.style.transform = "translateZ(0)"
      }

      mount.appendChild(renderer.domElement)

      const pmremGenerator = new THREE.PMREMGenerator(renderer)
      const envTexture = pmremGenerator.fromScene(new RoomEnvironment()).texture
      scene.environment = envTexture
      pmremGenerator.dispose()

      scene.add(new THREE.AmbientLight(0xffffff, isMobile ? 0.6 : 0.4))

      const keyLight = new THREE.DirectionalLight(0xffffff, 2.5)
      keyLight.position.set(3, 5, 3)
      scene.add(keyLight)

      const fillLight = new THREE.DirectionalLight(0x6633ff, 3.5)
      fillLight.position.set(-4, 2, 2)
      scene.add(fillLight)

      const rimLight = new THREE.DirectionalLight(0xff1155, 3.0)
      rimLight.position.set(0, -2, -4)
      scene.add(rimLight)

      // Mobilde sadece 1 point light (3 yerine)
      const pointLight1 = new THREE.PointLight(0xff8800, isMobile ? 4.0 : 5.0, 12)
      scene.add(pointLight1)

      const pointLight2 = isMobile ? null : new THREE.PointLight(0x00aaff, 4.0, 12)
      if (pointLight2) scene.add(pointLight2)

      const pointLight3 = isMobile ? null : new THREE.PointLight(0x00ffaa, 2.5, 10)
      if (pointLight3) scene.add(pointLight3)

      const loader = new GLTFLoader()
      loader.load(
        "/1.gltf",
        (gltf: any) => {
          if (destroyed) return
          model = gltf.scene

          model.traverse((child: any) => {
            if (child.isMesh) {
              child.material = new THREE.MeshStandardMaterial({
                color: new THREE.Color(0x080808),
                metalness: 1.0,
                roughness: 0.0,
                envMap: envTexture,
                envMapIntensity: 6.0,
              })
              child.frustumCulled = true
            }
          })

          const box = new THREE.Box3().setFromObject(model)
          const center = box.getCenter(new THREE.Vector3())
          const size = box.getSize(new THREE.Vector3())
          const maxDim = Math.max(size.x, size.y, size.z)
          const baseScale = isMobile ? 2.2 : 2.5
          const scale = baseScale / maxDim
          model.scale.setScalar(scale)
          model.position.sub(center.multiplyScalar(scale))
          if (isMobile) model.position.y += 0.1

          scene.add(model)
        },
        undefined,
        (error: any) => console.error("GLTF load error:", error)
      )

      function handleScroll() {
        const heroHeight = window.innerHeight * 4
        const scrollY = window.scrollY
        const progress = Math.min(scrollY / (heroHeight * 0.5), 1)

        target.rotY = progress * Math.PI * 2.5
        target.rotX = progress * Math.PI * 0.3
        target.rotZ = Math.sin(progress * Math.PI) * 0.2
        target.posY = Math.sin(progress * Math.PI * 0.5) * 0.4
        const camZEnd = isMobile ? initCamZ - 1.5 : initCamZ - 2.5
        target.camZ = initCamZ - progress * (initCamZ - camZEnd)
      }

      window.addEventListener("scroll", handleScroll, { passive: true })

      function handleVisibility() {
        isVisible = !document.hidden
      }
      document.addEventListener("visibilitychange", handleVisibility)

      const lerpFactor = isMobile ? 0.07 : 0.05

      function animate() {
        if (destroyed) return
        animationId = requestAnimationFrame(animate)
        if (!isVisible) return

        time += isMobile ? 0.005 : 0.008

        pointLight1.position.set(Math.sin(time * 0.7) * 4, Math.cos(time * 0.3) * 2, Math.cos(time * 0.7) * 4)
        if (pointLight2) pointLight2.position.set(Math.sin(time * 0.5 + Math.PI) * 4, Math.sin(time * 0.4) * 2, Math.cos(time * 0.5 + Math.PI) * 4)
        if (pointLight3) pointLight3.position.set(Math.sin(time * 0.3 + Math.PI * 0.5) * 3, Math.cos(time * 0.4) * 3, 2)

        current.rotY += (target.rotY - current.rotY) * lerpFactor
        current.rotX += (target.rotX - current.rotX) * lerpFactor
        current.rotZ += (target.rotZ - current.rotZ) * lerpFactor
        current.posY += (target.posY - current.posY) * lerpFactor
        current.camZ += (target.camZ - current.camZ) * lerpFactor

        if (model) {
          model.rotation.x = current.rotX
          model.rotation.y = current.rotY + time * 0.08
          model.rotation.z = current.rotZ
          model.position.y = current.posY + (isMobile ? 0.1 : 0)
        }

        camera.position.z = current.camZ
        renderer.render(scene, camera)
      }
      animate()

      function handleResize() {
        if (!mount || destroyed) return
        const w = mount.clientWidth
        const h = mount.clientHeight
        camera.aspect = w / h
        camera.updateProjectionMatrix()
        renderer.setSize(w, h)
      }
      window.addEventListener("resize", handleResize)

      // cleanup fonksiyonunu döndür
      return () => {
        window.removeEventListener("scroll", handleScroll)
        window.removeEventListener("resize", handleResize)
        document.removeEventListener("visibilitychange", handleVisibility)
      }
    }

    let innerCleanup: (() => void) | undefined
    init().then((cleanup) => {
      innerCleanup = cleanup
    })

    return () => {
      destroyed = true
      initializedRef.current = false
      if (animationId) cancelAnimationFrame(animationId)
      if (innerCleanup) innerCleanup()
      if (renderer) {
        renderer.dispose()
        if (mountRef.current && renderer.domElement && mountRef.current.contains(renderer.domElement)) {
          mountRef.current.removeChild(renderer.domElement)
        }
      }
    }
  }, [])

  return (
    <div
      ref={mountRef}
      style={{
        width: "100%",
        height: "100%",
        display: "block",
      }}
    />
  )
}