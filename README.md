 1.React is primarily used for:
 a) Server-side rendering
 b) Styling web pages
 c) Building user interfaces 
 d) Managing databases
Ans:-c) Building user interfaces

 2.JSX allows you to:
 a) Write JavaScript inside CSS files
 b) Write HTML-like code inside JavaScript 
 c) Run SQL queries in React
 d) Replace Node.js
 Ans:-b) Write HTML-like code inside JavaScript


 3.Which of the following is true about props?
 a) Props can be modified inside the child component
 b) Props allow data flow from child → parent
 c) Props are immutable and flow parent → child 
 d) Props are used to manage component state
 Ans:-c) Props are immutable and flow parent → child


 4.In React, event handlers are written in:
 a) snake_case
 b) PascalCase
 c) camelCase 
 d) kebab-case
 Ans:-c) camelCase


 5.What does React use for efficient DOM updates?
 a) Shadow DOM
 b) Virtual DOM 
 c) Real DOM only
 d) Web Assembly
 Ans:-b) Virtual DOM

 6.Write a simple React functional component called 
HelloWorld that displays “Hello, React!”
Ans:-  
import React from 'react';

function HelloWorld() {
  return (
    <h1>Hello, React!</h1>
  );
}

export default HelloWorld;

App.js
--------
import HelloWorld from './HelloWorld';

function App() {
  return (
    <div>
      <HelloWorld />
    </div>
  );
}

export default App;


 7.What is the difference between a functional 
component and a class component?
Ans:- 
Functional components are simpler, cleaner, and preferred in modern React with Hooks, while class components are older and used less often now.

 8.Why should React component names start with a 
capital letter?
Ans:- React uses capitalization to distinguish between HTML tags and custom components.

 9.Explain the difference between JSX and plain 
JavaScript in React.
Ans:-
i-JSX is a syntax extension that lets you write HTML-like code inside JavaScript. Where plain javascript is standard JavaScript code without any HTML-like syntax.
ii-JSX makes it easier to describe UI structure in a readable, declarative way. Where plain javascript used for logic, functions, and DOM manipulation manually.

 10.Create a button in React that, when clicked, logs 
"Button clicked!" to the console.
Ans:-
import React from 'react';

function ClickButton() {
  const handleClick = () => {
    console.log("Button clicked!");
  };

  return (
    <button onClick={handleClick}>
      Click Me
    </button>
  );
}

export default ClickButton;

App.js
---------
import ClickButton from './ClickButton';

function App() {
  return (
    <div>
      <ClickButton />
    </div>
  );
}

export default App;



 Build a simple profile card
 -----------------------------
 import React from "react";

function ProfileCard({ name, role, avatarUrl }) {
 
  const handleClick = () => {
    alert("Hello from " + name);
  };

 
  const cardStyle = {
    border: "1px solid #ccc",
    borderRadius: "12px",
    padding: "16px",
    textAlign: "center",
    width: "220px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f9f9f9",
    margin: "10px",
  };

  const imageStyle = {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    objectFit: "cover",
    marginBottom: "10px",
  };

  const buttonStyle = {
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    padding: "8px 12px",
    borderRadius: "8px",
    cursor: "pointer",
  };

  return (
    <div style={cardStyle}>
      <img src={avatarUrl} alt={name} style={imageStyle} />
      <h2>{name}</h2>
      <h4>{role}</h4>
      <button style={buttonStyle} onClick={handleClick}>
        Say Hello 👋
      </button>
    </div>
  );
}

export default ProfileCard;

App.js
--------
import React from "react";
import ProfileCard from "./ProfileCard";

function App() {
  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "30px" }}>
      <ProfileCard
        name="Hrushikesh Nandi"
        role="Frontend Developer Intern"
        avatarUrl="https://via.placeholder.com/100"
      />
    </div>
  );
}

export default App;

Greeting App
-------------
import React from "react";

function Greeting({ name, favoriteColor }) {
 
  const textStyle = {
    color: favoriteColor,
    fontFamily: "Arial, sans-serif",
  };


  const handleClick = () => {
    console.log(`${name} clicked the button!`);
  };

  return (
    <div style={{ marginBottom: "20px", textAlign: "center" }}>
      <h2 style={textStyle}>
        Hello {name}! Your favorite color is {favoriteColor}.
      </h2>
      <button
        onClick={handleClick}
        style={{
          backgroundColor: favoriteColor,
          color: "white",
          border: "none",
          padding: "8px 12px",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        Click Me
      </button>
    </div>
  );
}

export default Greeting;

App.js
-------
import React from "react";
import Greeting from "./Greeting";

function App() {
  return (
    <div style={{ marginTop: "40px", textAlign: "center" }}>
      <h1>🌈 Mini Greeting App</h1>

      <Greeting name="Aman" favoriteColor="blue" />
      <Greeting name="Riya" favoriteColor="green" />
      <Greeting name="Hrushikesh" favoriteColor="purple" />
    </div>
  );
}

export default App;
