function navigateToPage() {
    var selectBox = document.getElementById("select-option");
    var selectedValue = selectBox.value;
    
    if (selectedValue) {
      fetch(selectedValue)
        .then(response => response.text())
        .then(data => {
          document.getElementById("content-container").innerHTML = data;
        })
        .catch(error => {
          console.log(error);
        });
    } else {
      document.getElementById("content-container").innerHTML = "";
    }
  }
  