import axios from 'axios'
import React, { Fragment, useState } from 'react'

const Input = () => {
  const [description, setDescription] = useState('')

  const onSubmitForm = async e => {
    e.preventDefault()

    try {
      const body = { description }
      /* const response = await fetch('http://localhost:5000/api/tasks', {
        method: 'POST',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      }) */
      const res = await axios.post('/api/tasks', body)
      console.log(res.data)
      window.location = '/api/tasks'
    } catch (err) {
      console.error(err.message)
    }
  }
  console.log(description) //teste
  return (
    <Fragment>
      <h1 className="text-center mt-5">PERN TODO LIST</h1>
      <form className="d-flex mt-5" onSubmit={onSubmitForm}>
        <input
          type="text"
          className="form-control"
          value={description}
          onChange={e => setDescription(e.target.value)}
        ></input>
        <button className="btn btn-success">Add</button>
      </form>
    </Fragment>
  )
}

export default Input
