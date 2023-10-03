export const setLocalStorage = (name, data) => {
  localStorage.setItem(name, JSON.stringify(data));
};

export const getLocalStorage = (name) => {
  const data = localStorage.getItem(name);
  return JSON.parse(data);
};
