import React, {Component, PropTypes} from 'react'
import ConfirmBattle from '../components/ConfirmBattle'

class ConfirmBattleContainer extends Component {
  constructor() {
    super()
    this.state = {
      isLoading: true,
      playerInfo: []
    }
  }
  componentWillMount() {
    console.log('componentWillMount')
  }
  componentDidMount() {
    console.log('QUERY: ', this.props.location.query)
    console.log('componentDidMount');
  }
  render() {
    return (
      <ConfirmBattle
        isLoading={this.state.isLoading}
        playersInfo={this.state.playerInfo}/>
    )
  }
}

ConfirmBattleContainer.contextTypes = {
  router: PropTypes.object.isRequired
}

export default ConfirmBattleContainer
