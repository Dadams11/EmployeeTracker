const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'employee_tracker', // Make sure to replace this with your actual database name
});

// Function to get all departments
function getAllDepartments() {
  return new Promise((resolve, reject) => {
    const query = 'SELECT * FROM department';
    connection.query(query, (error, results) => {
      if (error) reject(error);
      resolve(results);
    });
  });
}

// Function to add a new department
function addDepartment(departmentName) {
  return new Promise((resolve, reject) => {
    const query = 'INSERT INTO department (name) VALUES (?)';
    connection.query(query, [departmentName], (error, results) => {
      if (error) reject(error);
      resolve(results);
    });
  });
}

// Function to get all roles
function getAllRoles() {
  return new Promise((resolve, reject) => {
    const query = 'SELECT * FROM role';
    connection.query(query, (error, results) => {
      if (error) reject(error);
      resolve(results);
    });
  });
}

// Function to add a new role
function addRole(title, salary, department_id) {
  return new Promise((resolve, reject) => {
    const query = 'INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)';
    connection.query(query, [title, salary, department_id], (error, results) => {
      if (error) reject(error);
      resolve(results);
    });
  });
}

// Function to get all employees
function getAllEmployees() {
  return new Promise((resolve, reject) => {
    const query = `
      SELECT 
        e.id, 
        e.first_name, 
        e.last_name, 
        r.title, 
        d.name AS department, 
        r.salary, 
        CONCAT(m.first_name, ' ', m.last_name) AS manager
      FROM employee e
      LEFT JOIN role r ON e.role_id = r.id
      LEFT JOIN department d ON r.department_id = d.id
      LEFT JOIN employee m ON e.manager_id = m.id
    `;
    connection.query(query, (error, results) => {
      if (error) reject(error);
      resolve(results);
    });
  });
}

// Function to add a new employee
function addEmployee(firstName, lastName, roleId, managerId) {
  return new Promise((resolve, reject) => {
    // If managerId is empty (left blank), set it to NULL
    if (!managerId) {
      managerId = null;
    }

    const query = 'INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)';
    connection.query(query, [firstName, lastName, roleId, managerId], (error, results) => {
      if (error) reject(error);
      resolve(results);
    });
  });
}

// Function to update an employee's role
function updateEmployeeRole(employeeId, newRoleId) {
  return new Promise((resolve, reject) => {
    const query = 'UPDATE employee SET role_id = ? WHERE id = ?';
    connection.query(query, [newRoleId, employeeId], (error, results) => {
      if (error) reject(error);
      resolve(results);
    });
  });
}

module.exports = {
  getAllDepartments,
  addDepartment,
  getAllRoles,
  addRole,
  getAllEmployees,
  addEmployee,
  updateEmployeeRole,
};
