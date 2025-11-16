var totalMarks = 980;
var marksObtained = 804;

document.write("<h1> Marks Sheet </h1>");
document.write(`<br/> <br/>`);
document.write(`Total marks: ${totalMarks} <br/>`);
document.write(`Marks obtained: ${marksObtained} <br/>`);
document.write(`Percentage: ${(marksObtained / totalMarks) * 100}%`);