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
    // ToDo: отсутствует цепочка then() для возврата обработанных данных. Сделать: (response) => return response.data
    return response.data;
  }

  getBookById(id) {
    return axios
      .get(
        `${API_URL.BOOK}/${id}`,
        {
          book_id: id,
        },
        { headers: authHeader() }
      )
      .then((response) => {
        return response.data;
      });
  }

  getBooksDataByCategory(id) {
    return axios
      .get(
        `${API_URL.CATEGORY_BOOKS}/${id}`,
        {
          category_id: id,
        },
        { headers: authHeader() }
      )
      .then((response) => {
        return response.data;
      });
  }

  getUserData() {
    return axios
      .get(`${API_URL.USER}`, {
        headers: authHeader(),
      })
      .then((response) => {
        return response.data;
      });
  }

  setUserData(data) {
    return axios
      .put(
        `${API_URL.SET_USER_DATA}`,
        {
          ...data,
        },
        {
          headers: authHeader(),
        }
      )
      .then((response) => {
        return response.data;
      });
  }

  createAdvertisment(values) {
    const user = JSON.parse(localStorage.getItem("user"));
    // for (var pair of values.image.entries()) {
    //   console.log(pair[0] + ", " + pair[1]);
    // }
    // const data = {
    //   ...values,
    //   company: values.publisher,
    //   status: "Medium",
    //   image: values.image,
    //   cetegories: values.cetegories,
    // };
    return axios
      .post(`${API_URL.CREATE_BOOK}`, values, {
        headers: {
          "Content-Type": "multipart/form-data",
          Accept: "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      })
      .then((response) => {
        return response.data;
      });
  }
}

export default new AuthService();
