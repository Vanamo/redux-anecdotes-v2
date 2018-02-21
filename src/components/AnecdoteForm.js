import React from 'react'
import { connect } from 'react-redux'
import { anecdoteCreator } from './../reducers/anecdoteReducer'
import { notificationCreation, hideNotification } from '../reducers/notificationReducer'
import anecdoteService from './../services/anecdotes'

class AnecdoteForm extends React.Component {
  handleSubmit = async (e) => {
    e.preventDefault()
    const content = e.target.anecdote.value
    e.target.anecdote.value = ''
    const newAnecdote = await anecdoteService.createNew(content)
    this.props.anecdoteCreator(newAnecdote)
    this.props.notificationCreation(newAnecdote)
    setTimeout(() => {
      this.props.hideNotification()
    }, 5000)

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