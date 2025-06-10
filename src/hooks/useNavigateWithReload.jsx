const useNavigateWithReload = () => {
  const navigateAndReload = (path) => {
    window.location.href = path;
  };

  return navigateAndReload;
};

export default useNavigateWithReload;
