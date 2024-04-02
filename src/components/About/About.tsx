import { RefObject, useEffect, useRef, useState } from 'react'
import styled, { StyledComponent } from 'styled-components'
import { block } from 'million/react'
import { v4 } from 'uuid'

// Firebase
import { collection, getDocs, addDoc } from 'firebase/firestore'
import { db } from '../../firebase'

// React Slick Carousel
import Slider from 'react-slick'

// React Slick Carousel Styles
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

// Components
import { Button } from 'components'

// Types
import { IClient } from 'types'

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
    const [clients, setClients] = useState<IClient[] | null>(null)
    const [skills, setSkills] = useState<IClient[] | null>(null)

    const sliderSkillsRef: RefObject<Slider> = useRef<Slider>(null)
    const sliderClientsRef: RefObject<Slider> = useRef<Slider>(null)

    const sliderSettings = {
      dots: false,
      arrows: false,
      infinite: !true,
      speed: 1500,
      swipeToSlide: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      adaptiveHeight: true,
      autoplay: true,
      autoplaySpeed: 2000,
      responsive: [
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
      ],
    }

    const [expanded, setExpanded] = useState(false)
    const [displayText, setDisplayText] = useState(shortText.substring(0, 550) + '...')

    const toggleExpand = () => {
      setExpanded(!expanded)
      setDisplayText(expanded ? shortText.substring(0, 550) + '...' : shortText)
    }

    // Get Skills data
    async function getSkills() {
      let list: any = []

      try {
        const querySnapshot = await getDocs(collection(db, 'skills'))
        querySnapshot.forEach((doc: any) => {
          list.push(doc?.data())
        })

        setSkills(list)
      } catch (error) {
        console.log(error)
      }
    }

    // Get Clients data
    async function getClients() {
      let list: any = []

      try {
        const querySnapshot = await getDocs(collection(db, 'clients'))
        querySnapshot.forEach((doc: any) => {
          list.push(doc?.data())
        })

        setClients(list)
      } catch (error) {
        console.log(error)
      }
    }

    async function handleAdd() {
      try {
        const res = await addDoc(collection(db, 'clients'), {
          id: v4(),
          title: 'Flakon.uz',
          image: 'https://firebasestorage.googleapis.com/v0/b/shomaqsudovuzdb.appspot.com/o/flakonuzlogo.png?alt=media&token=337eb589-e9c4-4115-b7cd-0f93251de661',
        })

        console.log(res)
      } catch (error) {
        console.log(error)
      }
    }

    useEffect(() => {
      getSkills()
      getClients()
    }, [])

    return (
      <StyledAbout id='about'>
        <div className='container'>
          <main>
            {/* About block */}
            <div className='about'>
              <h2>About Me</h2>
              <p></p>
              <p>{displayText}</p>
              <Button content={expanded ? 'Show Less' : 'Learn More'} classname='not-full' onClick={toggleExpand} />
            </div>

            {/* Skills block */}
            <div className='skills'>
              <h2>Skills</h2>

              {skills && skills?.length > 0 && (
                <Slider ref={sliderSkillsRef} {...sliderSettings} className='clients_slider'>
                  {skills?.map((skill: IClient) => (
                    <div className='client-slider' tabIndex={-1} key={skill?.id}>
                      <div style={{ background: `url(${skill?.image})` }}></div>
                    </div>
                  ))}
                </Slider>
              )}
            </div>

            {/* Clients block */}
            <div className='clients'>
              <h2>Happy Clients</h2>

              {clients && clients?.length > 0 && (
                <Slider ref={sliderClientsRef} {...sliderSettings} className='clients_slider'>
                  {clients?.map((client: IClient) => (
                    <div className='client-slider' tabIndex={-1} key={client?.id}>
                      <a href={client?.link} target='_blank' rel='noopener noreferrer'>
                        <div style={{ background: `url(${client?.image})` }}></div>
                      </a>
                    </div>
                  ))}
                </Slider>
              )}
            </div>
          </main>
        </div>
      </StyledAbout>
    )
  },
  { as: 'section' },
)

const StyledAbout: StyledComponent<'section', any, {}, never> = styled.section`
  scroll-snap-align: center;

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
    }

    .skills {
      margin-top: 160px;

      h2 {
        text-align: center;
        margin-bottom: 30px;
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

    .clients {
      margin-top: 160px;

      h2 {
        text-align: center;
        margin-bottom: 30px;
      }
    }

    .skills,
    .clients {
      .clients_slider {
        .client-slider {
          padding: 0 28px !important;
          width: 100% !important;
          height: 120px !important;

          div {
            width: 100% !important;
            height: 100% !important;
            background-size: contain !important;
            background-position: center !important;
            background-repeat: no-repeat !important;
          }
        }
      }
    }
  }
`

export default AboutBlock