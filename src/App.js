import React, { Component } from "react";
import Card from "./components/Card/card";
import Wrapper from "./components/Wrapper/wrapper";
import Header from "./components/Header/header";
import cards from "./cards.json";
import './index.css';

class App extends Component {
  // Setting this.state.cards to the cards json array
  state = {
    cards,
    score: 0,
    highscore: 0
  };
  //when user clicks a card twice, the game will alert that it is over
  //user can start clicking any image again to start game again
  gameOver = () => {
    if (this.state.score > this.state.highscore) {
      this.setState({highscore: this.state.score}, function() {
        console.log(this.state.highscore);
      });
    }
    this.state.cards.forEach(card => {
      card.count = 0;
    });
    alert(`Game Over. Click any card to play again. \nscore: ${this.state.score}`);
    this.setState({score: 0});
    return true;
  }
  //if you click on a card, your score is increased and cards reordered
  clickCount = id => {
    // eslint-disable-next-line
    this.state.cards.find((a, b) =>{
      if (a.id === id) {
        if(cards[b].count === 0){
          //increases the score
          cards[b].count = cards[b].count + 1;
          this.setState({score : this.state.score + 1}, function(){
            console.log(this.state.score);
          });
          //rearranges the cards
          this.state.cards.sort(() => Math.random() - 0.5)
          return true;
        } else {
          this.gameOver();
        }
      }
    });
  }
  // Map over this.state.cards and render a cardCard component for each card object
  render() {
    return (
      <Wrapper>
        <Header score={this.state.score} highscore={this.state.highscore}>Brewery Clicky Game</Header>
        {this.state.cards.map(card => (
          <Card
            clickCount={this.clickCount}
            id={card.id}
            key={card.id}
            image={card.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
