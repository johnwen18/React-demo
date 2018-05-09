import React from 'react'

// Demo component
class ShoppingList extends React.Component {
  render() {
    return (
      <div className="shopping-list">
        <h3>Demo Component:</h3>
        <h3>Shopping List for {this.props.name}</h3>
        <ul>
          <li>Instgram</li>
          <li>WhatsApp</li>
          <li>Oculus</li>
        </ul>
      </div>
    )
  }
}

export default ShoppingList;

// Example usage: <ShoppingList name="Stephen Curry" />
