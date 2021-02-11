import React from "react";
import { useHistory } from "react-router-dom";

import * as S from "./styles";
import perfums from "../../data";

function Modal({ visible, setVisibile, choice }) {
  const history = useHistory();
  const [confirm, setConfirm] = React.useState(false);

  function confirmChoice() {
    setConfirm(true);

    setTimeout(() => {
      localStorage.removeItem("step0");
      localStorage.removeItem("step1");
      localStorage.removeItem("step2");

      history.push("/perfum/quiz/0");
    }, 1800);
  }

  return (
    <S.Container open={visible}>
      <S.ModalContent>
        {!confirm ? (
          <>
            <header>
              <p>Você escolheu o</p>
              <strong>
                {perfums[choice]?.name} - {perfums[choice]?.composition}
              </strong>
            </header>

            <p>Você confirma a sua escolha?</p>
            <S.Actions>
              <button className="cancel" onClick={setVisibile}>
                Não
              </button>
              <button className="confirm" onClick={confirmChoice}>
                Sim
              </button>
            </S.Actions>
          </>
        ) : (
          <S.Confirm>
            <p>Parabéns, você confirmou o seu perfume :)</p>
            <p>Aguarde, iremos te levar para o início!</p>
            <S.Actions>
              <button className="cancel" disabled={true}>
                Aguarde
              </button>
            </S.Actions>
          </S.Confirm>
        )}
      </S.ModalContent>
    </S.Container>
  );
}

export default Modal;
