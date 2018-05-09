import React from 'react'
import ShoppingList  from './component/ShoppingList'
import TicTacToeGame from "./component/TicTacToeGame";

class Index extends React.Component{
  render() {
    return (
      <div>
        <h2 ><a href="https://reactjs.org/tutorial/tutorial.html">React Tutorial</a></h2>
        <TicTacToeGame />

        <div>
          <ShoppingList name="Stephen Curry" />
        </div>
      </div>


    )
  }
}
export default Index;
