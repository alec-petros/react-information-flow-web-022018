import React, { Component } from 'react'
import { getReducedColor, getRandomColor } from './randomColorGenerator.js'
import Tier3 from './Tier3'


export default class Tier2 extends Component {

  constructor(props) {
    super(props)
    this.state = {
      childColor: getReducedColor(this.props.color),
    }
  }

  handleClick = (e) => {
    e.stopPropagation()
    this.props.changeColor()
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps)
    this.setState({
      childColor: getReducedColor(nextProps.color)
    })
  }

  changeChildColor = (e) => {
    e.stopPropagation()
    this.setState({
      childColor: getRandomColor()
    })
  }

  render() {
    // hard coded color values have been added below, though they won't be
    // present in our solution. What should they be replaced with?
    return (
      <div onClick={this.handleClick} className="tier2" style={{backgroundColor: this.props.color, color: this.props.color}}>
        <Tier3 changeColor={this.changeChildColor} color={this.state.childColor} />
        <Tier3 changeColor={this.changeChildColor} color={this.state.childColor} />
      </div>
    )
  }
}
