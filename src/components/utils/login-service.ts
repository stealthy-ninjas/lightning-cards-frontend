import axios from 'axios';

export const logUserIn = async (userName) => {
  try {
    const data = await axios.post('http://127.0.0.1:8080/players/create', {
      userName
    });
    return data;
  } catch (error) {
    console.log(error);
    return 'error';
  }
};
