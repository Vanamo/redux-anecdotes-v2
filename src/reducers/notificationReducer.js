const initialState = {
  content: 'message'
}

const notificationReducer = (state = initialState, action) => {
  console.log('ACTION: ', action)
  switch (action.type) {
  case 'SET_NOTIFICATION':
    return action.notification
  }
  return state
}

export const notificationChange = (notification) => {
  return {
    type: 'SET_NOTIFICATION',
    notification
  }
}

export default notificationReducer