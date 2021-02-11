import styled from "styled-components";

import variables from "../../styles/variables";

export const Container = styled.section`
  width: 100%;
  min-height: 100vh;
  background: ${variables.white};
`;

export const PageQuiz = styled.div`
  max-width: 1366px;
  width: 100%;
  margin: 20px auto 0;
  padding: 10px 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const QuestionContainer = styled.div`
  width: 90%;
  margin-bottom: 20px;

  > h1 {
    font-size: 32px;
    text-align: center;
    font-family: "Lora Bold";
    letter-spacing: 1.4px;
    margin-bottom: 20px;
  }
  > p {
    font-family: "Lora Bold";
    padding: 0 10px;
    font-size: 16px;
    text-align: center;
    margin-bottom: 20px;
  }
`;

export const QuestionItem = styled.div`
  margin-bottom: 60px;
  text-align: left;

  > p {
    font-family: "Lora Regular";
    font-size: 18px;
    margin-bottom: 20px;
  }

  > span {
    font-family: "Yaldevi Colombo Medium";
    display: block;
    font-size: 14px;
    letter-spacing: 1.6px;
    margin-bottom: 20px;
    text-align: center;
  }

  .other_answer {
    margin-top: 40px;

    .group {
      margin-bottom: 40px;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;

      > label {
        padding: 0 10px;
        display: block;
        font-family: "Lora Regular";
        font-size: 16px;
        margin-bottom: 20px;
        text-align: center;
      }

      > input[type="text"] {
        border: none;
        padding: 20px;
        text-align: center;
        color: ${variables.black};
        width: 80%;
        margin: 0 auto;
        border-bottom: 1px solid ${variables.input_theme};

        font-family: "Encode Sans Regular";

        ::placeholder {
          color: ${variables.input_theme};
          font-family: "Encode Sans Regular";
        }
      }

      &.group_note {
        > strong {
          font-size: 20px;
          margin-bottom: 20px;
          color: ${variables.gray_medium};
        }

        > input[type="range"] {
          -webkit-appearance: none;
          width: 80%;
          margin: 0 auto;
          height: 1px;
          background: ${variables.dark};
          outline: none;
          opacity: 0.7;
          -webkit-transition: 0.2s;
          transition: opacity 0.2s;

          &::-webkit-slider-thumb {
            -webkit-appearance: none;
            appearance: none;
            width: 25px;
            height: 25px;
            border-radius: 50%;
            background: ${variables.dark};
            cursor: pointer;
          }
          &::-moz-slider-thumb {
            -webkit-appearance: none;
            appearance: none;
            width: 25px;
            height: 25px;
            border-radius: 50%;
            background: ${variables.black};
            cursor: pointer;
          }
        }
      }
    }

    > button {
      margin-top: 20px;
      display: block;
      padding: 10px 30px;
      background: ${variables.medium_gray};
      border: none;
      margin: 0 auto;
      color: #fff;
      text-transform: uppercase;
      letter-spacing: 1.2px;
      font-size: 14px;
      font-family: "Encode Sans Light";
      transition: all 0.2s ease;
      cursor: pointer;

      &:active {
        background: ${variables.black};
      }

      &.dark-btn {
        background: ${variables.dark};
      }

      &:disabled {
        opacity: 0.4;
      }
    }
  }
`;
