 // Sample attendance data (replace this with your actual data)
var attendanceData = {
    // No attendance data initially
  };
  
  // Function to calculate the total number of classes
  function calculateTotalClasses() {
    return Object.keys(attendanceData).length;
  }
  
  // Function to calculate the number of classes attended (present)
  function calculatePresentClasses() {
    var presentCount = 0;
    for (var date in attendanceData) {
      if (attendanceData[date] === "present") {
        presentCount++;
      }
    }
    return presentCount;
  }
  
  // Function to calculate the number of classes missed (absent)
  function calculateAbsentClasses() {
    var absentCount = 0;
    for (var date in attendanceData) {
      if (attendanceData[date] === "absent") {
        absentCount++;
      }
    }
    return absentCount;
  }
  
  // Update the values in the HTML
  function updateAttendedClasses() {
    var totalClassesElement = document.getElementById("totalClasses");
    var presentClassesElement = document.getElementById("presentClasses");
    var absentClassesElement = document.getElementById("absentClasses");
  
    var totalClasses = calculateTotalClasses();
    var presentClasses = calculatePresentClasses();
    var absentClasses = calculateAbsentClasses();
  
    totalClassesElement.textContent = totalClasses;
    presentClassesElement.textContent = presentClasses;
    absentClassesElement.textContent = absentClasses;
  }
  
  // Call the update function to populate the initial values
  updateAttendedClasses();
  