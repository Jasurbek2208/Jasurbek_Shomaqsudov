import { useRef, useEffect } from 'react'
import { block } from 'million/react'
import styled, { StyledComponent } from 'styled-components'

const MatrixLoaderBlock = block(
  function MatrixLoader(): JSX.Element {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    let prevWidth = window.innerWidth

    useEffect(() => {
      let animationFrame: NodeJS.Timeout
      let resizeTimeout: NodeJS.Timeout

      const initializeCanvas = () => {
        if (canvasRef.current) {
          const canvas = canvasRef.current
          const ctx = canvas.getContext('2d')

          if (ctx) {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight + 200

            const letters = 'ABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZ'.split('')
            const fontSize = 10
            const columns = canvas.width / fontSize
            const drops: number[] = []

            for (let i = 0; i < columns; i++) {
              drops[i] = 1
            }

            const draw = () => {
              ctx.fillStyle = 'rgba(0, 0, 0, .1)'
              ctx.fillRect(0, 0, canvas.width, canvas.height)

              for (let i = 0; i < drops.length; i++) {
                const text = letters[Math.floor(Math.random() * letters.length)]
                ctx.fillStyle = '#0059ff'
                ctx.fillText(text, i * fontSize, drops[i] * fontSize)
                drops[i]++
                if (drops[i] * fontSize > canvas.height && Math.random() > 0.95) {
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
          if (window.innerWidth !== prevWidth) {
            prevWidth = window.innerWidth
            initializeCanvas()
          }
        }, 400)
      }

      window.addEventListener('resize', handleResize)

      initializeCanvas()

      return () => {
        clearInterval(animationFrame)
        window.removeEventListener('resize', handleResize)
      }
    }, [])

    return (
      <StyledMatrixLoader>
        <canvas ref={canvasRef}></canvas>
      </StyledMatrixLoader>
    )
  },
  { as: 'div' },
)

const StyledMatrixLoader: StyledComponent<'div', any, {}, never> = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: -10;
`
export default MatrixLoaderBlock
