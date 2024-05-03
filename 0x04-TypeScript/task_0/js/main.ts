interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

let student1: Student = {
  firstName: 'John',
  lastName: 'Doe',
  age: 18,
  location: 'New York',
};

let student2: Student = {
  firstName: 'Mary',
  lastName: 'Doe',
  age: 20,
  location: 'New York',
};

let studentList = Array<Student>(student1, student2);

// Create a table
let table = document.createElement('table');

// Create table header
let thead = document.createElement('thead');
let headerRow = document.createElement('tr');
let nameHeader = document.createElement('th');
nameHeader.textContent = 'firstName';
let locationHeader = document.createElement('th');
locationHeader.textContent = 'Location';
headerRow.appendChild(nameHeader);
headerRow.appendChild(locationHeader);
thead.appendChild(headerRow);
table.appendChild(thead);

// Create table body
let tbody = document.createElement('tbody');

// For each student, append a new row to the table
studentList.forEach((student) => {
  let row = document.createElement('tr');

  let nameCell = document.createElement('td');
  nameCell.textContent = student.firstName;
  row.appendChild(nameCell);

  let locationCell = document.createElement('td');
  locationCell.textContent = student.location;
  row.appendChild(locationCell);

  tbody.appendChild(row);
});

table.appendChild(tbody);

// Append the table to the document body
document.body.appendChild(table);
