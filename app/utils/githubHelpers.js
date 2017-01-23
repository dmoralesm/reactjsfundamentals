import axios from 'axios'
import config from '../config/config'

const axios_config = {
  headers: {'Authorization': `token ${config.GITHUB_TOKEN}`}
};

const getUserInfo = (username) => (
  axios.get(`https://api.github.com/users/${username}`, axios_config)
)

const helpers = {
  getPlayersInfo: players => (
    // fet some data from github
    axios.all(players.map(username => (
      getUserInfo(username)
    ))).then(info => info.map(user => user.data)
    ).catch(err => console.warn('Error in getPlayersInfo', err))
  )
}

export default helpers
