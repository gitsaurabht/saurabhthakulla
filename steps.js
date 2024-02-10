document.addEventListener('DOMContentLoaded', function() {
    var steps = document.getElementById('steps');
    var containers = document.querySelectorAll('.container');

    function checkVisibility() {
        var stepsPosition = steps.getBoundingClientRect().top;
        var screenPosition = window.innerHeight / 1.1; 

        if (stepsPosition < screenPosition) {
            steps.classList.add('show-steps');
        } else {
            steps.classList.remove('show-steps'); 
        }

        containers.forEach(function(container) {
            var containerPosition = container.getBoundingClientRect().top;
            var screenPosition = window.innerHeight / 1.3; 

            if (containerPosition < screenPosition) {
                container.classList.add('show-container');
            } else {
                container.classList.remove('show-container'); 
            }
        });
    }

    window.addEventListener('scroll', checkVisibility);
    window.addEventListener('resize', checkVisibility);
});



function animateOnScroll(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
    
        entry.target.classList.add('animate');
      } else {
        
        entry.target.classList.remove('animate');
      }
    });
  }
  
  
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5 
  };
  
  
  const observer = new IntersectionObserver(animateOnScroll, options);
  

  const heading = document.querySelector('.certi-content h2');
  const paragraph = document.querySelector('.certi-content p');
  
  observer.observe(heading);
  observer.observe(paragraph);
  
  document.addEventListener('DOMContentLoaded', function() {
    var partners = document.querySelector('.partners');

    function checkVisibility() {
        var partnersPosition = partners.getBoundingClientRect().top;
        var screenPosition = window.innerHeight;

        if (partnersPosition < screenPosition) {
            partners.classList.add('show-partners');
        } else {
            partners.classList.remove('show-partners');
        }
    }

    window.addEventListener('scroll', checkVisibility);
    window.addEventListener('resize', checkVisibility);

    checkVisibility();
});
