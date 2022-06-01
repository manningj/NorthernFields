import React from "react";
import styled from "@emotion/styled";

import corwyn_trin_twitch_battlegame from "../data/corwyn_trin_twitch_battlegame.jpg";
import genet_igorna_duel from "../data/genet_igorna_duel.jpg";
import goblin_luck_duel from "../data/goblin_luck_duel.jpg";
import lip_twitch_duel from "../data/lip_twitch_duel.jpg";
import luck_duel from "../data/luck_duel.jpg";
import luck_javelin from "../data/luck_javelin.jpg";
import thistle_aera_battlegame from "../data/thistle_aera_battlegame.jpg";
import thistle_corwyn_twitch_battlegame from "../data/thistle_corwyn_twitch_battlegame.jpg";
import thistle_cycla_duel from "../data/thistle_cycla_duel.jpg";
import thistle_jump from "../data/thistle_jump.jpg";
import twitch_chelli_javelin from "../data/twitch_chelli_javelin.jpg";
import twitch_flail from "../data/twitch_flail.jpg";
import twitch_rabbit_jump from "../data/twitch_rabbit_jump.jpg";

let Images = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
let Image = styled.li`
  display: flex;
  justify-content: center;
  margin-top: 2%;
  & img {
    width: 40%;
    height: 40%;
  }
`;
function ListImage({ src, alt }) {
  return (
    <Image>
      <img src={src} alt={alt}></img>
    </Image>
  );
}

function Photos() {
  return (
    <Images>
      <ListImage src={luck_duel} alt={luck_duel} />
      <ListImage src={thistle_aera_battlegame} alt={thistle_aera_battlegame} />
      <ListImage src={twitch_rabbit_jump} alt={twitch_rabbit_jump} />
      <ListImage
        src={corwyn_trin_twitch_battlegame}
        alt={corwyn_trin_twitch_battlegame}
      />
      <ListImage src={genet_igorna_duel} alt={genet_igorna_duel} />
      <ListImage src={goblin_luck_duel} alt={goblin_luck_duel} />
      <ListImage src={lip_twitch_duel} alt={lip_twitch_duel} />
      <ListImage src={luck_javelin} alt={luck_javelin} />
      <ListImage
        src={thistle_corwyn_twitch_battlegame}
        alt={thistle_corwyn_twitch_battlegame}
      />
      <ListImage src={thistle_cycla_duel} alt={thistle_cycla_duel} />
      <ListImage src={thistle_jump} alt={thistle_jump} />
      <ListImage src={twitch_chelli_javelin} alt={twitch_chelli_javelin} />
      <ListImage src={twitch_flail} alt={twitch_flail} />
    </Images>
  );
}
export default Photos;
