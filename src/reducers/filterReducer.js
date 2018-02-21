const filterReducer = (state = '', action) => {
  switch(action.type) {
  case 'FILTER':
    return action.content
  }
  return state
}

export const filterChange = (content) => {
  return {
    type: 'FILTER',
    content
  }
}

export default filterReducer