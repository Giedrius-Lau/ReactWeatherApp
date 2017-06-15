
var Greeter = React.createClass({
  render: function () {
    return (
      <h1>Hellou</h1>
    )
  }
})

ReactDOM.render(
  <Greeter />,
  document.getElementById("app")
);
