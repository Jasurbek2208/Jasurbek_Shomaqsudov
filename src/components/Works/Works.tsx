import { RefObject, useEffect, useRef, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import styled from 'styled-components'

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

export default function Works() {
  const [data, setData] = useState<IWorks[] | null>(null)

  const [dataRef, inView] = useInView({ threshold: 0.5 })

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
      querySnapshot?.forEach((doc: any) => {
        list?.push(doc?.data())
      })

      setData(list)
    } catch {}
  }

  // Get Works data when it comes into view
  useEffect(() => {
    if (inView && (!data || data?.length === 0)) getWorks()
  }, [inView])

  return (
    <StyledWorks id='works'>
      <div className='container'>
        <main ref={dataRef}>
          <h2>Works</h2>

          {data && data?.length > 0 && (
            <Slider ref={sliderWorksRef} {...sliderSettings} className='clients_slider'>
              {data?.map((item: IWorks) => (
                <div className='client-slider' tabIndex={-1} key={item?.id}>
                  <a href={item?.link} target='_blank' rel='noopener noreferrer'>
                    <div style={{ background: `url(${item?.image})` }}></div>
                  </a>
                </div>
              ))}
            </Slider>
          )}
        </main>
      </div>
    </StyledWorks>
  )
}

const StyledWorks = styled.section`
  .container > main {
    padding: 80px 0px;
    color: #fff;

    h2 {
      text-align: center;
      margin-bottom: 30px;
    }
  }
`