import React from 'react'

class Notification extends React.Component {
  render() {
    const style = {
      border: 'solid',
      padding: 10,
      borderWidth: 1
    }

    const notification = this.props.store.getState().notification

    if (notification) {
      return (
        <div style={style}>
          {notification}
        </div>
      )
    } else {
      return(
        <div></div>
      )
    }
  }
}

export default Notification
