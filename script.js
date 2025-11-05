 // Mobile Menu Toggle
        const menuBtn = document.querySelector('.menu-btn');
        const navLinks = document.getElementById('nav-links');
        const bars = document.querySelectorAll('.bars');
        const blur = document.querySelector('.blur');
        
        menuBtn.addEventListener('click', () => {
            menuBtn.classList.toggle("btn-click");
            navLinks.classList.toggle('active');
            blur.classList.toggle('on-off');
            bars.forEach(bar => {
                bar.classList.toggle('btn-click');
            })
            
        });
        
        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                blur.classList.toggle('on-off');
      
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

        // Video slider
            const videoItems = document.querySelectorAll('.video');
            const leftArrow = document.querySelector('.left');
            const rightArrow = document.querySelector('.right');
            const secondVideo = document.querySelector('.second-video');
            
            let currentVideoIndex = 0;
            const totalVideos = videoItems.length;
           
            leftArrow.addEventListener('click', () => {
                currentVideoIndex = (currentVideoIndex - 1 + totalVideos) % totalVideos;
                updateVideoSlider();
                secondVideo.classList.add("left-right");
            });
            
            rightArrow.addEventListener('click', () => {
                currentVideoIndex = (currentVideoIndex + 1) % totalVideos;
                updateVideoSlider();
                secondVideo.classList.add("left-right");
            });
            
            function updateVideoSlider() {
                videoItems.forEach((video, index) => {
                    video.style.display = index === currentVideoIndex ? 'block' : 'none';
                });
            }
         


const videos = document.querySelectorAll('.video-container video');

videos.forEach(video => {
     const observer = new IntersectionObserver((entries) => {
     const entry = entries[0]; 

        if (entry.isIntersecting) {
            entry.target.play();
            
        } else {
            entry.target.pause();
        }
    }, {
        
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


const form = document.getElementById('contact-form');
  const recipient = 'akshaykumaraditya01@gmail.com';

  function encodeMailParam(text) {
    return encodeURIComponent(text).replace(/%0A/g, '%0D%0A');
  }

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const subjectRaw = document.getElementById('subject').value.trim();
    const messageRaw = document.getElementById('message').value.trim();

    const subject = subjectRaw || 'Portfolio Contact';
    const bodyPlain =
`Name: ${name}
${messageRaw}

---
Sent from portfolio contact form`;

    // build mailto link
    const mailto = `mailto:${recipient}?subject=${encodeMailParam(subject)}&body=${encodeMailParam(bodyPlain)}`;

    try {
      window.location.href = mailto;

      setTimeout(async () => {
        const confirmFallback = confirm("If your mail didn't open, click OK to copy the message to clipboard so you can paste it into your email manually.");
        if (confirmFallback) {
          try {
            await navigator.clipboard.writeText(bodyPlain);
            alert("Message copied to clipboard. Now open your email, compose a new email to " + recipient + " and paste.");
          } catch (err) {
            alert("Couldn't copy to clipboard. Please manually copy the message:\n\n" + bodyPlain);
          }
        }
      }, 800);
    } catch (err) {
      // fallback if window.location.href fails
      try {
        await navigator.clipboard.writeText(bodyPlain);
        alert("Couldn't open mail. The message has been copied to clipboard — please paste it into an email addressed to " + recipient);
      } catch (err2) {
        alert("Couldn't open mail and couldn't copy to clipboard. Please manually email to " + recipient + " with this message:\n\n" + bodyPlain);
      }
    }
  });