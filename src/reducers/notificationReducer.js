const initialState = null

const notificationReducer = (state = initialState, action) => {
  console.log('ACTION: ', action)
  switch (action.type) {
  case 'NEW_ANECDOTE':
    return `you created a new anecdote: '${action.content}'`
  case 'VOTE_ANECDOTE':
    return `you voted '${action.content}'`
  case 'HIDE_NOTIFICATION':
    return null
  }
  return state
}

export const notificationCreation = (content) => {
  return {
    type: 'NEW_ANECDOTE',
    content
  }
}

export const notificationVote = (content) => {
  return {
    type: 'VOTE_ANECDOTE',
    content
  }
}

export default notificationReducer