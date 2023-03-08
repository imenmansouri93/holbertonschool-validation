import axios from 'axios'
const UserService = {}

UserService.register = function ( data ) {
    return axios.post('http://localhost:5000/users/signup', data)
}

export default UserService;