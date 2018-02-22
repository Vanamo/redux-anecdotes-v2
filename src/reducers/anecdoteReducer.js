import anecdoteService from './../services/anecdotes'

const reducer = (store = [], action) => {
  if (action.type === 'VOTE') {
    console.log('a', action)
    const old = store.filter(a => a.id !== action.anecdote.id)
    const voted = store.find(a => a.id === action.anecdote.id)

    return [...old, { ...voted, votes: voted.votes + 1 }]
  }
  if (action.type === 'CREATE') {

    return [...store, action.data]
  }
  if (action.type === 'INIT_ANECDOTES') {
    return action.data
  }

  return store
}

export const anecdoteVote = (anecdote) => {
  return async (dispatch) => {
    const updatedAnecdote = { ...anecdote, votes: anecdote.votes + 1 }
    await anecdoteService.update(anecdote.id, updatedAnecdote)
    dispatch({
      type: 'VOTE',
      anecdote
    })
  }
}

export const anecdoteCreator = (anecdote) => {
  return async (dispatch) => {
    const newAnecdote = await anecdoteService.createNew(anecdote)
    dispatch({
      type: 'CREATE',
      data: newAnecdote
    })
  }
}

export const anecdoteInitialization = () => {
  return async (dispatch) => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'INIT_ANECDOTES',
      data: anecdotes
    })
  }
}

export default reducer