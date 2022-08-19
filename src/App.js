import "./App.css";
import Loading from "./components/Loading";
import SetupForm from "./components/SetupForm";
import { useGlobalContext } from "./context/QuizContext";
import Modal from "./components/Modal";

function App() {
  const { waiting, loading, questions, index, correct } = useGlobalContext(); // consuming the context

  if (waiting) {
    return <SetupForm />;
  }
  if (loading) {
    return <Loading />;
  }
  // console.log(questions);
  const { question, incorrect_answers, correct_answer } = questions[index];
  const answers = [...incorrect_answers, correct_answer];
  return (
    <main>
      <Modal />
      <section className="quiz">
        <p className="correct-answers">
          correct answers : {correct}/{index}
        </p>
        <article className="container">
          <h2 dangerouslySetInnerHTML={{ __html: question }} />
          <div className="btn-container">
            {answers.map((answer, index) => {
              return (
                <button
                  key={index}
                  className="answer-btn"
                  dangerouslySetInnerHTML={{ __html: answer }}
                />
              );
            })}
          </div>
        </article>
        <button className="next-question">next question</button>
      </section>
    </main>
  );
}

export default App;
