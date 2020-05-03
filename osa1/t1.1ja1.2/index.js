import React from "react";
import ReactDOM from "react-dom";

const Header = props => {
  return (
    <div>
      <h1> {props.course} </h1>{" "}
    </div>
  );
};

const Content = props => {
  var Parts = [];
  for (var i = 0; i < props.parts.length; i++) {
    Parts.push(
      <Part part={props.parts[i]} excersises={props.excersisesAll[i]} />
    );
  }
  return <>{Parts}</>;
};

const Part = props => {
  return (
    <div>
      <p>
        {" "}
        {props.part} {props.excersises}{" "}
      </p>{" "}
    </div>
  );
};

const Total = props => {
  return (
    <div>
      <p>
        {" "}
        Number of exercises{" "}
        {props.excersisesAll.reduce((result, number) => result + number)}{" "}
      </p>{" "}
    </div>
  );
};

const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  return (
    <>
      <Header course={course} />
      <Content
        parts={[part1, part2, part3]}
        excersisesAll={[exercises1, exercises2, exercises3]}
      />
      <Total excersisesAll={[exercises1, exercises2, exercises3]} />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));