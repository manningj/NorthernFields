import styled from "@emotion/styled";
import React from "react";
 
let Paragraph  = styled.p`
width: 50%;
`

let AboutPage = styled.div`
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

function About() {
return <AboutPage>
<Paragraph>Northern Fields is part of Amtgard, an international live action roleplay game, or LARP for short.
With parks in almost every province and state, Amtgard is a free to play, action packed Combat LARP.
Unlike many other LARPS, Amtgard has a martial focus, and a culture that fosters personal growth in leadership, volunteer work, and creative endeavours.
</Paragraph>
<Paragraph>
Northern Fields has been playing Amtgard in Winnipeg for 10 years now, and has been one of the larger LARPing groups in the city for the majority of that time. 
If you want to swing swords, cast spells, or shoot arrows at your friends, all while playing fun games of capture the flag or ring the bell, then Amtgard is the game for you.
Not only are we free to play, we will also lend you weapons until we teach you how to make your own. 
</Paragraph>
<Paragraph>
Come try out one of the most popular LARPS in North America, every Sunday afternoon at Coronation Park in Winnipeg.
</Paragraph>
</AboutPage>
}
export default About;

