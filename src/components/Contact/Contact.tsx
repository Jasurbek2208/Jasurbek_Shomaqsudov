import React from "react";
import styled from "styled-components";

export default function Contact() {
  function handleSubmit() {}
  return (
    <StyledContact id="contact">
      <div className="container full-h">
        <form onSubmit={handleSubmit}>
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <button type="submit">Send message</button>
        </form>
      </div>
    </StyledContact>
  );
}

const StyledContact = styled.section`
  scroll-snap-align: center;
`;
