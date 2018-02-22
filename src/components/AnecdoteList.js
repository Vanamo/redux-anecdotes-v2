import React from 'react'
import { connect } from 'react-redux'
import { notificationCreation, hideNotification } from './../reducers/notificationReducer'
import { anecdoteVote } from './../reducers/anecdoteReducer'
import Filter from './Filter'

class AnecdoteList extends React.Component {
  handleClick = (anecdote) => () => {
    this.props.anecdoteVote(anecdote)
    this.props.notificationCreation(`you voted '${anecdote.content}'`, 5)
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
  { anecdoteVote, notificationCreation, hideNotification }
)(AnecdoteList)

export default ConnectedAnecdoteList
