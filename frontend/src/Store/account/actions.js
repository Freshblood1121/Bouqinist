import { API_URL } from "../../Utils/Constants";

export const OPEN_MODAL = "ACCOUNT::OPEN_MODAL";
export const CLOSE_MODAL = "ACCOUNT::CLOSE_MODAL";

export const openModal = () => ({
  type: OPEN_MODAL,
});

export const closeModal = () => ({
  type: CLOSE_MODAL,
});
