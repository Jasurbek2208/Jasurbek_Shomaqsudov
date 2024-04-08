import { useRef, useEffect, RefObject } from 'react'
import styled from 'styled-components'

export default function MatrixLoader(): JSX.Element {
  const canvasRef: RefObject<HTMLCanvasElement> = useRef<HTMLCanvasElement>(null)
  let prevWidth: number = window?.innerWidth

  useEffect(() => {
    let animationFrame: NodeJS.Timeout
    let resizeTimeout: NodeJS.Timeout

    const initializeCanvas: () => void = () => {
      if (canvasRef?.current) {
        const canvas: HTMLCanvasElement = canvasRef.current
        const ctx: CanvasRenderingContext2D | null = canvas.getContext('2d')

        if (ctx) {
          canvas.width = window?.innerWidth
          canvas.height = window?.innerHeight + 200

          const letters: string[] = 'ABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZ'?.split('')
          const fontSize: number = 10
          const columns: number = canvas?.width / fontSize
          const drops: number[] = []

          for (let i: number = 0; i < columns; i++) {
            drops[i] = 1
          }

          const draw = () => {
            ctx.fillStyle = 'rgba(0, 0, 0, .1)'
            ctx?.fillRect(0, 0, canvas?.width, canvas?.height)

            for (let i: number = 0; i < drops?.length; i++) {
              const text: string = letters[Math?.floor(Math?.random() * letters?.length)]
              ctx.fillStyle = '#0059ff'
              ctx?.fillText(text, i * fontSize, drops[i] * fontSize)
              drops[i]++
              if (drops[i] * fontSize > canvas?.height && Math?.random() > 0.95) {
                drops[i] = 0
              }
            }
          }

          draw()

          animationFrame = setInterval(draw, 66)
        }
      }
    }

    const handleResize = () => {
      clearTimeout(resizeTimeout)
      resizeTimeout = setTimeout(() => {
        if (window?.innerWidth !== prevWidth) {
          prevWidth = window?.innerWidth
          initializeCanvas()
        }
      }, 400)
    }

    window?.addEventListener('resize', handleResize)

    setTimeout(() => {
      initializeCanvas()
    }, 500)

    return () => {
      clearInterval(animationFrame)
      window?.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <StyledMatrixLoader>
      <canvas ref={canvasRef}></canvas>
    </StyledMatrixLoader>
  )
}

const StyledMatrixLoader = styled.div`
  position: fixed;
  inset: 0px;
  z-index: -10;
  height: 100dvh;
  min-height: 100dvh;
  max-height: 100dvh;
  background: #141e30c0 !important;
  background: -webkit-linear-gradient(to right, #243b55ab, #141e30ab) !important;
  background: linear-gradient(to right, #243b55ab, #141e30ab) !important;
`