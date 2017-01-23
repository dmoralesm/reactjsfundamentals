import React, {Component, PropTypes} from 'react'
import ConfirmBattle from '../components/ConfirmBattle'
import githubHelpers from '../utils/githubHelpers'

class ConfirmBattleContainer extends Component {
  constructor() {
    super()
    this.state = {
      isLoading: true,
      playerInfos: []
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
          //playerInfos: [players[0], players[1]]
          playerInfos: players
      })
    })
  }
  handleInitiateBattle() {
    this.context.router.push({
      pathname: '/results',
      state: {
        playerInfos: this.state.playersInfo
      }
    })

  }
  render() {
    return (
      <ConfirmBattle
        isLoading={this.state.isLoading}
        playersInfo={this.state.playerInfos}
        onInitiateBattle={() => this.handleInitiateBattle()}/>
    )
  }
}

ConfirmBattleContainer.contextTypes = {
  router: PropTypes.object.isRequired
}

export default ConfirmBattleContainer
