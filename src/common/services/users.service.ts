import { AxiosInstance } from 'axios';
import { CreateUserDto } from '../interfaces/create-user.dto';
import ApiClient from './api-client';

class UsersService {
  constructor(private http: AxiosInstance) {}

  register(createUserDto: CreateUserDto) {
    return this.http.post('/users', createUserDto);
  }
}

const usersService = new UsersService(ApiClient);
export default usersService;
