import React from "react";

import * as S from "./styles";

import CheckIcon from "../../assets/check-circle.svg";

function GridColors({ colors = [], setColors }) {
  function handleClick(color) {
    const existsIndex = colors.indexOf(color);

    if (existsIndex !== -1) {
      setColors(() => {
        return colors.filter((item) => item !== color);
      });
    } else {
      setColors((colors) => [...colors, color]);
    }
  }

  return (
    <S.Container>
      <S.Item onClick={() => handleClick("marrom")}>
        <div>
          {colors?.includes("marrom") && <img src={CheckIcon} alt="Checked" />}
        </div>
        <span>Marrom</span>
      </S.Item>
      <S.Item onClick={() => handleClick("vermelho")}>
        <div>
          {colors?.includes("vermelho") && (
            <img src={CheckIcon} alt="Checked" />
          )}
        </div>
        <span>Vermelho</span>
      </S.Item>
      <S.Item onClick={() => handleClick("laranja")}>
        <div>
          {colors?.includes("laranja") && <img src={CheckIcon} alt="Checked" />}
        </div>
        <span>Laranja</span>
      </S.Item>
      <S.Item onClick={() => handleClick("amarelo")}>
        <div>
          {colors?.includes("amarelo") && <img src={CheckIcon} alt="Checked" />}
        </div>
        <span>Amarelo</span>
      </S.Item>
      <S.Item onClick={() => handleClick("verde")}>
        <div>
          {colors?.includes("verde") && <img src={CheckIcon} alt="Checked" />}
        </div>
        <span>Verde</span>
      </S.Item>
      <S.Item onClick={() => handleClick("azul")}>
        <div>
          {colors?.includes("azul") && <img src={CheckIcon} alt="Checked" />}
        </div>
        <span>Azul</span>
      </S.Item>
      <S.Item onClick={() => handleClick("roxo")}>
        <div>
          {colors?.includes("roxo") && <img src={CheckIcon} alt="Checked" />}
        </div>
        <span>Roxo</span>
      </S.Item>
      <S.Item onClick={() => handleClick("rosa")}>
        <div>
          {colors?.includes("rosa") && <img src={CheckIcon} alt="Checked" />}
        </div>
        <span>Rosa</span>
      </S.Item>
      <S.Item onClick={() => handleClick("bege")}>
        <div>
          {colors?.includes("bege") && <img src={CheckIcon} alt="Checked" />}
        </div>
        <span>Bege</span>
      </S.Item>
      <S.Item onClick={() => handleClick("cinza")}>
        <div>
          {colors?.includes("cinza") && <img src={CheckIcon} alt="Checked" />}
        </div>
        <span>Cinza</span>
      </S.Item>
      <S.Item onClick={() => handleClick("preto")}>
        <div>
          {colors?.includes("preto") && <img src={CheckIcon} alt="Checked" />}
        </div>
        <span>Preto</span>
      </S.Item>
      <S.Item onClick={() => handleClick("branco")}>
        <div>
          {colors?.includes("branco") && <img src={CheckIcon} alt="Checked" />}
        </div>
        <span>Branco</span>
      </S.Item>
    </S.Container>
  );
}

export default GridColors;
