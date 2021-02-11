import React from "react";

import LogoAmyi from "../../assets/amyi_logo.png";
import * as S from "./styles";

function Navbar() {
  return (
    <S.Container>
      <img src={LogoAmyi} alt="Amyi Brand" />
    </S.Container>
  );
}

export default Navbar;
