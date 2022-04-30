import axios from 'axios';

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