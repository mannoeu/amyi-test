import React from "react";
import { useParams, useHistory, useLocation } from "react-router-dom";

import GridColors from "../../components/GridColors";
import perfums from "../../data";

import * as S from "./styles";

function QuizPerfum() {
  const history = useHistory();
  const location = useLocation();

  const { id } = useParams();
  const [perfumIndex, setPerfumIndex] = React.useState(() => {
    return id && parseInt(id) < 3 ? parseInt(id) : 0;
  });

  const [colors, setColors] = React.useState([]);

  const [description, setDescription] = React.useState("");
  const [note, setNote] = React.useState(0);

  React.useEffect(() => {
    const step = `step${perfumIndex}`;
    const progress = JSON.parse(localStorage.getItem(step));

    if (progress) {
      setColors(progress?.step_answers?.colors);
      setDescription(progress?.step_answers?.description);
      setNote(parseInt(progress?.note));
    }
  }, [location]);

  function saveProgress() {
    const step = `step${perfumIndex}`;

    const progress = {
      step_id: perfumIndex,
      step_answers: {
        colors,
        description,
      },
      note,
    };

    localStorage.setItem(step, JSON.stringify(progress));
  }

  function handleClickProx() {
    if (perfumIndex < perfums.length) {
      saveProgress();

      setPerfumIndex(perfumIndex + 1);
      setColors([]);
      setDescription("");
      setNote("0");

      if (perfumIndex + 1 < perfums.length) {
        window.scroll({
          top: 0,
          behavior: "smooth",
        });

        history.push(`/perfum/quiz/${perfumIndex + 1}`);
      } else {
        history.push(`/ranking`);
      }
    }
  }

  return (
    <S.Container>
      {perfumIndex <= perfums.length && (
        <S.PageQuiz>
          <S.QuestionContainer>
            <h1>
              {perfums[perfumIndex]?.name} - <br />
              por {perfums[perfumIndex]?.created_by}
            </h1>
            <p>como você sentiu esse perfume?</p>

            <S.QuestionItem>
              <p>1. Se esse perfume tivesse uma cor, qual ela seria?</p>
              <span>(Selecione quantas cores você desejar)</span>
              <GridColors colors={colors} setColors={setColors} />

              <div className="other_answer">
                <div className="group">
                  <label htmlFor="other-color">
                    Pensei em uma cor diferente
                  </label>
                  <input
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    type="text"
                    placeholder="descrição"
                  />
                </div>
                <button onClick={saveProgress}>Salvar progresso</button>
              </div>
            </S.QuestionItem>

            <S.QuestionItem>
              <p>
                2. De 0 a 10, que nota você daria para a conexão do perfume{" "}
                {perfums[perfumIndex]?.name} com você:
              </p>
              <span>Arraste para selecionar sua nota</span>

              <div className="other_answer">
                <div className="group group_note">
                  <strong>{note}</strong>
                  <input
                    type="range"
                    min="0"
                    max="10"
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    step="1"
                  />
                </div>
                <button
                  disabled={!colors.length}
                  className="dark-btn"
                  onClick={handleClickProx}
                >
                  Enviar Respostas
                </button>
              </div>
            </S.QuestionItem>
          </S.QuestionContainer>
        </S.PageQuiz>
      )}
    </S.Container>
  );
}

export default QuizPerfum;
