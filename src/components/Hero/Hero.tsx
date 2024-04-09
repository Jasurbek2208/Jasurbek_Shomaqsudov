import styled from 'styled-components'
import heroImage from 'assets/images/illustrations/developer.webp'

export default function Hero() {

  return (
    <StyledHero id='hero'>
      <div className='container'>
        <main>
          <div className='description'>
            <h1>Jasurbek Shomaqsudov</h1>
            <h2>Frontend developer</h2>
            <p>Check out the site to learn more about me.</p>
          </div>
          <div className='image'>
            <img src={heroImage} alt='frontend developer illustrator' decoding='async' loading='lazy' width='300' height='300' />
          </div>
        </main>
      </div>
    </StyledHero>
  )
}

const StyledHero = styled.section`
  .container > main {
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;

    gap: 40px;
    row-gap: 0px;

    .description {
      color: #fff;

      h1 {
        font-size: 2.9rem;
        animation: fadeIn 500ms ease-in-out;
        will-change: margin-left, opacity;
      }

      h2 {
        margin: 14px 0px;
        font-size: 1.5rem;
        animation: fadeIn 600ms ease-in-out;
        will-change: margin-left, opacity;
      }

      p {
        font-size: 1rem;
        animation: fadeIn 1s ease-in-out;
        will-change: margin-left, opacity;
      }
    }

    .image {
      width: 420px;
      height: 420px;
      position: relative;
      animation: fadeIn 1s ease-in-out;
      will-change: margin-left, opacity;

      img {
        width: 100% !important;
        height: auto !important;
        position: absolute;
        image-rendering: optimizeQuality;
        animation: illustratorAnimation 8s infinite;
        will-change: transform;
        z-index: 1;
      }
    }

    @media (max-width: 940px) {
      .description {
        h1 {
          font-size: 2.4rem;
        }

        h2 {
          font-size: 1.3rem;
        }

        p {
          font-size: 0.8rem;
        }
      }

      .image {
        width: 300px;
        height: 300px;

        img {
          animation: illustratorAnimation 10s infinite;
        }
      }
    }

    @media (max-width: 789px) {
      padding-top: 160px;

      .image {
        margin-top: -140px;
      }
    }
  }

  /* ANIMATIONS */
  @keyframes fadeIn {
    from {
      margin-left: -50px;
      opacity: 0;
    }
    to {
      margin-left: 0px;
      opacity: 1;
    }
  }

  @keyframes illustratorAnimation {
    0% {
      transform: scale(1);
    }

    50% {
      transform: scale(1.12);
    }

    100% {
      transform: scale(1);
    }
  }
`