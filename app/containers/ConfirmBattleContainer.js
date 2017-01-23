import React, {Component, PropTypes} from 'react'
import ConfirmBattle from '../components/ConfirmBattle'
import githubHelpers from '../utils/githubHelpers'

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
    const query = this.props.location.query
    //console.log('QUERY: ', query)
    githubHelpers.getPlayersInfo([query.playerOne, query.playerTwo])
    .then(players => {
      console.log('PLAYERS', players)
      this.setState({
          isLoading: false,
          //playerInfo: [players[0], players[1]]
          playerInfo: players
      })
    })
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
