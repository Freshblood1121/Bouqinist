import axios from "axios";
import { API_URL } from "../Utils/Constants";
import authHeader from "./auth-header";

class AuthService {
  login(email, password) {
    return axios
      .post(API_URL.LOGIN, { email, password }, { headers: authHeader() })
      .then((response) => {
        if (response.data.token) {
          localStorage.setItem(
            "user",
            JSON.stringify({
              data: response.data.user,
              token: response.data.token,
            })
          );
        }
        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(values) {
    return axios
      .post(
        API_URL.REGISTER,
        {
          first_name: values.firstName,
          last_name: values.lastName,
          email: values.email,
          password: values.password,
          password_confirmation: values.confirmedPassword,
          phone: values.phone,
          country: values.country,
          city: values.city,
          gender: values.gender,
          yo: values.birthdate,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      )
      .then((response) => {
        console.log("response", response.data.token);
        if (response.data.token) {
          localStorage.setItem(
            "user",
            JSON.stringify({
              data: response.data.user,
              token: response.data.token,
            })
          );
        }
        return response.data;
      });
  }

  verificate(email, otp) {
    return axios.post(
      API_URL.VERIFICATE,
      {
        email: email,
        otp: otp,
      },
      { headers: authHeader() }
    );
    return response.data;
  }
}

export default new AuthService();
