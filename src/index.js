import React from 'react'
import { render } from 'react-dom'

render((
  React.DOM.div(null,
  React.DOM.h2(null, "Hello, World!"))
), document.getElementById("root"))