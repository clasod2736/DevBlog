export const getDelay = (index: number) => {
  if (index === 0) {
    return 'animation-delay-75';
  } else return `animation-delay-${index * 100}`;
};
