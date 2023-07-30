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
