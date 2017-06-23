import React from 'react'
import ReactDOM from 'react-dom'

import { Button } from 'element-react'

import 'element-theme-default'

ReactDOM.render((
  <div>
    <h2 style={{color: 'red'}}>Hello, World!</h2>
    <Button type="primary">Hello</Button>
  </div>
), document.getElementById("root"))
