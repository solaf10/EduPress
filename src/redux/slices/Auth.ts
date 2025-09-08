import { User } from "@/app/interfaces";
import { createSlice, current } from "@reduxjs/toolkit";

const initialState: {
  users: Array<User>;
  isAuthenticated: boolean;
  currentUser: User | {};
} = {
  users: [],
  isAuthenticated: false,
  currentUser: {},
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    register: (state, action) => {
      const { userName, mail, password, confirmPassword } = action.payload;
      const isEmailUsed =
        state.users.find((user) => user.mail == mail) != undefined;
      const user =
        password == confirmPassword && !isEmailUsed
          ? { id: state.users.length + 1, mail, userName, password }
          : null;
      if (user != null) {
        state.users.push(user);
        state.isAuthenticated = true;
        state.currentUser = user;
        localStorage.setItem("users", JSON.stringify(state.users));
      } else {
        state.isAuthenticated = false; //to throw an error
      }
    },
    login: (state, action) => {
      const { identity, password, isRemembered } = action.payload;
      const isEmail = identity.includes("@");
      state.isAuthenticated = true;
      const user = state.users.find((user) =>
        isEmail
          ? user.mail == identity
          : user.userName.toLowerCase() == identity.toLowerCase()
      );
      if (user == undefined || user?.password != password)
        state.isAuthenticated = false;
      if (state.isAuthenticated && user != undefined) {
        state.currentUser = user;
        if (isRemembered) localStorage.setItem("token", user.id.toString());
      }
    },
    updateUsers: (state, action) => {
      state.users = action.payload;
    },
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
  },
});

export const { register, login, updateUsers, setCurrentUser } =
  authSlice.actions;
export default authSlice.reducer;
