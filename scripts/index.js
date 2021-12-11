
 document.querySelectorAll(".showmore").forEach(function (p) {
   p.querySelector("a").addEventListener("click", function() {
     p.classList.toggle("show");
     this.textContent = p.classList.contains("show") ? "Show Less" :
     "Show More";
   });
 })
 document.querySelectorAll("a[href^=\"#\"]").forEach((anchor) => {
   anchor.addEventListener("click", function (ev) {
     ev.preventDefault()
     const targetElement = document.querySelector(this.getAttribute("href"));
     targetElement.scrollIntoView({
       block: "start",
       alignToTop: true,
       behavior: "smooth"
     });
   });
 });


 var button = document.getElementById('hamburger-menu'),
    span = button.getElementsByTagName('span')[0];

button.onclick =  function() {
  span.classList.toggle('hamburger-menu-button-close');
};

$('#hamburger-menu').on('click', toggleOnClass);

function toggleOnClass(event) {
  var toggleElementId = '#' + $(this).data('toggle'),
  element = $(toggleElementId);

  element.toggleClass('on');

}


$( '.menu li a' ).on("click", function(){
  $('#hamburger-menu').click();
});


