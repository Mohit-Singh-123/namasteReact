// const root = ReactDOM.createRoot(document.getElementById("root"));

// let count = 0;
// const func2 = () => {
//    return React.createElement("h1", {}, `Hello ji ${count++}`);
// }

// root.render(func2());

// setInterval(() => {
//    root.render(func2());
// }, 3000);


// const root = ReactDOM.createRoot(document.getElementById("root"));
// const heading = React.createElement("h1", {}, "heading from the react")
// let count = 0;
// const colour = ['red', 'blue', 'green', 'pink', 'orange', 'magenta']
// const func3 = () => {
//    if (count < colour.length) {
//       return `${colour[count]}`;
//    }
// }
// const func4 = () => {
//    if (count < colour.length)
//       return `Hello from the ${count++}`
//    else
//       return;
// }
// setInterval(() => {
//    root.render(React.createElement("h1", { style: { color: func3() } }, func4()))
// }, 3000)



// const root = ReactDOM.createRoot(document.getElementById("root"));
// const heading = React.createElement("h1", {}, "helllllmlllooooo");
// console.log()

const api_url = "https://dummyjson.com/products/1";

async function getApi(url) {
   const response = await fetch(url);
   var data = await response.json();
   return data
}

const promise = getApi(api_url);
const root = ReactDOM.createRoot(document.getElementById("root"));
promise.then(function (data) {

   console.log(data);
   const heading = React.createElement("h1", {}, data.title);
   root.render(heading);

})