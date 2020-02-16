const sectionItems = document.querySelectorAll("section");

document.addEventListener("DOMContentLoaded", function() {
    let options = {
        threshold: 0.75
    }

    let observer = new IntersectionObserver(sectionInViewport, options);
    
    sectionItems.forEach(function(section) {
        observer.observe(section);
        // console.log(section.id);
    });
});

sectionItems.forEach( function(item) { 
    // Create list items with nested a for top Meny
    let listItem = document.createElement("li");
    let itemLink = document.createElement("a"); 

    // Create list items with nested a for bubble meny
    let bubbleItem = document.createElement("li");
    let bubbleLink = document.createElement("a"); 

    // Get text for link from section H2 (first child)
    itemLink.textContent = item.id;
    bubbleLink.textContent = item.id;

    // Add same class for all links
    itemLink.className = "nav-item";
    bubbleLink.className = "nav-item";

    // Append links for top Meny and bubble Meny
    document.getElementById("navbar").appendChild(listItem).appendChild(itemLink);
    document.getElementById("bubble-menu").appendChild(bubbleItem).appendChild(bubbleLink);
});

const navItems = document.querySelectorAll(".nav-item");

navItems.forEach(function(item){
    item.addEventListener("click", function(e){
        e.preventDefault();
        //Get innerHTML of navItems (a text)
        const targetId = e.target.innerHTML.toLowerCase();

        //Add targetID of navItem (section id that will be scrolled to)
        const targetSection = document.getElementById(targetId);

        //Scroll target section (#link) into view
        targetSection.scrollIntoView( { behavior: 'smooth', block: 'center' } );
    });
});


function sectionInViewport(entries) {
    entries.forEach(function (entry) {
        if(entry.isIntersecting) {
            navItems.forEach(function(item){
                if (item.innerHTML.toLowerCase() === entry.target.id) {
                    item.classList.add("active");
                } else {
                    item.classList.remove("active");
                }
            });
        }
    });
};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.querySelector(".progress-bar").style.width = scrolled + "%";
}

window.onscroll = function() {
    myFunction()
};
