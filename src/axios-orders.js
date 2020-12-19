import axios from 'axios'; 

const instances = axios.create({
    baseURL: 'https://react-my-burger-e2a98.firebaseio.com/'

});
   
export default instances; 