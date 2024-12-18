extend: {
  animation: {
    shimmer: 'shimmer 1.5s infinite linear',
  },
  keyframes: {
    shimmer: {
      '0%': { backgroundPosition: '200%' },
      '100%': { backgroundPosition: '-200%' },
    },
  },
  backgroundImage: {
    'gradient-custom': 'linear-gradient(to right, #D9D9D9 0%, #EDEEF1 50%, #D9D9D9 100%)',
  },
  backgroundSize: {
    custom: '300% 100%',
  },
}     