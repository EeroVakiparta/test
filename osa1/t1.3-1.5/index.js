import React from "react";
import ReactDOM from "react-dom";

const Header = props => {
  return (
    <div>
      <h1> {props.courseName} </h1>{" "}
    </div>
  );
};

const Total = props => {
  var numberOfExercises = 0;
  props.parts.forEach(part => {
    numberOfExercises += part.exercises;
  });
  return (
    <div>
      <p> Number of exercises {numberOfExercises} </p>{" "}
    </div>
  );
};

const Content = props => {
  var Parts = [];
  var courceParts = props.parts;
  courceParts.forEach(part => {
    Parts.push(<Part part={part.name} excersises={part.exercises} />);
  });
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

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10
      },
      {
        name: "Using props to pass data",
        exercises: 7
      },
      {
        name: "State of a component",
        exercises: 14
      }
    ]
  };
  return (
    <>
      <Header courseName={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
