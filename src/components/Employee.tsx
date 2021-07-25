import React from 'react';
import employee from '../images/employee.png';

interface IProps {
    name: string;
    email: string;
    job: string;
    handleDelete: (email: string) => void
}
const Employee = ({ name, email, job, handleDelete }: IProps): JSX.Element => {
    return (
        <div className="card my-3">
            <div className="row">
                <div className="col-md-4">
                    <img src={employee} className="img-fluid m-2 border border-4" alt="employee" />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <p className="card-text"><strong>Name: </strong> {name}</p>
                        <p className="card-text"><strong>Email: </strong>{email}</p>
                        <p className="card-text"><strong>Job: </strong>{job}</p>
                        <button onClick={() => handleDelete(email)} className="btn btn-warning">Delete Employee</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Employee;