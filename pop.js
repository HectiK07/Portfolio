document.addEventListener('DOMContentLoaded', function () {
    const animatedElement = document.querySelector('.project_1');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animatedElement.classList.add('appear');
            } 
        });
    }, {
        threshold: 0.5 // Adjust this threshold as needed
    });

    observer.observe(animatedElement);
});

document.addEventListener('DOMContentLoaded', function () {
  const animatedElement = document.querySelector('.project_2');

  const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              animatedElement.classList.add('appear');
          } 
      });
  }, {
      threshold: 0.5 // Adjust this threshold as needed
  });

  observer.observe(animatedElement);
});

document.addEventListener('DOMContentLoaded', function () {
    const animatedElement = document.querySelector('.project_3');
  
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animatedElement.classList.add('appear');
            } 
        });
    }, {
        threshold: 0.5 // Adjust this threshold as needed
    });
  
    observer.observe(animatedElement);
  });

  document.addEventListener('DOMContentLoaded', function () {
    const animatedElement = document.querySelector('.project_4');
  
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animatedElement.classList.add('appear');
            } 
        });
    }, {
        threshold: 0.5 // Adjust this threshold as needed
    });
  
    observer.observe(animatedElement);
  });

  document.addEventListener('DOMContentLoaded', function () {
    const animatedElement = document.querySelector('.project_5');
  
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animatedElement.classList.add('appear');
            } 
        });
    }, {
        threshold: 0.5 // Adjust this threshold as needed
    });
  
    observer.observe(animatedElement);
  });

  document.addEventListener('DOMContentLoaded', function () {
    const animatedElement = document.querySelector('.project_6');
  
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animatedElement.classList.add('appear');
            } 
        });
    }, {
        threshold: 0.5 // Adjust this threshold as needed
    });

    document.addEventListener('DOMContentLoaded', function () {
        const animatedElement = document.querySelector('.skill');
      
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animatedElement.classList.add('appear');
                } 
            });
        }, {
            threshold: 0.5 // Adjust this threshold as needed
        });
      
        observer.observe(animatedElement);
      });

      document.addEventListener('DOMContentLoaded', function () {
        const animatedElement = document.querySelector('.background_third');
      
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animatedElement.classList.add('appear');
                } 
            });
        }, {
            threshold: 0.5 // Adjust this threshold as needed
        });
      
        observer.observe(animatedElement);
      });
  
    observer.observe(animatedElement);
  });