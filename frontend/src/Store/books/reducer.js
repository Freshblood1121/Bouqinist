import { REQUEST_STATUS } from "../../Utils/Constants";
import {
  getBook,
  GET_BOOK,
  DATA_REQUEST,
  DATA_SUCCESS,
  DATA_ERROR,
} from "./actions";

const initialState = {
  books: [
    // {
    //   id: "0cf46c10-84e0-384b-b8af-62c27b16756d",
    //   title: "Scientific Photographer",
    //   author: "Raymundo Brown",
    //   company: "Bosco Inc",
    //   description:
    //     "Sint ut iusto odio aliquid quasi rerum. Nisi voluptas aut inventore libero neque qui explicabo.",
    //   age: 1972,
    //   status: "Medium",
    //   image: "https://via.placeholder.com/640x480.png/001133?text=aut",
    //   created_at: "2023-07-30T18:47:58.000000Z",
    //   updated_at: "2023-07-30T18:47:58.000000Z",
    // },
    // {
    //   id: "432989ff-6c41-34a3-b307-8633109e676b",
    //   title: "Actuary",
    //   author: "Delpha Block",
    //   company: "Barton-Nolan",
    //   description:
    //     "Aut debitis qui quidem dolor ut eius. Nostrum omnis error earum quia.",
    //   age: 1998,
    //   status: "Medium",
    //   image: "https://via.placeholder.com/640x480.png/003399?text=facere",
    //   created_at: "2023-07-30T18:47:58.000000Z",
    //   updated_at: "2023-07-30T18:47:58.000000Z",
    // },
    // {
    //   id: "56a0d07e-bddd-3dd7-9e83-db4b6a8b6932",
    //   title: "Rock Splitter",
    //   author: "Celestino D'Amore",
    //   company: "Glover Group",
    //   description:
    //     "In sint et quibusdam. Rerum quis distinctio nulla ut quis non. Ipsa vero praesentium odio soluta.",
    //   age: 1975,
    //   status: "Medium",
    //   image: "https://via.placeholder.com/640x480.png/00ff55?text=corrupti",
    //   created_at: "2023-07-30T18:47:58.000000Z",
    //   updated_at: "2023-07-30T18:47:58.000000Z",
    // },
    // {
    //   id: "80c957aa-3f2d-320a-a788-f94943b3f473",
    //   title: "Postal Service Clerk",
    //   author: "Kirsten Boehm",
    //   company: "Moen, Russel and Becker",
    //   description:
    //     "Fugiat debitis maxime maiores. Placeat quibusdam neque vero id aut repellat. Aut quia cum porro.",
    //   age: 2014,
    //   status: "Medium",
    //   image: "https://via.placeholder.com/640x480.png/008811?text=quisquam",
    //   created_at: "2023-07-30T18:47:58.000000Z",
    //   updated_at: "2023-07-30T18:47:58.000000Z",
    // },
    // {
    //   id: "8b478c5e-5636-3fc6-9c88-7cd364342275",
    //   title: "Travel Clerk",
    //   author: "Joanne Daniel",
    //   company: "Pfannerstill, Schuster and Rippin",
    //   description:
    //     "Autem eaque sint et excepturi similique ullam. Nemo est sit sunt cumque quia.",
    //   age: 1980,
    //   status: "Medium",
    //   image: "https://via.placeholder.com/640x480.png/00ddaa?text=omnis",
    //   created_at: "2023-07-30T18:47:58.000000Z",
    //   updated_at: "2023-07-30T18:47:58.000000Z",
    // },
    // {
    //   id: "8e7767de-b2b9-32bd-a94f-41b25bb5125f",
    //   title: "Office Machine Operator",
    //   author: "Maximilian Bernier",
    //   company: "Torphy, Bahringer and Howe",
    //   description:
    //     "Nisi sit nemo est in cumque labore. Perspiciatis voluptatem aliquid vel aspernatur distinctio ut.",
    //   age: 2013,
    //   status: "Medium",
    //   image: "https://via.placeholder.com/640x480.png/00ffbb?text=hic",
    //   created_at: "2023-07-30T18:47:58.000000Z",
    //   updated_at: "2023-07-30T18:47:58.000000Z",
    // },
    // {
    //   id: "9fe62635-a777-3f07-879e-e85da5a40eac",
    //   title: "Operating Engineer",
    //   author: "Loren Crooks",
    //   company: "Runolfsdottir, Hauck and Crist",
    //   description:
    //     "Autem aut consequuntur odit et autem. Quam totam sed est rerum qui mollitia recusandae.",
    //   age: 1991,
    //   status: "Medium",
    //   image: "https://via.placeholder.com/640x480.png/007788?text=adipisci",
    //   created_at: "2023-07-30T18:47:58.000000Z",
    //   updated_at: "2023-07-30T18:47:58.000000Z",
    // },
    // {
    //   id: "a2d7cc58-ed2f-326d-b897-39287e522282",
    //   title: "Electro-Mechanical Technician",
    //   author: "Dr. Bethany Dach MD",
    //   company: "Turner, Wisoky and Powlowski",
    //   description:
    //     "Ut temporibus est est dolorum consequatur. Consequatur ut eligendi soluta vero. Et dolor nam magni.",
    //   age: 1990,
    //   status: "Medium",
    //   image: "https://via.placeholder.com/640x480.png/00bb00?text=sit",
    //   created_at: "2023-07-30T18:47:58.000000Z",
    //   updated_at: "2023-07-30T18:47:58.000000Z",
    // },
    // {
    //   id: "a42c2150-37f8-31e4-81c4-246d15bec5e5",
    //   title: "Jewelry Model OR Mold Makers",
    //   author: "Delpha Thiel",
    //   company: "Stanton Inc",
    //   description:
    //     "Ratione numquam doloribus velit aliquam totam. Quasi corrupti est nemo placeat voluptas ut.",
    //   age: 2000,
    //   status: "Medium",
    //   image: "https://via.placeholder.com/640x480.png/000088?text=explicabo",
    //   created_at: "2023-07-30T18:47:58.000000Z",
    //   updated_at: "2023-07-30T18:47:58.000000Z",
    // },
    // {
    //   id: "d37d3b12-46e9-348e-a2e6-0a90d0494795",
    //   title: "Boat Builder and Shipwright",
    //   author: "Dr. Kendrick Huels",
    //   company: "Kuphal Inc",
    //   description:
    //     "Aut ut vitae officia nostrum quasi qui quos. Minus quis cum perferendis eum ea.",
    //   age: 1971,
    //   status: "Medium",
    //   image: "https://via.placeholder.com/640x480.png/002222?text=iusto",
    //   created_at: "2023-07-30T18:47:58.000000Z",
    //   updated_at: "2023-07-30T18:47:58.000000Z",
    // },
  ],
  requestStatus: {
    status: REQUEST_STATUS.IDLE,
    error: "",
  },
};

export const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case DATA_REQUEST: {
      return {
        ...state,
        requestStatus: {
          status: REQUEST_STATUS.PENDING,
          error: "",
        },
      };
    }
    case DATA_SUCCESS: {
      console.log(action.data);
      return {
        ...state,
        books: [...action.data.data],
        requestStatus: {
          status: REQUEST_STATUS.SUCCESS,
          error: "",
        },
      };
    }
    case DATA_ERROR: {
      return {
        ...state,
        requestStatus: {
          status: REQUEST_STATUS.FAILURE,
          error: action.error,
        },
      };
    }
    default:
      return state;
  }
};
