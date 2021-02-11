import styled from "styled-components";

import variables from "../../styles/variables";

export const Container = styled.div`
  display: grid;
  max-width: 300px;
  grid-template-columns: repeat(auto-fit, minmax(64px, 1fr));
  grid-gap: 5px;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;

  span {
    font-size: 12px;
    letter-spacing: 1.4px;
    text-align: center;
    display: block;
  }

  div {
    margin-bottom: 5px;
    width: 64px;
    height: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &:nth-child(1) {
    > div {
      background: ${variables.brown};
    }
  }
  &:nth-child(2) {
    > div {
      background: ${variables.red};
    }
  }
  &:nth-child(3) {
    > div {
      background: ${variables.orange};
    }
  }
  &:nth-child(4) {
    > div {
      background: ${variables.yellow};
    }
  }
  &:nth-child(5) {
    > div {
      background: ${variables.green};
    }
  }
  &:nth-child(6) {
    > div {
      background: ${variables.blue};
    }
  }
  &:nth-child(7) {
    > div {
      background: ${variables.purple};
    }
  }
  &:nth-child(8) {
    > div {
      background: ${variables.pink};
    }
  }
  &:nth-child(9) {
    > div {
      background: ${variables.beige};
    }
  }
  &:nth-child(10) {
    > div {
      background: ${variables.gray};
    }
  }
  &:nth-child(11) {
    > div {
      background: ${variables.black};
    }
  }
  &:nth-child(12) {
    > div {
      background: ${variables.white};
    }
  }

  cursor: pointer;
`;
