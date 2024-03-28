import { useEffect, useRef, useState } from 'react'
import { block } from 'million/react'
import styled from 'styled-components'

// Firebase
import { collection, doc, getDocs, setDoc, deleteDoc } from 'firebase/firestore'
import { db } from '../../firebase'

// React Slick Carousel
import Slider from 'react-slick'

// React Slick Carousel Styles
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

// About Me text
const shortText = `I was born in 2004 in Tashkent, Uzbekistan. I got into programming through my own interests. I enjoy working on more logically complex and interesting projects. My current goal is to
create a large open source project in the future. My formative training at Registan IT encompassed both Foundation and Frontend Development courses, each playing a pivotal role in
shaping my skills. Through the Foundation course, I acquired a robust comprehension of fundamental principles, particularly in C++ and logic. This knowledge serves as a sturdy scaffold
for my endeavors in frontend development, empowering me to craft intuitive and dynamic user interfaces. While my formal education provided a strong foundation, my journey into backend
development took a more self-directed path. Through independent study and real-world projects, I honed my skills in backend development. Immersing myself in practical experiences, I
gained valuable insights into the intricacies of backend systems, particularly in the context of internet-based applications. As I traverse my programming odyssey, I remain committed
to honing my craft and embracing challenges that foster growth. With each project undertaken, I inch closer to realizing my vision of making meaningful contributions to the global
programming community.`

const AboutBlock = block(
  function About() {
    const [clients, setClients] = useState<any | null>(null)

    const sliderRef = useRef<Slider>(null)
    const [currentSlide, setCurrentSlide] = useState<number>(0)

    const sliderSettings = {
      dots: false,
      arrows: false,
      infinite: true,
      speed: 1500,
      swipeToSlide: false,
      slidesToShow: 4,
      slidesToScroll: 1,
      adaptiveHeight: false,
      autoplay: true,
      autoplaySpeed: 2000,
      beforeChange: (current: number, next: number) => {
        setCurrentSlide(next)
      },
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
          },
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 710,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 2,
          },
        },
      ],
    }

    const [expanded, setExpanded] = useState(false)
    const [displayText, setDisplayText] = useState(shortText.substring(0, 550) + '...')

    const toggleExpand = () => {
      setExpanded(!expanded)
      setDisplayText(expanded ? shortText.substring(0, 550) + '...' : shortText)
    }

    // Get Clients data
    async function getClients() {
      let list: any = []

      try {
        const querySnapshot = await getDocs(collection(db, 'portfolio'))
        querySnapshot.forEach((doc: any) => {
          list.push(doc._document)
        })
        setClients(list)
      } catch (error) {
        console.log(error)
      } finally {
      }
    }

    useEffect(() => {
      getClients()
    }, [])

    return (
      <StyledAbout id='about'>
        <div className='container full-h'>
          <main>
            {/* About block */}
            <div className='about'>
              <h2>About Me</h2>
              <p></p>
              <p>{displayText}</p>
              <button className='learn-more-btn' onClick={toggleExpand}>
                {expanded ? 'Show Less' : 'Learn More'}
              </button>
            </div>

            {/* Skills block */}
            <div className='skills'>
              <h2>Skills</h2>
              <ul>
                <li>HTML &amp; CSS (including preprocessors like SASS)</li>
                <li>JavaScript (frameworks like React, Vue.js, etc.)</li>
                <li>Accessibility best practices</li>
                <li>Responsive design principles</li>
                <li>Experience with build tools and version control systems</li>
              </ul>
            </div>

            {/* Clients block */}
            <div className='cilents'>
              <h2>Happy Clients</h2>

              <Slider ref={sliderRef} {...sliderSettings} className='clients_slider news_slider slick-dotted'>
                {/* {clients?.map((client: string, index: number) => (
                  <div
                    className='news_item slick-slide client-slider'
                    data-slick-index={index}
                    aria-hidden={currentSlide === index ? false : true}
                    tabIndex={-1}
                    aria-describedby={`slick-slide0${index}`}
                    key={client}>
                    <div style={{ backgroundImage: `url(${getImageURL(client)})` }}></div>
                  </div>
                ))} */}
              </Slider>
            </div>
          </main>
        </div>
      </StyledAbout>
    )
  },
  { as: 'section' },
)

const StyledAbout = styled.section`
  .container > main {
    padding: 80px 0px;
    color: #fff;

    .about {
      text-align: center;
      margin-bottom: 24px;

      p {
        margin-top: 30px;
        font-size: 1rem;
        line-height: 2;
      }

      .learn-more-btn {
        cursor: pointer;
        padding: 10px 20px;
        color: white;
        border-radius: 5px;
        background: transparent;
        border: 2px solid #0059ff;
      }

      .learn-more-btn:hover {
      }
    }

    .skills {
      margin-top: 120px;

      h2 {
        text-align: center;
      }

      ul {
        margin-top: 30px;
        list-style: none;

        li {
          font-size: 0.9rem;
          margin-bottom: 8px;

          &:before {
            content: '•';
            margin-right: 10px;
            color: #fff;
          }
        }
      }
    }

    .cilents {
      margin-top: 120px;

      h2 {
        text-align: center;
      }
    }
  }
`

export default AboutBlock