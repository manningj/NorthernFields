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
let SocialLinkBar = styled.div`
display: flex;
flex-direction: row;
align-content: center;
width: 100%;
height: 10%;
padding: 1em;
justify-content: space-evenly;`
;
let SocialLink = styled.a`
text-decoration: none;
color: #30292f;
padding: 1%;
font-size: 1em;
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
      <p>We meet every Sunday at noon, in Coronation Park.</p>
      <HeraldryImg src={logo} alt="logo" />
      <StyledLink
        href="https://discord.gg/ynnNdGejKG"
        target="_blank"
        rel="noopener noreferrer"
      >
        JOIN OUR DISCORD
      </StyledLink>
     <SocialLinkBar>
      <SocialLink
        href="https://www.facebook.com/groups/3246392332268526/"
        target="_blank"
        rel="noopener noreferrer">
          Facebook
      </SocialLink>
      </SocialLinkBar>
    </HomePage>
  );
}

export default Home;
