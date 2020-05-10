import React, { useState } from "react";
import ReactDOM from "react-dom";

const Header = (props) => {
  return (
    <div>
      {" "}
      <h1> {props.header} </h1>{" "}
    </div>
  );
};

const Statistics = (props) => {
  const all = props.all;
  const bad = props.bad;
  const neutral = props.neutral;
  const good = props.good;
  const average = isNaN((-props.bad + props.good) / props.all)
    ? 0
    : (-props.bad + props.good) / props.all;
  const positive = isNaN(good / all) ? 0 : good / all;
  if (props.all === 0) {
    return <div>No feedback given</div>;
  }

  return (
    <div>
      <table>
        <tbody>
          <StatisticLine texti={"good"} vaule={good} />
          <StatisticLine texti={"neutral"} vaule={neutral} />
          <StatisticLine texti={"bad"} vaule={bad} />
          <StatisticLine texti={"average"} vaule={average} />
          <StatisticLine texti={"positive"} vaule={positive} />
        </tbody>
      </table>
    </div>
  );
};

const StatisticLine = (props) => {
  var end = " ";
  if (props.texti === "positive") {
    end = " %";
  }
  return (
    <tr>
      <td>{props.texti}</td>
      <td>
        {props.vaule}
        {end}
      </td>
    </tr>
  );
};

const Button = ({ onClick, text }) => (
  <button onClick={onClick}> {text} </button>
);

const App = (props) => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);

  const handleBadClick = () => {
    console.log("Bad feedback recieved!");
    setAll(all + 1);
    setBad(bad + 1);
  };

  const handleNeutralClick = () => {
    console.log("Neutral feedback recieved!");
    setAll(all + 1);
    setNeutral(neutral + 1);
  };

  const handleGoodClick = () => {
    console.log("Good feedback recieved!");
    setAll(all + 1);
    setGood(good + 1);
  };

  return (
    <div>
      <div>
        <Header header="give feedback" />
        <Button onClick={handleGoodClick} text="good" />
        <Button onClick={handleNeutralClick} text="neutral" />
        <Button onClick={handleBadClick} text="bad" />
        <Header header="startistics" />
        <Statistics bad={bad} neutral={neutral} good={good} all={all} />{" "}
      </div>{" "}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
