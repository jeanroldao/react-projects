
var StarsFrame = React.createClass({
  render: function() {
    
    var stars = [];
    for (var i = 0; i < this.props.numberOfStars; i++) {
      stars.push(<span key={i} className="glyphicon glyphicon-star"></span>);
    }
    
    return (
      <div id="stars-frame">
        <div className="well">
        {stars}
        </div>
      </div>
    );
  }
});

var ButtonFrame = React.createClass({
  render: function() {
    var disabled = this.props.selectedNumbers.length == 0;
    
    return (
      <div id="button-frame">
        <button className="btn btn-primary btn-lg" disabled={disabled}>=</button>
      </div>
    );
  }
});

var AnswerFrame = React.createClass({
  render: function() {
    var unselectNumber = this.props.unselectNumber;
    
    var numbers = this.props.selectedNumbers.map(function(number) {
      return (
        <div 
          key={number} 
          className="number"
          onClick={unselectNumber.bind(null, number)}>
          {number}
        </div>
      );
    });
    return (
      <div id="answer-frame">
        <div className="well">
        {numbers}
        </div>
      </div>
    );
  }
});

var NumbersFrame = React.createClass({
  render: function() {
    
    var selectNumber = this.props.selectNumber;
    
    var numbers = [];
    for (var i = 1; i <= 9; i++) {
      var selected = this.props.selectedNumbers.indexOf(i) >= 0;
      var className = 'number selected-' + selected;
      numbers.push(
        <div key={i} className={className} onClick={selectNumber.bind(null, i)}>
          {i}
        </div>
      );
    }
    
    return (
      <div id="numbers-frame">
        <div className="well">
        {numbers}
        </div>
      </div>
    );
  }
});

var Game = React.createClass({
  
  getInitialState: function() {
    return { 
      selectedNumbers: [],
      numberOfStars: Math.floor(Math.random() * 9) + 1
    };
  },
  
  selectNumber: function(selectedNumber) {
    if (this.state.selectedNumbers.indexOf(selectedNumber) < 0) {
      this.setState({ 
        selectedNumbers: this.state.selectedNumbers.concat(selectedNumber) 
      });
    }
  },
  
  unselectNumber: function(clickedNumber) {
    var selectedNumbers = this.state.selectedNumbers.filter(function(n) {
      return n != clickedNumber;
    });
    
    this.setState({ selectedNumbers: selectedNumbers });
  },
  
  render: function() {
    return (
      <div id="game">
        <h2>Play Nine</h2>
        <hr />
        <div className="clearfix">
          <StarsFrame numberOfStars={this.state.numberOfStars} />
          <ButtonFrame selectedNumbers={this.state.selectedNumbers} />
          <AnswerFrame 
            selectedNumbers={this.state.selectedNumbers}
            unselectNumber={this.unselectNumber} />
        </div>
        
        <NumbersFrame selectedNumbers={this.state.selectedNumbers}
          selectNumber={this.selectNumber} />
      </div>
    );
  }
});

ReactDOM.render(
  <Game />, 
  document.getElementById('container')
);