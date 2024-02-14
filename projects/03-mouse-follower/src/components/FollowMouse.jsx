import { useEffect, useState } from 'react'

export const FollowMouse = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [enabled, setEnabled] = useState(false)

  // pointer move
  useEffect(() => {
    console.log('efecto', { enabled })
    const handleMove = (event) => {
      const { clientX, clientY } = event
      console.log('handleMove', { clientX, clientY })
      setPosition({ x: clientX, y: clientY })
    }
    if (enabled) window.addEventListener('pointermove', handleMove)

    return () => {
      console.log('cleanup')
      window.removeEventListener('pointermove', handleMove)
    }
    // se ejecuta cada vez que se desmonta el componente o se limpia suscripciones o cambia la dependencia, antes de ejecutar el efecto nuevo
    // si no limpiamos se crean suscripciones cada vez que hacemos click
  }, [enabled])

  // chage body className
  useEffect(() => {
    document.body.classList.toggle('no-cursor', enabled)
    return () => {
      document.body.classList.remove('no-cursor')
    }
  })

  return (
    <div>
      <div style={{
        position: 'absolute',
        backgroundColor: '#09f',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -20,
        top: -20,
        width: 40,
        height: 40,
        transform: `translate(${position.x}px, ${position.y}px)`
      }}
      />
      <h3>Proyecto 3</h3>
      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? 'Activar' : 'Desactivar'} seguir puntero
      </button>
    </div>

  )
}
