import { block } from 'million/react'
import styled from 'styled-components'

// React map Imports
import { ComposableMap, Geographies, Geography, Marker, Annotation } from 'react-simple-maps'

const MapBlock = block(
  function Map(): JSX.Element {
    return (
      <StyledMap>
        <ComposableMap>
          <Geographies geography='/features.json'>
            {({ geographies }) =>
              geographies?.map((item: any, index: number) => (
                <Geography
                  key={item?.rsmKey || String(index)}
                  geography={item}
                  strokeWidth={0.5}
                  style={{
                    default: {
                      fill: item.id === 'UZB' ? '#E42' : 'transparent',
                      stroke: '#000000',
                    },
                    hover: {
                      fill: 'transparent',
                      stroke: '#000000',
                    },
                    pressed: {
                      fill: '#E42',
                    },
                  }}
                />
              ))
            }
          </Geographies>
          <Marker coordinates={[69.27782177925111, 41.35158489075851]}>
            <circle r={2} fill='#F53' />
          </Marker>
          <Annotation
            subject={[69.27782177925111, 41.35158489075851]}
            dx={-40}
            dy={-10}
            connectorProps={{
              stroke: '#FF5533',
              strokeWidth: 1,
              strokeLinecap: 'round',
            }}>
            <text fontSize={9} fontWeight={600} x='-3' textAnchor='end' alignmentBaseline='middle' fill='#F53'>
              {'Tashkent, Uzbekistan'}
            </text>
          </Annotation>
        </ComposableMap>
      </StyledMap>
    )
  },
  { as: 'div' },
)

const StyledMap = styled.div`
  position: absolute;
  top: -76px;
  right: -100px;
  width: 1600px;

  & * {
    border: none !important;
    outline: none !important;
  }

  @media (max-width: 980px) {
    top: -160px;
    right: -550px;
    width: 2200px;

    text {
      font-size: 7px;
    }
  }

  @media (max-width: 640px) {
    top: -190px;
    right: -550px;
    width: 2200px;

    text {
      font-size: 6px;
    }
  }

  @media (max-width: 400px) {
    top: -180px;
    right: -600px;
  }

  @media (max-width: 350px) {
    right: -630px;
  }

  @media (max-width: 320px) {
    right: -640px;
  }
`

export default MapBlock