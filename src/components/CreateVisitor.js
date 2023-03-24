import React, { Component } from 'react'
import axios from 'axios'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { withRouter } from './common/with-router'
class CreateVisitor extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstname: '',
            lastname: '',
            email: ''
        }
    }

//ถ้าเป็น arrow function ไม่ต้องใช้คำสั่งที่คอมเมนท์ด้านบน

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
    axios.post('http://localhost:5000/visitor/create-visitor',visitorObject)
    .then(res => {
        console.log(res.data)
    })
    .catch(error => {
        console.log(error)
    })

    //set ค่าภายในตัวแปรให้เป็นค่าว่างเปล่าพร้อมที่จะรับข้อมูลที่ใส่ไป
    this.setState({firstname:'', lastname:'', email:''})
    alert('Your submitted')
    this.props.router.navigate('/visitor-list')
}

render() {
    return (
      <div>
        <h5>Fill out Information</h5>
        <br/>
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
                <Button variant='primary' type="submit">Create</Button>
            </Form.Group>
        </Form>
      </div>
    )
}
}
export default withRouter(CreateVisitor)