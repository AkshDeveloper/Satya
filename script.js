 // Mobile Menu Toggle
        const menuBtn = document.querySelector('.menu-btn');
        const navLinks = document.getElementById('nav-links');
        const bars = document.querySelectorAll('.bars');
        
        menuBtn.addEventListener('click', () => {
            menuBtn.classList.toggle("btn-click");
            navLinks.classList.toggle('active');
            bars.forEach(bar => {
                bar.classList.toggle('btn-click');
            })
            
        });
        
        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
      
            });
        });
        
        // Header scroll effect
        window.addEventListener('scroll', () => {
            const header = document.querySelector('header');
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
        
        // Work Filter
        const filterBtns = document.querySelectorAll('.filter-btn');
        const workItems = document.querySelectorAll('.work-item');
        
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove active class from all buttons
                filterBtns.forEach(btn => btn.classList.remove('active'));
                // Add active class to clicked button
                btn.classList.add('active');
                
                const filter = btn.getAttribute('data-filter');
                
                workItems.forEach(item => {
                    if (filter === 'all' || item.getAttribute('data-category') === filter) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
        
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });


const videos = document.querySelectorAll('.work-grid video');

videos.forEach(video => {
     const observer = new IntersectionObserver((entries) => {
     const entry = entries[0]; 
     const isMobile = window.matchMedia("(max-width: 500px)").matches;

        if (entry.isIntersecting || isMobile) {
            entry.target.classList.add('videoScroll');
            entry.target.play();
            
        } else {
            entry.target.classList.remove('videoScroll');
            entry.target.pause();
        }
    }, {
        threshold: 0.5,
        
    }
    
    
    );

    observer.observe(video);
});



const skillPro = document.querySelectorAll(".skill-progress");

    skillPro.forEach( (skill) => {
    const skillRun = new IntersectionObserver((entries) =>{
    if(entries[0].isIntersecting){
        entries[0].target.classList.add("progress");
        
    } else {
        entries[0].target.classList.remove("progress"); 
    }
   },
{
    threshold: 1,
    rootMargin: "0px",
})
   skillRun.observe(skill);

});
