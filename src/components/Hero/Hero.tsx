import styled, { StyledComponent } from 'styled-components'

export default function Hero() {
  return (
    <StyledHero id='hero'>
      <div className='container full-h'>
        <main>
          <div className='description'>
            <h1>Jasurbek Shomaqsudov</h1>
            <h4>Frontend developer</h4>
            <p>Check out the site to learn more about me.</p>
          </div>
          <div className='image'>
            <img src='src/assets/images/illustrations/developer.webp' alt='frontend developer illustrator' decoding='async' loading='lazy' />
          </div>
        </main>
      </div>
    </StyledHero>
  )
}

const StyledHero: StyledComponent<'section', any, {}, never> = styled.section`
  .container > main {
    height: 100dvh;

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

      h4 {
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
        width: 100%;
        position: absolute;
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

        h3 {
          font-size: 1.6rem;
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