const inquirer = require('inquirer');
const {
  getAllDepartments,
  getAllRoles,
  getAllEmployees,
  addDepartment,
  addRole,
  addEmployee,
  updateEmployeeRole,
} = require('./db');

function startApp() {
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'option',
        message: 'Choose an option:',
        choices: [
          'View all departments',
          'View all roles',
          'View all employees',
          'Add a department',
          'Add a role',
          'Add an employee',
          'Update an employee role',
        ],
      },
    ])
    .then((answers) => {
      switch (answers.option) {
        case 'View all departments':
          getAllDepartments()
            .then((departments) => {
              console.table(departments);
              startApp();
            })
            .catch((error) => {
              console.error('Error fetching departments:', error);
              startApp();
            });
          break;
        case 'View all roles':
          getAllRoles()
            .then((roles) => {
              console.table(roles);
              startApp();
            })
            .catch((error) => {
              console.error('Error fetching roles:', error);
              startApp();
            });
          break;
        case 'View all employees':
          getAllEmployees()
            .then((employees) => {
              console.table(employees);
              startApp();
            })
            .catch((error) => {
              console.error('Error fetching employees:', error);
              startApp();
            });
          break;
        case 'Add a department':
          inquirer
            .prompt([
              {
                type: 'input',
                name: 'departmentName',
                message: 'Enter the name of the department:',
              },
            ])
            .then((answers) => {
              const departmentName = answers.departmentName;
              addDepartment(departmentName)
                .then((result) => {
                  console.log('Department added successfully!');
                  startApp();
                })
                .catch((error) => {
                  console.error('Error adding department:', error);
                  startApp();
                });
            });
          break;
        case 'Add a role':
          // Implement code for adding a role
          break;
        case 'Add an employee':
          // Implement code for adding an employee
          break;
        case 'Update an employee role':
          // Implement code for updating an employee role
          break;
        default:
          console.log('Goodbye!');
          process.exit(0);
      }
    })
    .catch((error) => {
      console.error('Error occurred:', error);
    });
}

startApp();
