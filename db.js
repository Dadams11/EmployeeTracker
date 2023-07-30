const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: '',
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

// Add more functions for other queries, like getAllRoles, addRole, getAllEmployees, etc.

module.exports = {
  getAllDepartments,
  addDepartment,
  // Add other functions here
};
