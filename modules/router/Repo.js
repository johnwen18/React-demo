import React from 'react'

export default React.createClass({
  render() {
    return (
      <div>
        <h2>"/router/repos/:userName/:repoName"</h2>
        <h3>/router/repos/{this.props.params.userName}/{this.props.params.repoName}</h3>
      </div>
    )
  }
})
