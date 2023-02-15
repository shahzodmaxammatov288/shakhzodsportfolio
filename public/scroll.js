$(document).ready(function () {
  let links = $(".nav-link");

  links.click(function (e) {
    e.preventDefault();
    $("body, html").animate({ scrollTop: $(this.hash).offset().top - 80 }, 500);
  });
});
