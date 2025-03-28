export const saveToLocalStorage = (data, location) => {
  localStorage.setItem(location, JSON.stringify(data));
};
export const loadFromLocalStorage = data => {
  return JSON.parse(localStorage.getItem(data));
};
