import React from "react";
import styled from "styled-components";

// 3D Model
import ModelApp from "../model/Model";

export default function Hero() {
  return (
    <StyledHero id="hero">
      <div className="container full-h">
        <main>
          <div className="description">
            <h1>Frontend developer</h1>
            <h3>Jasurbek Shomaqsudov</h3>
            <p>Check out the site to learn more about me.</p>
          </div>
          <div className="image">
            {/* <img
              src="illustrators/developer.webp"
              alt="frontend developer illustrator"
            /> */}
            <div className="model">
              <ModelApp />
            </div>
          </div>
        </main>
      </div>
    </StyledHero>
  );
}

const StyledHero = styled.section`
  scroll-snap-align: end;

  .container > main {
    padding-top: 250px;

    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 40px;
    row-gap: 0px;

    .description {
      color: #fff;

      h1 {
        font-size: 3rem;
        animation: fadeIn 500ms ease-in-out;
      }

      h3 {
        margin: 12px 0px;
        font-size: 2rem;
        animation: fadeIn 600ms ease-in-out;
      }

      p {
        font-size: 1rem;
        animation: fadeIn 1s ease-in-out;
      }
    }

    .image {
      width: 420px;
      height: 420px;
      position: relative;
      animation: fadeIn 1s ease-in-out;

      .model {
        position: absolute;
        animation: illustratorAnimation 8s infinite;
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
`;
