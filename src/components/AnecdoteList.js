import React from 'react'
import { connect } from 'react-redux'
import { notificationVote, hideNotification } from './../reducers/notificationReducer'
import { anecdoteVote } from './../reducers/anecdoteReducer'
import Filter from './Filter'
import anecdoteService from './../services/anecdotes'

class AnecdoteList extends React.Component {
  handleClick = (anecdote) => async () => {
    const updatedAnecdote = { ...anecdote, votes: anecdote.votes + 1 }
    await anecdoteService.update(anecdote.id, updatedAnecdote)
    this.props.anecdoteVote(anecdote.id)
    this.props.notificationVote(anecdote.content)
    setTimeout(() => {
      this.props.hideNotification()
    }, 5000)
  }

  render() {

    return (
      <div>
        <h2>Anecdotes</h2>
        <Filter store={this.props.store} />
        {this.props.visibleAnecdotes.sort((a, b) => b.votes - a.votes).map(anecdote =>
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

const filteredAnecdotes = (anecdotes, filter) => {
  {console.log(anecdotes)}
  return (
    anecdotes.filter(a => a.content.toLowerCase()
      .includes(filter.toLowerCase()))
  )
}


const mapStateToProps = (state) => {
  return {
    visibleAnecdotes: filteredAnecdotes(state.anecdotes, state.filter)
  }
}

const ConnectedAnecdoteList = connect(
  mapStateToProps,
  { anecdoteVote, notificationVote, hideNotification }
)(AnecdoteList)

export default ConnectedAnecdoteList
