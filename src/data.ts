export const API_KEY = "AIzaSyALeqpDqx7G-2z-OhXshSI4CY19zdnpInU";

export const value_converter = (value: number) => {
  if (value >= 1000000) {
    return Math.floor(value / 1000000) + "M";
  } else if (value >= 1000) {
    return Math.floor(value / 1000) + "K";
  } else {
    return value;
  }
};
