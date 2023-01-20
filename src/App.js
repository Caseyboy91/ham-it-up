import "./App.css";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import HamItUp from "./HamItUp";

document.title = "Ham It Up";
function App() {
  const [question, setQuestion] = useState("");
  // const [answers, setAnswers] = useState([]);
  // const [correctAnswer, setCorrectAnswer] = useState(null);
  // const [userAnswer, setUserAnswer] = useState(null);

  useEffect(() => {
    const getQuestions = async () => {
      try {
        const data = await axios.get(
          "https://opentdb.com/api.php?amount=13&category=13&difficulty=medium&type=multiple"
        );

        let results = data.data.results;

        results.map((result) => {
          console.log(result);
          setQuestion(result);
        });
      } catch (error) {
        console.error(error);
      }
    };
    getQuestions();
  }, []);

  return (
    <>
      <HamItUp question={question} />
    </>
  );
}

export default App;

//
