import axios from 'axios';

export const axiosWithAuth = () => {
    const token = localStorage.getItem('token');

    return axios.create({
        headers: {
            Authorization: token
        },
        baseURL: 'https://random-trinkets.herokuapp.com'
        
        // baseURL: 'https://school-in-the-cloud-keyeric.herokuapp.com'
    })
}