// userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    uid: null,
    displayName: '',
    email: '',
    emailVerified: '',
    metadata: [],
    phoneNumber: '',
    providerData:[],
    providerId:'',
    stsTokenManager: [],
    uid: []
  },
  reducers: {
    setUser: (state, action) => {
        // Save data to sessionStorage
        sessionStorage.setItem('userData', JSON.stringify(action.payload));
      // Update user data when a user signs in or updates their profile
      return { ...state, ...action.payload };
    },
    clearUser: (state) => {
      // Clear user data when the user signs out
      sessionStorage.removeItem('userData');
        return {
            uid: null,
            displayName: '',
            email: '',
            emailVerified: '',
            metadata: [],
            phoneNumber: '',
            providerData: [],
            providerId: '',
            stsTokenManager: [],
            uid: []
        };
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
