self.initializeEntryAnimation = function() {
    var observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                self.startEntryAnimation(entry.target);
            } else {
                self.stopEntryAnimation(entry.target);
            }
        });
    }, { threshold: 0.5 }); // 0.5 means 50% of the target element must be visible within the root element to trigger the callback

    var svgViews = document.querySelectorAll(".svg-view");
    svgViews.forEach(function(view) {
        observer.observe(view);
    });
}
const link = document.getElementById("my-link");
document.querySelector('a[data-href]').addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = this.getAttribute('data-href');
});
link.addEventListener("click", function() {
  window.location.href = "https://youtu.be/nbZQvSH0vrY?si=P4ygq7zCGJMV9mek";
});

self.startEntryAnimation = function(view) {
    // Add your entry animation code here
    // For example, you can use CSS animations or JavaScript animations
    view.classList.add("entry-animation");
}

self.stopEntryAnimation = function(view) {
    // Remove your entry animation code here
    // For example, you can use CSS animations or JavaScript animations
    view.classList.remove("entry-animation");
}