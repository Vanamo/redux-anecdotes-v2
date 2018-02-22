import React from 'react'
import { connect } from 'react-redux'
import { anecdoteCreator } from './../reducers/anecdoteReducer'
import { notificationCreation, hideNotification } from '../reducers/notificationReducer'

class AnecdoteForm extends React.Component {
  handleSubmit = async (e) => {
    e.preventDefault()
    const anecdote = e.target.anecdote.value
    e.target.anecdote.value = ''
    this.props.anecdoteCreator(anecdote)
    this.props.notificationCreation(
      `you created a new anecdote: '${anecdote}'`, 5
    )
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

export default connect(
  null,
  { anecdoteCreator,
    notificationCreation,
    hideNotification
  }
)(AnecdoteForm)