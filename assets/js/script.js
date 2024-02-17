//students object including their name, and their scores in each subject
const students = [
  {
    name: 'Alex Smith',
    grades: { English: 88, Math: 92, Logic: 85, Programming: 95, Georgian: 81 }
  },
  {
    name: 'Brittany johnson',
    grades: { English: 91, Math: 88, Logic: 90, Programming: 87, Georgian: 85 }
  },
  {
    name: 'Charlie Davis',
    grades: { English: 84, Math: 94, Logic: 78, Programming: 88, Georgian: 90 }
  },
  {
    name: 'Danielle Brown',
    grades: { English: 95, Math: 85, Logic: 93, Programming: 90, Georgian: 82 }
  },
  {
    name: 'Eric Wilson',
    grades: { English: 89, Math: 90, Logic: 87, Programming: 92, Georgian: 88 }
  }
]

//Generate the table with students object information
const generateTable = (students) => {
  //table html structure with mapping over name and grades
  let tableHTML = `<table id="students">
  <thead>
    <tr>
      <th>Student Name</th>
      ${Object.keys(students[0].grades)
        .map((subject) => `<th>${subject}</th>`)
        .join('')}
    </tr>
  </thead>
  <tbody id="info">
    ${students
      .map(
        (student) => `
      <tr>
        <td>${student.name}</td>
        ${Object.values(student.grades)
          .map((grade) => `<td>${grade}</td>`)
          .join('')}
      </tr>
    `
      )
      .join('')}
  </tbody>
</table>`

  //inserting table inside a container with an id of 'table-container'
  document.getElementById('table-container').innerHTML = tableHTML
}

//calling the function to generate the table
generateTable(students)
