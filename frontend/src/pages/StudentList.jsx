import React from 'react'
import Table from 'react-bootstrap/Table';

const StudentList = () => {
  
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
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        
      </tbody>
    </Table>
    </div>
  );
}

export default StudentList
