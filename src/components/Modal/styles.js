import styled from "styled-components";
import variables from "../../styles/variables";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  display: ${(props) => (props.open ? "flex" : "none")};
  justify-content: center;
`;

export const ModalContent = styled.div`
  margin-top: 30px;
  max-width: 300px;
  width: 96%;
  min-height: 300px;
  height: max-content;
  padding: 40px 20px;

  background: #fff;

  display: flex;
  flex-direction: column;
  align-items: center;

  > header {
    text-align: center;
    margin-bottom: 20px;

    > p {
      font-family: "Encode Sans Regular";
      font-size: 16px;
      line-height: 32px;
    }

    > strong {
      font-family: "Lora Bold";
      display: block;
      line-height: 32px;
      font-size: 18px;
      max-width: 180px;
    }
  }

  > p {
    max-width: 180px;
    text-align: center;
    font-family: "Encode Sans Regular";
    font-size: 16px;
    line-height: 22px;
  }
`;

export const Actions = styled.div`
  margin-top: 40px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    width: 100%;
    padding: 10px;
    border: 1px solid ${variables.dark};
    font-family: "Encode Sans Regular";
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 1.4px;
    cursor: pointer;

    transition: all 0.2s ease;
  }

  button.cancel {
    background: ${variables.white};
    color: ${variables.dark};
  }
  button.confirm {
    background: ${variables.dark};
    color: ${variables.white};
  }

  button:active {
    background: ${variables.black};
    color: ${variables.white};
  }
`;

export const Confirm = styled.div`
  display: grid;
  place-items: center;

  p {
    font-family: "Encode Sans Regular";
    max-width: 190px;
  }
`;
