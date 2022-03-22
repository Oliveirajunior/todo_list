import React, { Fragment, useEffect, useState } from 'react'
import Edit from './Edit'

import axios from 'axios'

const List = () => {
  const [todos, setTodos] = useState([])

  const getTodos = async () => {
    try {
      const res = await axios.get('/api/tasks')
      setTodos(res.data)
    } catch (err) {
      console.error(err.message)
    }
  }

  const deleteTodo = async id => {
    try {
      const res = await axios.delete(`/api/tasks/${id}`)
      setTodos(todos.filter(todo => todo.id !== id))
      console.log(res.data)
    } catch (err) {
      console.error(err.message)
    }
  }

  useEffect(() => {
    getTodos()
  }, [])
  console.log(todos)
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
          {todos.map(todo => {
            return (
              <tr key={todo.id}>
                <td>{todo.description}</td>
                <td>
                  <Edit todo={todo} />
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteTodo(todo.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </Fragment>
  )

  /* return (
    <div>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>{todo.description}</li>
        ))}
      </ul>
    </div>
  ) */
}

export default List
