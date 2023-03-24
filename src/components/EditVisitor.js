import React, { Component } from 'react'
import axios from 'axios'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { withRouter } from './common/with-router'


class EditVisitor extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstname: '',
            lastname: '',
            email: ''
        }
    }
    componentDidMount() {
        axios.get('http://localhost:5000/visitor/edit-visitor/'+ this.props.router.params.id)
        .then(res => {
            this.setState({
                firstname: res.data.firstname,
                lastname: res.data.lastname,
                email: res.data.email
            })
        })
        .catch(error => {
            console.log(error)
        })
    }
    
    onChangeVisitorFirstname = (e) => {
        this.setState({firstname: e.target.value})
    }
    
    onChangeVisitorLastname = (e) => {
        this.setState({lastname: e.target.value})
    }
    
    onChangeVisitorEmail = (e) => {
        this.setState({email: e.target.value})
    }
    
    //จะส่งค่าไปที่ backend
    onSubmit = (e) => { 
        e.preventDefault() //ข้อมูลที่อยู่ในฟอร์มจะไม่หาย ป้องกันการสูญหายของค่าข้อมูล
        const visitorObject = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            email: this.state.email
        }
        axios.put('http://localhost:5000/visitor/update-visitor/'+ this.props.router.params.id , visitorObject)
        .then(res => {
            console.log(res.data)
        })
        .catch(error => {
            console.log(error)
        })
    
        //set ค่าภายในตัวแปรให้เป็นค่าว่างเปล่าพร้อมที่จะรับข้อมูลที่ใส่ไป
        this.setState({firstname:'', lastname:'', email:''})
        alert('You have to update?')

        this.props.router.navigate('/visitor-list')
    }

  render() {
    return (
      <div>
        <Form onSubmit={this.onSubmit}>
            <Form.Group>
                <Form.Label>Firstname</Form.Label>
                <Form.Control type="text" value={this.state.firstname} onChange={this.onChangeVisitorFirstname} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Lastname</Form.Label>
                <Form.Control type="text" value={this.state.lastname} onChange={this.onChangeVisitorLastname} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" value={this.state.email} onChange={this.onChangeVisitorEmail} />
            </Form.Group>
            <Form.Group className='text-center mt-5'>
                <Button variant='primary' type="submit">Update</Button>
            </Form.Group>
        </Form>
      </div>
    )
  }
}
export default withRouter(EditVisitor)