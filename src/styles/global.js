import { createGlobalStyle } from "styled-components";

import EncodeSansBlack from "../assets/fonts/EncodeSansBlack.ttf";
import EncodeSansBold from "../assets/fonts/EncodeSansBold.ttf";
import EncodeSansExtraBold from "../assets/fonts/EncodeSansExtraBold.ttf";
import EncodeSansExtraLight from "../assets/fonts/EncodeSansExtraLight.ttf";
import EncodeSansLight from "../assets/fonts/EncodeSansLight.ttf";
import EncodeSansMedium from "../assets/fonts/EncodeSansMedium.ttf";
import EncodeSansRegular from "../assets/fonts/EncodeSansRegular.ttf";
import EncodeSansSemiBold from "../assets/fonts/EncodeSansSemiBold.ttf";
import EncodeSansThin from "../assets/fonts/EncodeSansThin.ttf";

import LoraBold from "../assets/fonts/LoraBold.ttf";
import LoraBoldItalic from "../assets/fonts/LoraBoldItalic.ttf";
import LoraItalic from "../assets/fonts/LoraItalic.ttf";
import LoraRegular from "../assets/fonts/LoraRegular.ttf";

import YaldeviColomboRegular from "../assets/fonts/yaldevicolomboregular.ttf";
import YaldeviColomboMedium from "../assets/fonts/yaldevicolombomedium.ttf";
import YaldeviColomboSemiBold from "../assets/fonts/yaldevicolombosemibold.ttf";

import variables from "./variables";

const GlobalStyle = createGlobalStyle`
  
* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

@font-face {
  font-family: "Encode Sans Black";
  src: url(${EncodeSansBlack});
}

@font-face {
  font-family: "Encode Sans Bold";
  src: url(${EncodeSansBold});
}

@font-face {
  font-family: "Encode Sans Extra Bold";
  src: url(${EncodeSansExtraBold});
}

@font-face {
  font-family: "Encode Sans Extra Light";
  src: url(${EncodeSansExtraLight});
}

@font-face {
  font-family: "Encode Sans Light";
  src: url(${EncodeSansLight});
}

@font-face {
  font-family: "Encode Sans Medium";
  src: url(${EncodeSansMedium});
}

@font-face {
  font-family: "Encode Sans Regular";
  src: url(${EncodeSansRegular});
}

@font-face {
  font-family: "Encode Sans Semi Bold";
  src: url(${EncodeSansSemiBold});
}

@font-face {
  font-family: "Encode Sans Thin";
  src: url(${EncodeSansThin});
}

@font-face {
  font-family: "Lora Bold";
  src: url(${LoraBold});
}

@font-face {
  font-family: "Lora Bold Italic";
  src: url(${LoraBoldItalic});
}

@font-face {
  font-family: "Lora Italic";
  src: url(${LoraItalic});
}

@font-face {
  font-family: "Lora Regular";
  src: url(${LoraRegular});
}

@font-face {
  font-family: "Yaldevi Colombo Regular";
  src: url(${YaldeviColomboRegular});
}

@font-face {
  font-family: "Yaldevi Colombo Medium";
  src: url(${YaldeviColomboMedium});
}

@font-face {
  font-family: "Yaldevi Colombo Semi Bold";
  src: url(${YaldeviColomboSemiBold});
}


#root,
body {
  width: 100%;
  font-family: "Lora Regular";
  color: ${variables.black};
}

.main__root {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

`;

export default GlobalStyle;
