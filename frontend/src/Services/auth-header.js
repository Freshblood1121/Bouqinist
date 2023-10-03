export default function authHeader() {
  const user = JSON.parse(localStorage.getItem("user"));

  if (user && user.token) {
    return {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${user.token}`,
    };
  } else {
    return {
      "Content-Type": "application/json",
      Accept: "application/json",
    };
  }
}
