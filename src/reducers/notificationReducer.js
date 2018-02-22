const initialState = null

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
  case 'NEW_NOTIFICATION':
    return action.content
  case 'HIDE_NOTIFICATION':
    return null
  }
  return state
}

export const notificationCreation = (content, time) => {
  return async (dispatch) => {
    dispatch({
      type: 'NEW_NOTIFICATION',
      content
    })
    setTimeout(() => {
      dispatch({
        type: 'HIDE_NOTIFICATION'
      })
    }, time * 1000)
  }
}

export const hideNotification = () => {
  return {
  }
}

export default notificationReducer