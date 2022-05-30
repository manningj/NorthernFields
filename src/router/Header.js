import React from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import logo from "../heraldry.png";

let SiteTitle = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: space-between;
  width: 100%;
  margin-top: 1em;
`;
let TitleDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: space-evenly;
  width: 100%;
  font-size: 2em;
  /* padding: 0.5em; */
`;
let LinksDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  width: 100%;
  height: 10%;
  padding: 1em;
  justify-content: space-evenly;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: #30292f;
  padding: 5px;
  background-color: #4b88a2;
  &:hover {
    background-color: #758e4f;
  }
`;

let HeraldryImg = styled.img`
  max-width: 2em;
  max-height: 2em;
  /* margin: 0.5em; */
`;

function Header() {
  return (
    <SiteTitle>
      <TitleDiv>
        <HeraldryImg src={logo} alt="logo" />
        Northern Fields
        <HeraldryImg src={logo} alt="logo" />
      </TitleDiv>

      <LinksDiv>
        <StyledLink to="/"> Discord </StyledLink>
        <StyledLink to="/about"> About </StyledLink>
        <StyledLink to="/faq"> FAQ</StyledLink>
        <StyledLink to="/resources"> Resources</StyledLink>
        <StyledLink to="/photos"> Photos</StyledLink>
        <StyledLink to="/calendar"> Calendar</StyledLink>
      </LinksDiv>
    </SiteTitle>
  );
}
export default Header;
