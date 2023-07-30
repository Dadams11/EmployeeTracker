-- Drop the existing tables (if they exist)
DROP TABLE IF EXISTS employee;
DROP TABLE IF EXISTS role;
DROP TABLE IF EXISTS department;

-- Create the department table
CREATE TABLE department (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL
);

-- Create the role table
CREATE TABLE role (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  salary DECIMAL(10,2) NOT NULL,
  department_id INT,
  FOREIGN KEY (department_id) REFERENCES department(id)
);

-- Create the employee table
CREATE TABLE employee (
  id INT AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  role_id INT,
  manager_id INT,
  FOREIGN KEY (role_id) REFERENCES role(id),
  FOREIGN KEY (manager_id) REFERENCES employee(id)
);

-- Insert some sample data into the department table
INSERT INTO department (name) VALUES ('Department 1'), ('Department 2'), ('Department 3');

-- Insert some sample data into the role table
INSERT INTO role (title, salary, department_id) VALUES
  ('Role 1', 50000, 1),
  ('Role 2', 60000, 2),
  ('Role 3', 70000, 3);

-- Insert some sample data into the employee table
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES
  ('John', 'Doe', 1, NULL),
  ('Jane', 'Smith', 2, 1),
  ('Bob', 'Johnson', 3, 1);
