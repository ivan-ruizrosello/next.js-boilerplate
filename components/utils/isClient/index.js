const isClient = () => {
  return (typeof window !== 'undefined' && window.document);
};

export default isClient;