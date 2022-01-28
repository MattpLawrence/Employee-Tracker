-- View all departments
SELECT * FROM department;

-- View all Roles
SELECT * FROM role;

-- View all employees
SELECT * FROM employee;

--Add department
INSERT INTO role(title, salary, department_id)
VALUES(`${Department}`);

--Update employee role

SELECT 
  first_name,
  last_name,
  id,
  role
FROM
  employee
WHERE
  first_name = `${first_name}`,
  last_name = `${last_name}`;


UPDATE employee
SET
  role = `${newRole}`,
WHERE
  id = `${returnedID};