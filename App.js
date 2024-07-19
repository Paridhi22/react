
// const heading = React.createElement(
//     "h1",
//     {id: "heading",xyz: "abc" },
//     "Hello World From React!"
// );

const parent = React.createElement(
    "div", {id:"parent"},
    React.createElement(
     "div", { id:"child" },

     React.createElement("h1",{},"I'm an h1 tag"))

    );
// console.log(heading);

console.log(parent);

 const root = ReactDOM.createRoot(document.getElementById("root"));

    //   root.render(heading);
    root.render(parent);

    // jsx