var subject_1 = prompt("Enter Subject 1 name:");
var subject_2 = prompt("Enter Subject 2 name:");
var subject_3 = prompt("Enter Subject 3 name:");

var total_marks = 100;

var marks_subject_1 = +prompt("Enter marks obtained in " + subject_1 + ":");
var marks_subject_2 = +prompt("Enter marks obtained in " + subject_2 + ":");
var marks_subject_3 = +prompt("Enter marks obtained in " + subject_3 + ":");

document.write(
`<table>
    <tr>
        <th>Subject</th>
        <th>Total Marks</th>
        <th>Obtained Marks</th>
        <th>Percentage</th>
    </tr>
    <tr>
        <td>${subject_1}</td>
        <td>${total_marks}</td>
        <td>${marks_subject_1}</td>
        <td>${(marks_subject_1 / total_marks * 100)}%</td>
    </tr>
        <tr>
        <td>${subject_2}</td>
        <td>${total_marks}</td>
        <td>${marks_subject_2}</td>
        <td>${(marks_subject_2 / total_marks * 100)}%</td>
    </tr>
    <tr>
        <td>${subject_3}</td>
        <td>${total_marks}</td>
        <td>${marks_subject_3}</td>
        <td>${(marks_subject_3 / total_marks * 100)}%</td>
    </tr>
    <tr>
        <td></td>
        <th>${total_marks * 3}</th>
        <th>${marks_subject_1 + marks_subject_2 + marks_subject_3}</th>
        <th>${((marks_subject_1 + marks_subject_2 + marks_subject_3) / (total_marks * 3) * 100)}%</th>
    </tr>  
</table>`);