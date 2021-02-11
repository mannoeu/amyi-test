import styled from "styled-components";
import variables from "../../styles/variables";

export const Container = styled.nav`
  max-width: 1366px;
  width: 96%;
  margin: 0 auto;
  padding: 10px 30px;
  display: flex;
  align-items: center;
  min-height: 50px;
  border-bottom: 2px solid ${variables.black};

  > img {
    max-width: 80px;
  }
`;
