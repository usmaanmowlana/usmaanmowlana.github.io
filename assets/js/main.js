document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. PARTICLES CONFIG (The Constellation Background) ---
    if(typeof particlesJS !== 'undefined') {
        particlesJS("particles-js", {
            "particles": {
                "number": { "value": 60, "density": { "enable": true, "value_area": 800 } },
                "color": { "value": "#64ffda" }, /* The Cyan Accent */
                "shape": { "type": "circle" },
                "opacity": { "value": 0.4 },
                "size": { "value": 3 },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#64ffda",
                    "opacity": 0.2,
                    "width": 1
                },
                "move": { "enable": true, "speed": 3 }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": { "onhover": { "enable": true, "mode": "grab" } }
            },
            "retina_detect": true
        });
    }

    // --- 2. EXPERIENCE TABS LOGIC ---
    window.openJob = function(evt, jobName) {
        // Hide all tab content
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("job-content");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
            tabcontent[i].classList.remove("active");
        }

        // Remove active class from buttons
        tablinks = document.getElementsByClassName("tab-btn");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }

        // Show current tab and add active class to button
        document.getElementById(jobName).style.display = "block";
        // Small timeout to allow fade animation to trigger
        setTimeout(() => document.getElementById(jobName).classList.add("active"), 10);
        evt.currentTarget.className += " active";
    };

    // --- 3. SLIDESHOW LOGIC (Multiple Sliders) ---
    // Initialize all sliders
    initSlider('slider-rmg');
    initSlider('slider-water');
    initSlider('slider-assembly'); // Added
    initSlider('slider-bigmatch'); // Added

    window.plusSlides = function(n, sliderId) {
        showSlides(slideIndices[sliderId] += n, sliderId);
    }
});

// Object to track indices for different sliders
let slideIndices = {
    'slider-rmg': 1,
    'slider-water': 1,
    'slider-assembly': 1, // Added
    'slider-bigmatch': 1  // Added
};

function initSlider(sliderId) {
    if(document.getElementById(sliderId)) {
        showSlides(1, sliderId);
    }
}

function showSlides(n, sliderId) {
    let container = document.getElementById(sliderId);
    if(!container) return;

    let slides = container.getElementsByClassName("slide");
    
    // Wrap around logic
    if (n > slides.length) { slideIndices[sliderId] = 1 }
    if (n < 1) { slideIndices[sliderId] = slides.length }
    
    // Hide all
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    
    // Show active
    slides[slideIndices[sliderId]-1].style.display = "block";  
}