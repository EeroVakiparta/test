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
  const [selected, setSelected] = useState(0);
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

  const handleAnecdoteClick = () => {
    console.log("Next anecdote requested!");
    var newSelection = Math.floor(Math.random() * (anecdotes.length + 1));
    setSelected(newSelection);
    console.log("Next anecdote from index:" + newSelection);
  };

  return (
    <div>
      <div>
        {props.anecdotes[selected]}
        <br></br>
        <Button onClick={handleAnecdoteClick} text="next anecdote" />
        {/*
        <Header header="give feedback" />
        <Button onClick={handleGoodClick} text="good" />
        <Button onClick={handleNeutralClick} text="neutral" />
        <Button onClick={handleBadClick} text="bad" />
        <Header header="startistics" />
        <Statistics bad={bad} neutral={neutral} good={good} all={all} />{" "}
       */}
      </div>{" "}
    </div>
  );
};

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"));
