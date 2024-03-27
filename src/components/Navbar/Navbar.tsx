import { block } from 'million/react'
import { useEffect, useState } from 'react'
import styled from 'styled-components'

// Components
import { Button } from 'components'

const NavbarBlock = block(
  function Navbar(): JSX.Element {
    const [menuOpen, setMenuOpen] = useState<Boolean>(false)
    const [navItems, setNavItems] = useState<Boolean>(false)
    const [renderCount, setRenderCount] = useState<number>(0)

    useEffect(() => {
      setRenderCount((p: number) => ++p)
    }, [menuOpen])

    useEffect(() => {
      if (renderCount > 2) {
        menuOpen ? setNavItems(false) : setNavItems(true)
      }
    }, [renderCount])

    return (
      <StyledNavbar>
        <div className={'menubar-modal' + (menuOpen ? ' open' : ' close')}></div>

        <div className='container'>
          <div className={'nav' + (menuOpen ? ' open' : navItems ? ' close' : '')}>
            <ul>
              <li>
                <a href='#hero' onClick={() => setMenuOpen((p) => !p)}>
                  Home
                </a>
              </li>
              <li>
                <a href='#about' onClick={() => setMenuOpen((p) => !p)}>
                  About
                </a>
              </li>
              <li>
                <a href='#works' onClick={() => setMenuOpen((p) => !p)}>
                  Works
                </a>
              </li>
              <li>
                <a href='#contact' onClick={() => setMenuOpen((p) => !p)}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className={'mobile-menu' + (menuOpen ? ' On' : '')} onClick={() => setMenuOpen((p) => !p)}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className='action'>
            <Button content='Send Order' animatedBtn={true} />
          </div>
        </div>
      </StyledNavbar>
    )
  },
  { as: 'nav' },
)

const StyledNavbar = styled.nav`
  padding: 10px 0px;

  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;

  color: #fff;
  font-weight: 600;

  background: #141e30;
  background: -webkit-linear-gradient(to right, #243b55, #141e30);
  background: linear-gradient(to right, #243b55, #141e30);

  animation: fadeInNavbar 400ms ease-in-out;
  z-index: 3;

  & > .container {
    display: flex;
    justify-content: space-between;

    .nav {
      margin-top: 14px;

      ul {
        display: flex;
        align-items: flex-start;
        gap: 40px;
        list-style: none;

        li {
          cursor: pointer;

          a {
            padding: 0px 0px 10px;
            text-decoration: none;
            color: inherit;

            border-bottom: 3px solid transparent;

            transition: 600ms all;

            &:hover,
            &:focus {
              outline: none;
              padding: 0px 0px 3px;

              border-bottom: 3px solid #fff;
            }
          }
        }
      }
    }

    .action {
      width: 110px;
    }

    .mobile-menu {
      display: none;
    }
  }

  @media (max-width: 560px) {
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
      z-index: 100;

      .nav {
        position: absolute;
        top: 0;
        left: 0;

        margin: 0px;

        width: 100%;
        height: 100vh;

        ul {
          padding: 10px 16px;
          height: 100vh;

          flex-direction: column;
          justify-content: center;
          align-items: center;

          font-size: 1.5rem;

          li {
            a {
              &:hover,
              &:focus {
                padding: 0px 0px 10px;

                border-bottom: 3px solid #fff;
              }
            }
          }
        }

        display: none;

        &.open {
          display: block;

          animation: animatedOpenMenu 1400ms ease-in-out;
        }

        &.close {
          display: block;
          animation: animatedCloseMenuItems 200ms ease-in-out forwards;
        }
      }

      .mobile-menu {
        cursor: pointer;
        display: block;
        position: relative;

        width: 35px;
        height: 24px;

        span {
          position: absolute;
          width: 100%;
          border: 2px solid rgba(226, 226, 226, 0.555);
          transition: 0.6s;

          &:nth-of-type(1) {
            left: 0px;
          }

          &:nth-of-type(2) {
            top: 10px;
          }

          &:nth-of-type(3) {
            top: 20px;
            right: 0px;
          }

          &:nth-of-type(4) {
            top: -200px;
            left: -120px;

            width: 35px;
            transform: rotate(50deg);
            transition: 0.3s ease-in;
          }
        }

        &.On {
          span:nth-of-type(1) {
            left: -60px;
          }

          span:nth-of-type(2) {
            transform: rotate(-50deg);
          }

          span:nth-of-type(3) {
            right: -200vw;
          }

          span:nth-of-type(4) {
            top: 10px;
            left: 0px;
          }
        }
      }
    }

    .menubar-modal {
      content: '';
      position: fixed;
      top: 0;
      left: 0;

      &.open {
        width: 100%;
        height: 100vh;
        background: #141e30;
        background: -webkit-linear-gradient(to right, #243b55, #141e30);
        background: linear-gradient(to right, #243b55, #141e30);

        animation: animatedOpenMenu 1000ms ease-in-out;
      }

      &.close {
        animation: animatedCloseMenu 1000ms ease-in-out forwards;
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

  @keyframes animatedOpenMenu {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  @keyframes animatedCloseMenu {
    from {
      width: 100vw;
      height: 100vh;
      background: #141e30;
      background: -webkit-linear-gradient(to right, #243b55, #141e30);
      background: linear-gradient(to right, #243b55, #141e30);
      opacity: 1;
    }

    to {
      opacity: 0;
      display: none;
    }
  }

  @keyframes animatedCloseMenuItems {
    0% {
      opacity: 1;
    }

    99% {
      left: 0px;
      transform: scale(10);
      opacity: 0;
      display: none;
    }

    100% {
      left: -1000px;
      transform: scale(0);
      opacity: 0;
      display: none;
    }
  }
`

export default NavbarBlock