function goToLoginPage() {
    const user = document.getElementById('user').value;
    if (user === 'admin') {
      window.location.href = 'admin_login.html';
    } else if (user === 'faculty') {
      window.location.href = 'faculty_login.html';
    } else if (user === 'student') {
      window.location.href = 'student_login.html';
    }
  }
  
  function addFaculty() {
    var facultyName = document.getElementById("facultyName").value;
    var facultyID = document.getElementById("facultyID").value;
    // Call your backend API or database to add the faculty
    console.log("Adding faculty:", facultyName, facultyID);
  }
  
  function removeFaculty() {
    var facultyID = document.getElementById("facultyID").value;
    // Call your backend API or database to remove the faculty
    console.log("Removing faculty:", facultyID);
  }
  
  function trackAttendance() {
    var studentID = document.getElementById("studentID").value;
    var studentPassword = document.getElementById("studentPassword").value;
    // Call your backend API or database to track attendance
    console.log("Tracking attendance for student:", studentID);
  }
  