import { block } from 'million/react'
import styled from 'styled-components'

const AboutBlock = block(
  function About() {
    return (
      <StyledAbout id='about'>
        <div className='container full-h'>
          <main>
            <div className='description'>
              <h2>Software Engineer - Frontend Developer</h2>
              <p>
                I'm a passionate frontend developer with a strong understanding of modern web technologies. I enjoy crafting beautiful and functional user interfaces that provide a seamless user
                experience.
              </p>
              <ul className='skills'>
                <li>HTML &amp; CSS (including preprocessors like SASS)</li>
                <li>JavaScript (frameworks like React, Vue.js, etc.)</li>
                <li>Accessibility best practices</li>
                <li>Responsive design principles</li>
                <li>Experience with build tools and version control systems</li>
              </ul>
            </div>
          </main>
        </div>
      </StyledAbout>
    )
  },
  { as: 'section' },
)

const StyledAbout = styled.section`
  scroll-snap-align: end;

  .container > main {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 80px 0px;

    .description {
      color: #333;

      h2 {
        font-size: 2.4rem;
        margin-bottom: 16px;
      }

      p {
        font-size: 1rem;
        line-height: 1.5;
        margin-bottom: 24px;
      }

      .skills {
        list-style: none;
        padding: 0;
        margin: 0;

        li {
          font-size: 0.9rem;
          margin-bottom: 8px;

          &:before {
            content: '•';
            margin-right: 10px;
            color: #999;
          }
        }
      }
    }
  }
`

export default AboutBlock