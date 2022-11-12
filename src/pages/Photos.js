import React from "react";
import styled from "@emotion/styled";

import chelli_fire_elemental from "../data/07d508ab3133db90e4a2b9899e76ff53.jpg";
import mads_thoror from "../data/85db32e7b7501769d03e67eb16f11eee.jpg";
import scar from "../data/480b263b0a9b5c28df90bb906fab7425.jpg";
import aeilr from "../data/8951cef3b30d1a6b9b3aa519cf93f7dd.jpg";
import twitch_jump from "../data/73054a4bfa24adcd06d72767115c3ada.jpg";
import corwyn from "../data/b7521360c113e670836aceff8b6fecd8.jpg";
import thistle_corwyn_fight from "../data/bd6c8fb05d0850a24bca3c82bea75163.jpg";
import group_photo from "../data/cc6264caa47bc808bfe08cb0c971bbd2.jpg";
import full_plate from "../data/eb87749168124b535dff54eb1a31356d.jpg";

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
    width: 80%;
    height: 80%;
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
      <ListImage src={twitch_jump} alt={twitch_jump} />
      <ListImage src={thistle_corwyn_fight} alt={thistle_corwyn_fight} />
      <ListImage src={chelli_fire_elemental}alt={chelli_fire_elemental} />
      <ListImage src={mads_thoror} alt={mads_thoror} />
      <ListImage src={scar} alt={scar} />
      <ListImage src={aeilr} alt={aeilr} />
      <ListImage src={corwyn} alt={corwyn} />
      <ListImage
        src={group_photo}
        alt={group_photo}
      /> 
      <ListImage src={full_plate} alt={full_plate} />
    </Images>
  );
}
export default Photos;