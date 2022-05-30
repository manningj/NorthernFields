import styled from "@emotion/styled";
import React from "react";
import logo from "../heraldry.png";

let HomePage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 1em;
  justify-content: space-evenly;
  & p {
    font-size: 2em;
  }
`;
let HeraldryImg = styled.img`
  max-width: 20%;
  max-height: 20%;
`;
let StyledLink = styled.a`
  text-decoration: none;
  color: #30292f;
  padding: 50px;
  font-size: 3em;
  background-color: #4b88a2;
  &:hover {
    background-color: #758e4f;
  }
`;

function Home() {
  return (
    <HomePage>
      <p>Welcome to The Northern Fields: A Winnipeg based LARPing group.</p>
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
