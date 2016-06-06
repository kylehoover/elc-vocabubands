import React from 'react'
import List from './List.js'
import Nav from './Nav.js'

var ListLayout = React.createClass({
  render: function () {
    return (
      <div>
        <Nav />
        <List listID={1} />
      </div>
    )
  }
})

export default ListLayout
