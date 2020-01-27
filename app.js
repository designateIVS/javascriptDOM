const sectionItems = document.querySelectorAll("section");

sectionItems.forEach( function(item) { 
    let listItem = document.createElement("li");
    let itemLink = document.createElement("a"); 
    itemLink.textContent = item.firstElementChild.innerHTML;
    itemLink.className = "nav-item";
    document.getElementById("navbar").appendChild(listItem).appendChild(itemLink);
});

sectionItems.forEach( function(item) { 
    let listItem = document.createElement("li");
    let itemLink = document.createElement("a"); 
    itemLink.className = "nav-item";
    itemLink.textContent = item.firstElementChild.innerHTML;
    document.getElementById("bubble-menu").appendChild(listItem).appendChild(itemLink);
});


const navItems = document.querySelectorAll(".nav-item");

navItems.forEach(function(item){
    item.addEventListener("click", function(e){
        e.preventDefault();
        const targetId = e.target.innerHTML.toLowerCase();
        const targetSection = document.getElementById(targetId);

        //Scroll target section (#link) intoview
        targetSection.scrollIntoView( { behavior: 'smooth', block: 'center' } );
        
        //Remove class from active class from navItems
        // navItems.forEach(function(item){
        //     if (item.classList.contains("active")) {
        //         item.classList.toggle("active");
        //     } 

        //     // Add classname to .nav-item with that link to same section
        //     if (targetId == item.innerHTML.toLowerCase()) {
        //         item.classList.add("active");
        //     }
        // });

        // Add classname .active to clicked element
        // e.target.classList.add("active");
    });
});

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

