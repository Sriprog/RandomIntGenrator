import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {randomNum: '0'}

  generateRandNum = () => {
    this.setState({randomNum: Math.ceil(Math.random() * 100)})
  }

  render() {
    const {randomNum} = this.state
    return (
      <div className="bg-container">
        <div className="Random-container">
          <h1 className="heading">Random Number</h1>
          <p className="para">
            Generate a random number in the <br />
            range of 0 to 100
          </p>
          <button
            type="button"
            className="button"
            onClick={this.generateRandNum}
          >
            Generate
          </button>
          <h1 className="number">{randomNum}</h1>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
