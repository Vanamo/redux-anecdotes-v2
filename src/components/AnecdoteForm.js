import React from 'react'
import { anecdoteCreator } from './../reducers/anecdoteReducer'
import { notificationCreation } from '../reducers/notificationReducer'

class AnecdoteForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault()
    const content = e.target.anecdote.value
    this.props.store.dispatch(
      anecdoteCreator(content)
    )
    this.props.store.dispatch(
      notificationCreation(content)
    )
    setTimeout(() => {
      this.props.store.dispatch({ type: 'HIDE_NOTIFICATION' })
    }, 5000)

    e.target.anecdote.value = ''
  }
  render() {
    return (
      <div>
        <h2>create new</h2>
        <form onSubmit={this.handleSubmit}>
          <div><input name='anecdote' /></div>
          <button>create</button>
        </form>
      </div>
    )
  }
}

export default AnecdoteForm
