$(function() {

  // your code will go here
  $.ajax( {
    url: "https://www.codeschool.com/users/elpete.json",
    dataType: "jsonp",
    success: function( response ) {
      $( "#badges" ).html( response.courses.completed.map( completedCourse => {
        return `
          <div class="course">
            <h3>${completedCourse.title}</h3>
            <img src="${completedCourse.badge}" alt="${completedCourse.title}" />
            <a href="${completedCourse.url}" target="_blank" class="btn btn-primary">
              See Course
            </a>
          </div>
        `
      } ) );
    }
  } );
});
