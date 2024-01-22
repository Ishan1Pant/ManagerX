import React from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';


const ManageStudents = () => {
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
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td><Button variant="outline-warning">Update</Button>
                            <Button variant="outline-warning">Delete</Button>
                        </td>
                    </tr>
                    
                </tbody>
            </Table>
            <Button variant="outline-success">Add another Student</Button>
        </div>
    );
}

export default ManageStudents
