import React, { Fragment } from 'react'
import Input from './components/Input'
import List from './components/List'

import './App.css'

function App() {
  return (
    <Fragment>
      <div className="container">
        <Input />
        <List />
      </div>
    </Fragment>
  )
}

export default App
