import React, { Component } from 'react'
import axios from 'axios'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

export default class Visitorlist extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      visitor: [] 
    }
  }
  componentDidMount() {
    this.getAllVisitor()
  }
  getAllVisitor() {
    axios.get('http://localhost:5000/visitor/')
    .then(res => {
      this.setState({ 
        visitor: res.data
      })
    }) 
    .catch((error) => {
      console.log(error)
    })
  }

  deleteVisitor = (id) => {
    axios.delete('http://localhost:5000/visitor/delete-visitor/'+id)
    .then((res) => {
      this.getAllVisitor()
    })
    .catch((error) => {
      console.log(error)
    })
  }

  render() {
    return (
      <div>
        <h5>Visitor Information List</h5>
        <br/>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>No.</th>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
            this.state.visitor.map((res, index) => (
            <tr key={res._id}>
              <td >{index+1}</td>
              <td>{res.firstname}</td>
              <td>{res.lastname}</td>
              <td>{res.email}</td>
              <td>
                <Link className='btn btn-warning sm' path={"edit-visitor/:id"} to={'/edit-visitor/'+res._id}>Edit</Link>
                {' '}
                <Button className='btn btn-danger sm' onClick={() => { window.confirm('Are you sure? You have to delete this record?') && this.deleteVisitor(res._id)}}>Delete</Button>
              </td>
            </tr>
            ))}

          </tbody>
        </Table>
      </div>
    )
  }
}
