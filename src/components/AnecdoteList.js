import React from 'react'
import { notificationVote } from './../reducers/notificationReducer'
import Filter from './Filter'

class AnecdoteList extends React.Component {
  handleClick = (anecdote) => () => {
    this.props.store.dispatch({ type: 'VOTE', id: anecdote.id })
    this.props.store.dispatch(notificationVote(anecdote.content))
    setTimeout(() => {
      this.props.store.dispatch({ type: 'HIDE_NOTIFICATION' })
    }, 5000)
  }

  render() {
    const anecdotes = this.props.store.getState().anecdotes
    const filter = this.props.store.getState().filter.toLowerCase()
    const filteredAnecdotes = anecdotes
      .filter(a => a.content.toLowerCase().includes(filter))

    return (
      <div>
        <h2>Anecdotes</h2>
        <Filter store={this.props.store} />
        {filteredAnecdotes.sort((a, b) => b.votes - a.votes).map(anecdote =>
          <div key={anecdote.id}>
            <div>
              {anecdote.content}
            </div>
            <div>
              has {anecdote.votes}
              <button onClick={this.handleClick(anecdote)}>
                vote
              </button>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default AnecdoteList
