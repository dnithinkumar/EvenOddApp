// Write your code here
import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {
    count: 0,
  }

  incrementCount = () => {
    this.setState({count: Math.floor(Math.random() * 100)})
  }

  getEvenOrOdd = () => {
    const {count} = this.state
    return count % 2 === 0 ? 'Even' : 'Odd'
  }

  render() {
    const {count} = this.state
    const evenOrOdd = this.getEvenOrOdd()

    return (
      <div className="even-odd-app-container">
        <h1 className="count-text">Count {count}</h1>
        <p className="even-odd-text">Count is {evenOrOdd}</p>
        <button className="inc-button" onClick={this.incrementCount}>
          Increment
        </button>
        <p className="description">
          Increase By Random Number Between 0 to 100
        </p>
      </div>
    )
  }
}

export default EvenOddApp
