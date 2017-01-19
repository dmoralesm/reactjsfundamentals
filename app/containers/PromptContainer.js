import React, {Component} from 'react'
import styles from '../styles'
import Prompt from '../components/Prompt'

class PromptContainer extends Component {
  constructor() {
    super();
    this.state = {
      username: ''
    }
  }
  handleUpdateUser(e) {
    this.setState({username: e.target.value})
  }
  handleSubmitUser(e) {
    e.preventDefault();
    let username = this.state.username
    this.setState({username: ''})

    if(this.props.routeParams.playerOne) {
      // go to /battle
      this.context.router.push({
        pathname: '/battle',
        query: {
          playerOne: this.props.routeParams.playerOne,
          playerTwo: this.state.username
        }
      })
    } else {
      // go to /playerTwo
      this.context.router.push(`/playerTwo/${this.state.username}`)
    }
  }
  render() {
    return (
      <Prompt
        onSubmitUser={(e) => this.handleSubmitUser(e)}
        onUpdateUser={(e) => this.handleUpdateUser(e)}
        header={this.props.route.header}
        username={this.state.username} />
    )
  }
}

PromptContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default PromptContainer
