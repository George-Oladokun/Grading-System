function calculateGrade() {
    // Get input values
    var subject1 = parseFloat(document.getElementById("subject1").value);
    var subject2 = parseFloat(document.getElementById("subject2").value);
    var subject3 = parseFloat(document.getElementById("subject3").value);

    // Calculate average
    var average = (subject1 + subject2 + subject3) / 3;

    // Determine the grade based on the average
    var grade = "";
    if (average >= 90) {
        grade = "A";
    } else if (average >= 80) {
        grade = "B";
    } else if (average >= 70) {
        grade = "C";
    } else if (average >= 60) {
        grade = "D";
    } else {
        grade = "F";
    }

    // Display the result
    var resultElement = document.getElementById("result");
    resultElement.innerHTML = "<h4>Average Grade: " + grade + "</h4>";
}
