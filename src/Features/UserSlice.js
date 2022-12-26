import { createSlice } from '@reduxjs/toolkit'
const initialUsers = {
    users: [
        { id: 1, name: 'John', email: 'john@gmail.com' },
        { id: 2, name: 'rasel', email: 'rasel@gmail.com' }
    ]
}
export const userSlice = createSlice({
    name: "users",
    initialState: initialUsers,
    reducers: {
        showUsers: (state) => state,
        addUsers: (state, action) => {
            state.users.push(action.payload);
        },
        deleteUser: (state, action) => {
            const id = action.payload;
            state.users = state.users.filter(user => user.id !== id);
        },
        updateUser: (state, action) => {

            const { id, name, email } = action.payload;
            const isUserExist = state.users.filter(user => user.id === id)
            if (isUserExist) {
                isUserExist[0].name = name;
                isUserExist[0].email = email;
            }

        }

    }

})
export const { showUsers, addUsers, deleteUser, updateUser } = userSlice.actions;
export default userSlice.reducer;