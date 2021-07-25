import React, { useState } from 'react';
import Employee from './Employee';

interface IEmployee {
    name: string;
    email: string;
    job: string;

}
const Employees = () => {
    const [employee, setEmployee] = useState<IEmployee>({
        name: "",
        email: "",
        job: ""
    });

    const [employeeList, setEmployeeList] = useState<IEmployee[]>([]);
    console.log("employee", employee);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
        setEmployee({
            ...employee,
            [e.target.name]: e.target.value
        });

    const onClick = () => {
        setEmployeeList([...employeeList, employee]);
        setEmployee({
            name: "",
            email: "",
            job: ""
        })
    }
    console.log("employeeList", employeeList);

    const handleDelete = (email: string) =>{
        const newEmployeeList = employeeList.filter(employee => employee.email !== email);
        setEmployeeList(newEmployeeList);
    }
    return (
        <div>
            <div className="form bg-white p-3 rounded">
                <h2>Employee List</h2>
                <input
                    value={employee.name}
                    onChange={onChange}
                    autoComplete="off"
                    className="form-control my-3"
                    placeholder="Enter name: "
                    type="text"
                    name="name"
                />
                <input
                    value={employee.email}
                    onChange={onChange}
                    autoComplete="off"
                    className="form-control my-3"
                    placeholder="Enter email: "
                    type="email"
                    name="email"
                />
                <input
                    value={employee.job}
                    onChange={onChange}
                    autoComplete="off"
                    className="form-control my-3"
                    placeholder="Enter job: "
                    type="text"
                    name="job"
                />
                <button onClick={onClick} className="btn btn-success">Add Employee</button>
            </div>
            {
                employeeList.map((emp) =>

                    <Employee key={emp.email} name={emp.name} email={emp.email} job={emp.job} handleDelete={handleDelete} />
                )
            }
        </div>
    );
};

export default Employees;