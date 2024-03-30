import { RefObject, useEffect, useRef, useState } from 'react'
import styled, { StyledComponent } from 'styled-components'
import { block } from 'million/react'

// Firebase
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../firebase'

// React Slick Carousel
import Slider from 'react-slick'

// React Slick Carousel Styles
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

// Types
import { IWorks } from 'types'

const WorksBlock = block(
  function Works() {
    const [data, setData] = useState<IWorks[] | null>(null)

    const sliderWorksRef: RefObject<Slider> = useRef<Slider>(null)

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

    // Get Clients data
    async function getWorks() {
      let list: any = []

      try {
        const querySnapshot = await getDocs(collection(db, 'works'))
        querySnapshot.forEach((doc: any) => {
          list.push(doc?.data())
        })

        setData(list)
      } catch (error) {
        console.log(error)
      }
    }

    useEffect(() => {
      getWorks()
    }, [])

    return (
      <StyledWorks id='works'>
        <div className='container'>
          <main>
            <h2>Works</h2>

            {data && data?.length > 0 && (
              <Slider ref={sliderWorksRef} {...sliderSettings} className='clients_slider'>
                {data?.map((item: IWorks) => (
                  <div className='client-slider' tabIndex={-1} key={item?.id}>
                    <div style={{ background: `url(${item?.image})` }}></div>
                  </div>
                ))}
              </Slider>
            )}
          </main>
        </div>
      </StyledWorks>
    )
  },
  { as: 'section' },
)

const StyledWorks: StyledComponent<'section', any, {}, never> = styled.section`
  .container > main {
    padding: 80px 0px;
    color: #fff;

    h2 {
      text-align: center;
      margin-bottom: 30px;
    }
  }
`

export default WorksBlock