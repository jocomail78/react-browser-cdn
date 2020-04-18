console.log("Batman");

function Hello() {
	return <div>Hello React!</div>;
}

ReactDOM.render(
  <Hello />, 
  document.getElementById('mountNode'),
);