export const getDefaultColorScheme = () => {
  const defaultColorScheme = localStorage.getItem("default-color");
  if (defaultColorScheme === null) {
    localStorage.setItem("default-color", "dark-mode");
    return "dark-mode";
  } else {
    return defaultColorScheme;
  }
};
