
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: (query: any) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false,
  }),
});

// Mock useInView to always return inView: true
jest.mock('react-intersection-observer', () => ({
  useInView: () => ({
    ref: () => {},
    inView: true
  })
}));