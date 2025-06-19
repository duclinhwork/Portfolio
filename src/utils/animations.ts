// Intersection Observer for scroll animations
export const useScrollAnimation = () => {
  const observerCallback = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-slide-in-up');
        entry.target.classList.remove('opacity-0', 'translate-y-4');
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
  });

  return observer;
};

// Smooth scroll to element
export const scrollToElement = (elementId: string) => {
  const element = document.getElementById(elementId);
  if (element) {
    const headerHeight = 80; // Account for sticky header
    const elementPosition = element.offsetTop - headerHeight;
    
    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth'
    });
  }
};

// Stagger animation delay
export const getStaggerDelay = (index: number, baseDelay = 100) => {
  return `${index * baseDelay}ms`;
};

// Scroll progress indicator
export const useScrollProgress = () => {
  const updateScrollProgress = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    
    const progressBar = document.getElementById('scroll-progress');
    if (progressBar) {
      progressBar.style.width = `${scrollPercent}%`;
    }
  };

  window.addEventListener('scroll', updateScrollProgress);
  return () => window.removeEventListener('scroll', updateScrollProgress);
};

// Viewport height helper for mobile
export const setVhProperty = () => {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
};

// Initialize animations
export const initAnimations = () => {
  const observer = useScrollAnimation();
  
  // Observe all animatable elements
  const animatableElements = document.querySelectorAll('.card, section');
  animatableElements.forEach((el) => {
    el.classList.add('opacity-0', 'translate-y-4', 'transition-all', 'duration-600');
    observer.observe(el);
  });

  // Set viewport height
  setVhProperty();
  window.addEventListener('resize', setVhProperty);

  // Initialize scroll progress
  const cleanup = useScrollProgress();

  return () => {
    observer.disconnect();
    cleanup();
    window.removeEventListener('resize', setVhProperty);
  };
}; 