import React from "react";
import styled from "@emotion/styled";

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

function Photos1() {
  return (
    <Images>
      <ListImage
        src={
          "../data/07d508ab3133db90e4a2b9899e76ff53.jpg"
        }
        alt={"Luck Duel"}
      />
      <ListImage
        src={
          "https://lightroom.adobe.com/v2c/spaces/5b9251d6611e4458ad913fc5a6d0d0d2/assets/450370e85dd9d538c02e9d7a6990c307/revisions/4f0a67375edb1c6ffd7232769e6999f0/renditions/5434033fbbf7599c63eca6b301ecb5e2"
        }
        alt={"thistle_aera_battlegame"}
      />
      <ListImage
        src={
          "https://lightroom.adobe.com/v2c/spaces/5b9251d6611e4458ad913fc5a6d0d0d2/assets/148f68bd6561b232b9f0edede6fade13/revisions/1d434e53f165bf6078de4090b9b1a113/renditions/9e0e546c2a7be6c283f4ab0f2fc56997"
        }
        alt={"twitch_rabbit_jump"}
      />
      <ListImage
        src={
          "https://lightroom.adobe.com/v2c/spaces/5b9251d6611e4458ad913fc5a6d0d0d2/assets/22f5c11cf2e8d52f2e3e3e91e59d6ffe/revisions/097340138f232f6638b29c1999534610/renditions/1011bedb2f83abb353e10df8e90fc0ea"
        }
        alt={"corwyn_trin_twitch_battlegame"}
      />
      <ListImage
        src={
          "https://lightroom.adobe.com/v2c/spaces/5b9251d6611e4458ad913fc5a6d0d0d2/assets/48e1a3a6a46b7a0d51ec3d4da9c0c8be/revisions/bd8e3e6906138da905338216b844a51d/renditions/696a978ea0c3afc210bb49e0f951adfe"
        }
        alt={"genet_igorna_duel"}
      />
      <ListImage
        src={
          "https://lightroom.adobe.com/v2c/spaces/5b9251d6611e4458ad913fc5a6d0d0d2/assets/a6974de0f4108eb5931e1a43ed382769/revisions/2099004fd69299c8a6d0c0e9310c5bf9/renditions/2cd1d52de81acba44419cd4caabf155b"
        }
        alt={"goblin_luck_duel"}
      />
      <ListImage
        src={
          "https://lightroom.adobe.com/v2c/spaces/5b9251d6611e4458ad913fc5a6d0d0d2/assets/4312235bd8f7b8e0b8319a21aa859e6b/revisions/65119401eb5b622e96e831d82a2cccc3/renditions/469317ddf474cf39bd8b9804ee226dea"
        }
        alt={"lip_twitch_duel"}
      />
      <ListImage
        src={
          "https://lightroom.adobe.com/v2c/spaces/5b9251d6611e4458ad913fc5a6d0d0d2/assets/10ddbe95b35b6dd015bf378c9d8efe01/revisions/dc28f96047cc4c06235be0977b0f36a7/renditions/3fcd791c77fbd62f615d4a6a91e86f6e"
        }
        alt={"luck_javelin"}
      />
      <ListImage
        src={
          "https://lightroom.adobe.com/v2c/spaces/5b9251d6611e4458ad913fc5a6d0d0d2/assets/3a3cb5b86549336fc51bb724d4a7034b/revisions/ad6a7e3d8d7e2a1a6ffa97144931a7c0/renditions/8b0764b519df924a1315055b78eae9cb"
        }
        alt={"thistle_corwyn_twitch_battlegame"}
      />
      <ListImage
        src={
          "https://lightroom.adobe.com/v2c/spaces/5b9251d6611e4458ad913fc5a6d0d0d2/assets/afa7a1b2a8cd1a0fb75d60cc77298bea/revisions/6266bbef3ae78acbd757f668e8c91680/renditions/7fd1e973c0b5267151ca93594b8acfe8"
        }
        alt={"thistle_cycla_duel"}
      />
      <ListImage
        src={
          "https://lightroom.adobe.com/v2c/spaces/5b9251d6611e4458ad913fc5a6d0d0d2/assets/47c2402a39a2d720f1bad5a1595007fc/revisions/54a0711c2e4006462a865b3013598483/renditions/364b043d0688e68076cdef0d2498cb2d"
        }
        alt={"thistle_jump"}
      />
      <ListImage
        src={
          "https://lightroom.adobe.com/v2c/spaces/5b9251d6611e4458ad913fc5a6d0d0d2/assets/4c74151a939c83516c687fd409cdd394/revisions/e784f80ae54473de47e7d2eeb8a8f0cc/renditions/b71222fc586a541c4086fa2bfcfd3c3d"
        }
        alt={"twitch_chelli_javelin"}
      />
      <ListImage
        src={
          "https://lightroom.adobe.com/v2c/spaces/5b9251d6611e4458ad913fc5a6d0d0d2/assets/41294a0682bab9bfbb9e58f1eeb7922a/revisions/0fff73ae60b3491eefe72e1f49febbda/renditions/35e8f187732a21c0dbfa0402fa05a965"
        }
        alt={"twitch_flail"}
      />
    </Images>
  );
}
export default Photos1;
