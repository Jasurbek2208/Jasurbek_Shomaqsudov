import React from "react";

// React map Imports
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Annotation,
} from "../../../node_modules/react-simple-maps/dist/index";

// Style Import
import styled from "styled-components";

export default function Map() {
  return (
    <StyledMap>
      <ComposableMap>
        <Geographies geography="/features.json">
          {({ geographies }) =>
            geographies.map((geo) => {
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  strokeWidth={.5}
                  style={{
                    default: {
                      fill: geo.id === "UZB" ? "#E42" : "transparent",
                      stroke: "#000000",
                    },
                    hover: {
                      fill: "transparent",
                      stroke: "#000000",
                    },
                    pressed: {
                      fill: "#E42",
                    },
                  }}
                />
              );
            })
          }
        </Geographies>
        <Marker coordinates={[69.27782177925111, 41.35158489075851]}>
          <circle r={2} fill="#F53" />
        </Marker>
        <Annotation
          subject={[69.27782177925111, 41.35158489075851]}
          dx={-40}
          dy={-10}
          connectorProps={{
            stroke: "#FF5533",
            strokeWidth: 1,
            strokeLinecap: "round",
          }}
        >
          <text
            fontSize={9}
            fontWeight={600}
            x="-3"
            textAnchor="end"
            alignmentBaseline="middle"
            fill="#F53"
          >
            {"Tashkent, Uzbekistan"}
          </text>
        </Annotation>
      </ComposableMap>
    </StyledMap>
  );
}

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
`;
