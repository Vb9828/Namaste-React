import React from "react"
import ReactDOM from "react-dom/client" 
const parent = React.createElement(
  "div",
  {
    id: "parent",
  },
  React.createElement(
    "div",
    {
      id: "child",
    },
    [
      React.createElement(
        "h1",
        {
          id: "heading",
        },
        "I am h1 tag!"
      ),
      React.createElement(
        "h2",
        {
          id: "heading2",
        },
        "I am h2 hsdiuewqihqidqduq!"
      ),
    ]
  )
);

const heading = React.createElement("h1", {}, "Hello world form React!");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
