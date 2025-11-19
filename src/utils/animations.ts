// src/utils/animations.ts
export const animateCounter = (
  element: HTMLElement,
  target: number,
  duration: number = 2000
): void => {
  const start = parseInt(element.innerText) || 0;
  const increment = (target - start) / (duration / 16);

  const updateCounter = () => {
    const current = parseInt(element.innerText) || start;
    if (current < target) {
      element.innerText = Math.ceil(current + increment).toString();
      requestAnimationFrame(updateCounter);
    } else {
      element.innerText = target.toString();
    }
  };
  updateCounter();
};

export const scrollToSection = (sectionId: string): void => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};