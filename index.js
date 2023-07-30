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
          'Exit',
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
          inquirer
            .prompt([
              {
                type: 'input',
                name: 'title',
                message: 'Enter the title of the role:',
              },
              {
                type: 'input',
                name: 'salary',
                message: 'Enter the salary for the role:',
              },
              {
                type: 'input',
                name: 'departmentId',
                message: 'Enter the department ID for the role:',
              },
            ])
            .then((answers) => {
              const { title, salary, departmentId } = answers;
              addRole(title, salary, departmentId)
                .then((result) => {
                  console.log('Role added successfully!');
                  startApp();
                })
                .catch((error) => {
                  console.error('Error adding role:', error);
                  startApp();
                });
            });
          break;
        case 'Add an employee':
          // Implement code for adding an employee
          break;
        case 'Update an employee role':
          // Implement code for updating an employee role
          break;
        case 'Exit':
          console.log('Goodbye!');
          process.exit(0);
        default:
          console.log('Invalid option. Please choose again.');
          startApp();
      }
    })
    .catch((error) => {
      console.error('Error occurred:', error);
    });
}

startApp();
