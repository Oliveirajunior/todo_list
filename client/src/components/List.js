import React, { Fragment, useEffect, useState } from 'react'
import axios from 'axios'

const List = () => {
  const [todos, setTodos] = useState([])

  /*     const getTodos = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/tasks')
      const jsonData = await response.json()

      setTodos(jsonData)
    } catch (err) {
      console.error(err.message)
    }
  }

  useEffect(() => {
    getTodos()
  }, [])
  console.log(todos) */
  const getTodos = async () => {
    try {
      const res = await axios.get('/api/tasks')
      setTodos(res)
    } catch (err) {
      console.error(err.message)
    }
  }
  useEffect(() => {
    getTodos()
  }, [])
  console.log('saída de dados:')
  console.log(todos.data)
  return (
    <Fragment>
      <table className="table mt-5 text-center">
        <thead>
          <tr>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {/* {todos.map(todo => (
            <tr>
              <td>{todo.decription}</td>
              <td>Edit</td>
              <td>Delete</td>
            </tr>
          ))} */}
        </tbody>
      </table>
    </Fragment>
  )
}

export default List
