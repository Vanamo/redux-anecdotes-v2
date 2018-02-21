const getId = () => (100000*Math.random()).toFixed(0)

const reducer = (store = [], action) => {
  if (action.type==='VOTE') {
    const old = store.filter(a => a.id !==action.id)
    const voted = store.find(a => a.id === action.id)

    return [...old, { ...voted, votes: voted.votes+1 } ]
  }
  if (action.type === 'CREATE') {

    return [...store, action.data]
  }
  if (action.type === 'INIT_ANECDOTES') {
    return action.data
  }

  return store
}

export const anecdoteVote = (id) => {
  return {
    type: 'VOTE',
    id
  }
}

export const anecdoteCreator = (anecdote) => {
  return {
    type: 'CREATE',
    data: anecdote
  }
}

export const anecdoteInitialization = (data) => {
  return {
    type: 'INIT_ANECDOTES',
    data
  }
}

export default reducer