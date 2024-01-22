import React from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Popover from '../components/popup.components';
import Update from '../components/updatepop.components';


const ManageStudents = () => {

    const [students, setStudents] = useState([])
    useEffect(() => {
        getStudents();
    }, [])
    const getStudents = () => {
        axios.get('http://127.0.0.1:8000/api/students')
            .then(response => setStudents(response.data))
            .catch(error => console.error('error', error))
    }
    const handleDelete =(id)=>[
        axios.delete(`http://localhost:8000/api/students/${id}`)
        .then(alert('Successfully Deleted Refresh the page to see updated data'))
        .catch(error=>console.log('error',error))
    ]
    const handleUpdate =()=>{

    }

    return (
        <div className='table'>
            <Table striped bordered hover variant="dark" >
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Course</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student) => {
                        return (
                            <tr key={student.id}>
                                <td>{student.id}</td>
                                <td>{student.f_name}</td>
                                <td>{student.l_name}</td>
                                <td>{student.course}</td>
                                <td>
                                    <Update student={student}/>
                                    <Button variant="outline-warning" onClick={()=>{handleDelete(student.id)}}>Delete</Button>
                                </td>
                            </tr>
                        )
                    })}

                </tbody>
            </Table>
            <Popover />
        </div>
    );
}

export default ManageStudents
