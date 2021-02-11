import styled from "styled-components";
import variables from "../../styles/variables";

export const Container = styled.section`
  width: 100%;
  min-height: 100vh;
  background: ${variables.white};
`;

export const PageRanking = styled.div`
  max-width: 1366px;
  width: 100%;
  margin: 20px auto 0;
  padding: 10px 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > h1 {
    text-align: center;
    font-size: 32px;
    font-family: "Lora Bold";
    letter-spacing: 1.4px;
    color: ${variables.black};
  }

  > p {
    margin-top: 20px;
    text-align: center;
    line-height: 32px;
    font-size: 14px;
    font-family: "Encode Sans Light";
  }
`;

export const Perfums = styled.div``;

export const Item = styled.div`
  input[type="radio"] {
    filter: grayscale(1);
    cursor: pointer;
  }

  .image_container {
    margin: 40px 0;
    padding: 0 10px;
    width: 100%;
    display: flex;
    position: relative;
    justify-content: center;

    p {
      font-size: 48px;
      color: ${variables.dark_gray};
      font-family: "Lora Bold";
    }
    img {
      max-width: 180px;
      width: 100%;
    }
  }
  .description {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    font-size: 14px;

    > strong {
      font-family: "Lora Bold";
      font-size: 18px;
    }
    > p {
      font-family: "Encode Sans Light";
      letter-spacing: 1.4px;
      text-align: center;
    }
    *:not(:first-child) {
      margin-top: 10px;
    }
  }

  .group {
    max-width: 120px;
    margin: 60px auto;

    display: flex;
    align-items: center;

    label {
      margin-left: 10px;
      cursor: pointer;
      font-size: 18px;
      font-family: "Lora Regular";
    }
  }
`;

export const Actions = styled.div`
  margin-top: 40px;
  margin-bottom: 20px;

  display: flex;
  align-items: center;
  justify-content: center;

  button + button {
    margin-left: 10px;
  }

  button {
    padding: 0 8px;
    min-height: 60px;

    background: ${variables.dark};
    color: ${variables.white};
    text-transform: uppercase;

    border: none;
    font-family: "Encode Sans Light";
    transition: all 0.2s ease;
    cursor: pointer;

    &:active {
      background: ${variables.black};
    }
    &:disabled {
      opacity: 0.4;
    }
  }
`;
