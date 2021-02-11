import React from "react";

import perfums from "../../data";
import Modal from "../../components/Modal";

import * as S from "./styles";

function Ranking() {
  const [podium, setPodium] = React.useState([]);
  const [choice, setChoice] = React.useState(-1);

  const [visible, setVisibile] = React.useState(false);
  const toggleVisibility = React.useCallback(() => setVisibile(!visible), [
    visible,
  ]);

  React.useEffect(() => {
    const step0 = JSON.parse(localStorage.getItem("step0"));
    const step1 = JSON.parse(localStorage.getItem("step1"));
    const step2 = JSON.parse(localStorage.getItem("step2"));

    if (step0 && step1 && step2) {
      const final = [step0, step1, step2];

      final.sort(function (a, b) {
        return Number(b.note) - Number(a.note);
      });

      setPodium(final);
    } else {
      alert("Não preencheu");
    }
  }, []);

  return (
    <>
      <S.Container>
        <S.PageRanking>
          <h1>
            Juntos,
            <br />
            vivemos uma
            <br />
            experiência
            <br />
            inspiradora,
            <br />
            autêntica.
            <br />
            Verdadeira.
          </h1>
          <p>
            Confira quais foram os perfumes que
            <br />
            conquistaram o pódio do seu coração:
          </p>

          <S.Perfums>
            {podium?.map((item, index) => (
              <S.Item key={item.step_id}>
                <div className="image_container">
                  <p>{index + 1}º</p>
                  <img src={perfums[item.step_id]?.image} alt="Perfum" />
                </div>
                <div className="description">
                  <strong>{perfums[item.step_id]?.name}</strong>
                  <p>{perfums[item.step_id]?.composition}</p>
                  <strong>Nota: {item.note}</strong>
                </div>
                <div className="group">
                  <input
                    value={choice}
                    onChange={(e) => setChoice(item.step_id)}
                    type="radio"
                    name="choice"
                    id={`choice${item.step_id}`}
                  />
                  <label htmlFor={`choice${item.step_id}`}>
                    Quero este perfume
                  </label>
                </div>
              </S.Item>
            ))}
          </S.Perfums>

          <S.Actions>
            <button disabled={choice === -1} onClick={toggleVisibility}>
              Confirmar perfume
              <br />
              escolhido
            </button>
            <button>Escolher depois</button>
          </S.Actions>
        </S.PageRanking>
      </S.Container>
      <Modal visible={visible} setVisibile={toggleVisibility} choice={choice} />
    </>
  );
}

export default Ranking;
