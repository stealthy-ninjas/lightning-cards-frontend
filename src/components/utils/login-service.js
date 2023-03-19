import axios from 'axios';

export const logUserIn = async () => {
  try {
    const data = await axios.get('http://127.0.0.1:8080/players/create');
    return data;
  } catch (error) {
    console.log(error);
    return 'error';
  }
};
