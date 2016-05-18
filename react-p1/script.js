// Code goes here

var Button = React.createClass({

  localHandleClick: function() {
    this.props.localHandleClick(this.props.increment);
  },
  
  render: function() {
    return (
      <button onClick={this.localHandleClick}>+{this.props.increment}</button>
    );
  }
});

var Result = React.createClass({
  render: function() {
    return (
      <div>AAA: {this.props.counter}</div>
    );
  }
});

var Main = React.createClass({
  getInitialState: function() {
    return { counter: 1 };
  },
  
  handleClick: function(increment) {
    this.setState({ counter: this.state.counter + increment });
  },
  
  render: function() {
    return (
      <div>
        <Button localHandleClick={this.handleClick} increment={1} />
        <Button localHandleClick={this.handleClick} increment={5} />
        <Result counter={this.state.counter} />
      </div>
    );
  }
});

ReactDOM.render(<Main />, document.getElementById('main'));