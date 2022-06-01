import styled from "@emotion/styled";
import React from "react";
import logo from "../data/heraldry.png";

let HomePage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 1%;
  justify-content: space-evenly;
  & p {
    font-size: 1.5em;
  }
`;
let HeraldryImg = styled.img`
  max-width: 15%;
  max-height: 15%;
  margin-bottom: 1%;
`;
let StyledLink = styled.a`
  text-decoration: none;
  color: #30292f;
  padding: 3%;
  font-size: 3em;
  background-color: #4b88a2;
  &:hover {
    background-color: #758e4f;
  }
`;

function Home() {
  return (
    <HomePage>
      <p>
        We are a free to play, action packed combat LARP based in Winnipeg,
        Manitoba.
      </p>
      <p>We meet every Sunday at Noon, in Coronation Park.</p>
      <HeraldryImg src={logo} alt="logo" />
      <StyledLink
        href="https://discord.gg/ynnNdGejKG"
        target="_blank"
        rel="noopener noreferrer"
      >
        JOIN OUR DISCORD
      </StyledLink>
    </HomePage>
  );
}

export default Home;
