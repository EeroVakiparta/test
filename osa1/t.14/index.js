import React, { useState } from "react";
import ReactDOM from "react-dom";

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

var votesStart = new Array(anecdotes.length);
votesStart.fill(0);

const Button = ({ onClick, text }) => (
  <button onClick={onClick}> {text} </button>
);

const VoteResults = (props) => (
  <div>
    <br />
    has {props.votes[props.selectedAnectode]} votes
  </div>
);

const Highest = (props) => (
  <div>
    {anecdotes[props.selectedHighest]}
    <br />
    has {props.votes[props.selectedAnectode]} votes
  </div>
);

const App = (props) => {
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(votesStart);
  const mostVotes = votes.indexOf(Math.max(...votes));

  const handleAnecdoteClick = () => {
    console.log("Next anecdote requested!");
    let newSelection = selected;
    while (newSelection === selected) {
      newSelection = Math.floor(Math.random() * anecdotes.length);
    }
    setSelected(newSelection);
    console.log("Next anecdote from index:" + newSelection);
  };

  const handleVoteAnecdote = () => {
    const copy = [...votes];
    copy[selected] += 1;
    setVotes(copy);
    console.log("Voting anecdote!: " + selected);
    console.log("Copy!: " + copy);
    console.log("Votes!: " + votes);
  };

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <div>
        {props.anecdotes[selected]}
        <br></br>
        <VoteResults selectedAnectode={selected} votes={votes} />
        <br></br>
        <Button onClick={handleVoteAnecdote} text="vote" />
        <Button onClick={handleAnecdoteClick} text="next anecdote" />
        <br></br>
        <h1>Anecdote with most votes</h1>
        <br></br>
        {props.anecdotes[mostVotes]}
        <Highest selectedAnectode={mostVotes} votes={votes} />
      </div>{" "}
    </div>
  );
};

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"));
