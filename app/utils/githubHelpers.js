import axios from 'axios'
import config from '../config/config'

const axios_config = {
  headers: {'Authorization': `token ${config.GITHUB_TOKEN}`}
};

const getUserInfo = (username) => (
  axios.get(`https://api.github.com/users/${username}`, axios_config)
)

const getRepos = username => (
  axios.get(`https://api.github.com/users/${username}/repos?per_page=100`, axios_config)
)

const getTotalStars = repos => (
  repos.data.reduce((prev, current) => (
    prev + current.stargazers_count
  ), 0)
)

const getPlayersData = player => (
  getRepos(player.login)
    .then(getTotalStars)
    .then(totalStars => {
      return {
        followers: player.followers,
        totalStars: totalStars
      }
    })
)

const calculateScores = players => (
  [
    players[0].followers * 3 + players[0].totalStars,
    players[1].followers * 3 + players[1].totalStars
  ]
)

const helpers = {
  getPlayersInfo: players => (
    // fet some data from github
    axios.all(players.map(username => (
      getUserInfo(username)
    ))).then(info => info.map(user => user.data)
    ).catch(err => console.warn('Error in getPlayersInfo', err))
  ),
  battle: players => {
    const playerOneData = getPlayersData(players[0])
    const playerTwoData = getPlayersData(players[1])

    return axios.all([playerOneData, playerTwoData])
      .then(calculateScores)
      .catch(err => console.warn('Error in battle:', err))
  }
}

export default helpers
