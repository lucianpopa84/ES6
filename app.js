$(document).ready(function () {
  $('#studentsLoad').click(function () {
    var myRequest = new XMLHttpRequest();
    myRequest.open('GET', 'https://lucianpopa84.github.io/ES6/students.json');
    myRequest.onload = function () {
      var studentsData = JSON.parse(myRequest.responseText);

      if ($(".card")[0]) {
        $(".card").remove(); // remove previous cards
      }

      var htmlContent = `<div class="card-deck">`;
      for (k = 0; k < studentsData.length; k++) {
        var { firstName, lastName, averageGrade } = studentsData[k];
        htmlContent += `
            <div class="card bg-light mb-3 border-secondary">
            <img class="card-img-top" src="https://lucianpopa84.github.io/ES6/Media/s${k + 1}.jpg" alt="Card image">
            <div class="card-body">
              <h5 class="card-title">${firstName} ${lastName}</h5>
              <p class="card-text">Student</p>
            </div>
            <div class="card-footer">
            Average grade = ${averageGrade}
          </div>
          </div>
          `;
      }
      htmlContent += `</div>`;

      $(".card-deck").replaceWith(htmlContent);
    };

    myRequest.send();
  });

  $('#teachersLoad').click(function () {
    var myRequest = new XMLHttpRequest();
    myRequest.open('GET', 'https://lucianpopa84.github.io/ES6/teachers.json');
    myRequest.onload = function () {
      var teachersData = JSON.parse(myRequest.responseText);

      if ($(".card")[0]) {
        $(".card").remove(); // remove previous cards
      }

      var htmlContent = `<div class="card-deck">`;
      for (k = 0; k < teachersData.length; k++) {
        var { firstName, lastName, title } = teachersData[k];
        htmlContent += `
            <div class="card bg-light mb-3 border-secondary">
            <img class="card-img-top" src="https://lucianpopa84.github.io/ES6/Media/t${k + 1}.jpg" alt="Card image">
            <div class="card-body">
              <h5 class="card-title">${firstName} ${lastName}</h5>
              <p class="card-text">Teacher</p>
            </div>
            <div class="card-footer">
            Title: ${title}
          </div>
          </div>
          `;
      }
      htmlContent += `</div>`;

      $(".card-deck").replaceWith(htmlContent);
    };

    myRequest.send();
  });

});
