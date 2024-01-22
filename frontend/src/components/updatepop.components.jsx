import axios from 'axios';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function Update({student}) {

    const[fname,setFname]=useState(student.f_name)
    const[lname,setLname]=useState(student.l_name)
    const[course,setCourse]=useState(student.course)


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleUpdate =(id)=>{
    const updated={
        f_name:fname,
        l_name:lname,
        course:course
    }
    axios.put(`http://localhost:8000/api/students/${id}`,updated)
    .then(alert('Successfully Updated Refresh the page to see updated data'))
    .catch(error=>console.error('error',error))
    handleClose();
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Update
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
              <Form.Control as="textarea" rows={1} value={fname} onChange={(e)=>{setFname(e.target.value)}}/>
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
          <Button variant="primary" onClick={()=>handleUpdate(student.id)} >
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Update;