import axios from 'axios';
import { setUser } from '../reducers/userReducer';

export const register = async (email, password, gender, zodiacSign) => {
    try {
        const response = await axios.post(`http://localhost:5000/api/user/registration`, {
            email,
            password,
            gender,
            zodiacSign
        });
        alert(response.data.message);
    } catch (e) {
        alert(e.response.data.message);
    }
}

export const login = async (email, password) => {
    return async dispatch => {
        try {
            const response = await axios.get(`http://localhost:5000/api/user/login`, {
                email,
                password,
            });
            dispatch(setUser(response.data.user));
            localStorage.setItem('token', response.data.token);
        } catch (e) {
            alert(e.response.data.message);
        }
    }
}