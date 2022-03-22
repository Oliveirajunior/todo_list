import axios from 'axios'
import React, { Fragment, useState } from 'react'

const Edit = ({ todo }) => {
  const [description, setDescription] = useState(todo.description)

  const editTodo = async e => {
    e.preventDefault()
    try {
      const body = { description }
      const res = await axios.put(`/api/tasks/${todo.id}`, body)
      console.log(res)
      window.location = '/api/tasks'
    } catch (err) {
      console.error(err.message)
    }
  }
  return (
    <Fragment>
      {/* <!-- Button to Open the Modal --> */}
      <button
        type="button"
        className="btn btn-warning"
        data-toggle="modal"
        data-target={`#id${todo.id}`}
      >
        Edit
      </button>

      {/* <!-- The Modal --> */}
      <div className="modal" id={`id${todo.id}`}>
        <div className="modal-dialog">
          <div className="modal-content">
            {/* <!-- Modal Header --> */}
            <div className="modal-header">
              <h4 className="modal-title">Edit Todo</h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                onClick={() => setDescription(todo.description)}
              >
                &times;
              </button>
            </div>

            {/* <!-- Modal body --> */}
            <div className="modal-body">
              <input
                type="text"
                className="form-control"
                value={description}
                onChange={e => setDescription(e.target.value)}
              ></input>
            </div>

            {/* <!-- Modal footer --> */}
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-warning"
                data-dismiss="modal"
                onClick={e => editTodo(e)}
              >
                Edit
              </button>
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
                onClick={() => setDescription(todo.description)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Edit
