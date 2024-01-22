import axios from 'axios';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function Popover() {
    const[fname,setFname]=useState('')
    const[lname,setLname]=useState('')
    const[course,setCourse]=useState('')


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleAddStudent =()=>{
    const newStudent ={
        f_name:fname,
        l_name:lname,
        course:course
    }
    axios.post('http://127.0.0.1:8000/api/students',newStudent)
    .then(response=>alert('Successfull Insertion Please reload the page to see new data'))
    .catch(error=>console.error('error',error))

    handleClose();
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add New Student
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>First Name</Form.Label>
              <Form.Control as="textarea" rows={1} value={fname} onChange={(event)=>{setFname(event.target.value)}}/>
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Last Name</Form.Label>
              <Form.Control as="textarea" rows={1} value={lname} onChange={(e)=>{setLname(e.target.value)}}/>
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Course</Form.Label>
              <Form.Control as="textarea" rows={1} value={course} onChange={(e)=>{setCourse(e.target.value)}}/>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAddStudent}>
            Save Student
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Popover;