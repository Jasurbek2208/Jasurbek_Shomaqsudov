import React from "react";
import styled from "styled-components";

// Components
import Button from "../Button/Button";

export default function Navbar() {
  return (
    <StyledNavbar>
      <div className="container">
        <div className="nav">
          <ul>
            <li><a href="#hero">Home</a></li>
            <li><a href="#who">About</a></li>
            <li><a href="#works">Works</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="action">
          <Button content="Get work" />
        </div>
      </div>
    </StyledNavbar>
  );
}

const StyledNavbar = styled.div`
  padding: 10px 0px;

  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;

  color: #fff;
  font-weight: 600;

  animation: fadeInNavbar 400ms ease-in-out;

  & > .container {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .nav {
      margin-top: 14px;

      ul {
        display: flex;
        align-items: flex-start;
        gap: 40px;
        list-style: none;

        li {
          padding: 0px 0px 10px;
          cursor: pointer;

          border-bottom: 3px solid transparent;

          transition: 600ms all;

          &:hover,
          &:active {
            padding: 0px 0px 3px;

            border-bottom: 3px solid #fff;
          }

          a {
            text-decoration: none;
            color: inherit;
          }
        }
      }
    }
  }

  /* ANIMATIONS */
  @keyframes fadeInNavbar {
    from {
      margin-top: -50px;
      opacity: 0;
    }

    to {
      margin-top: 0px;
      opacity: 1;
    }
  }
`;
