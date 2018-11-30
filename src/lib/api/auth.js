const networkLatency = 1000;

const login = (username, password) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === "seth" && password === "password") {
        resolve({ username: "seth" });
      } else if (username === "seth" && password !== "password") {
        reject(new Error("Your username or password is incorrect"));
      } else if (username === "" || password === "") {
        reject(new Error("Your username or password is incorrect"));
      } else {
        reject(new Error("There was an error while logging in"));
      }
    }, networkLatency);
  });

const logout = () =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, networkLatency);
  });

export default {
  login,
  logout
};
