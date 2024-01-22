import React from 'react'
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import { useState, useEffect } from 'react';

const StudentList = () => {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    getStudents();
  }, [])
  const getStudents =()=>{
    axios.get('http://127.0.0.1:8000/api/students')
    .then(response=>setStudents(response.data))
    .catch(error=>console.log('Error',error))
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
              </tr>
            )
          })}

        </tbody>
      </Table>
    </div>
  );
}

export default StudentList
