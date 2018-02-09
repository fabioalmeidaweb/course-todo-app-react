import React from 'react'

export default props => (
  <heaer className="page-header">
    <h2>{props.name} <small>{props.small}</small></h2>
    <hr/>
  </heaer>
)