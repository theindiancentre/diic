
/**
 * Helper utility to handle smooth scrolling to page sections
 * Optimized for mobile and desktop experiences
 */
export function smoothScrollTo(elementId: string, offset: number = 70): void {
  const element = document.getElementById(elementId);
  
  if (!element) {
    console.warn(`Element with id "${elementId}" not found`);
    return;
  }
  
  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - offset;
  
  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  });
}

/**
 * Update the scroll progress indicator based on page scroll position
 */
export function updateScrollProgress(): void {
  const progressIndicator = document.getElementById('scroll-progress');
  
  if (!progressIndicator) return;
  
  const scrollTotal = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrollProgress = Math.min((window.scrollY / scrollTotal) * 100, 100);
  
  progressIndicator.style.width = `${scrollProgress}%`;
}

/**
 * Initialize scroll event listeners for the page
 * @returns A cleanup function to remove event listeners
 */
export function initScrollHandlers(): () => void {
  // Set up scroll progress indicator
  window.addEventListener('scroll', updateScrollProgress);
  
  // Set up initial scroll position check
  document.addEventListener('DOMContentLoaded', updateScrollProgress);
  
  // Return cleanup function
  return () => {
    window.removeEventListener('scroll', updateScrollProgress);
  };
}
