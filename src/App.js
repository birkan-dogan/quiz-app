import "./App.css";
import Loading from "./components/Loading";
import SetupForm from "./components/SetupForm";
import { useGlobalContext } from "./context/QuizContext";

function App() {
  const { waiting, loading, questions, index, correct } = useGlobalContext(); // consuming the context

  if (waiting) {
    return <SetupForm />;
  }
  if (loading) {
    return <Loading />;
  }
  return <main>quiz app</main>;
}

export default App;
