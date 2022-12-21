import "./styles.css";
import pointConfig from "../config/pointConfig.json";
import { useState } from "react";

export default function App() {
  const [round, setRound] = useState(1);
  const [step, setStep] = useState("第一階段");

  return (
    <div className="App">
      <h1>{`Round ${round}`}</h1>
      <h2>{step}</h2>
    </div>
  );
}
