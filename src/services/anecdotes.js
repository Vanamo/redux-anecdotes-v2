import axios from 'axios'

const url = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const response = await axios.get(url)
  return response.data
}

const createNew = async (content) => {
  console.log(content)
  const response = await axios.post(url, { content, votes: 0 })
  console.log('r', response.data)
  return response.data
}

export default { getAll, createNew }