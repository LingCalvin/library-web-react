import { AxiosInstance } from 'axios';
import ApiClient from './api-client';

class AuthService {
  constructor(private http: AxiosInstance) {}

  login(email: string, password: string) {
    return this.http.post('/auth/access-tokens', { email, password });
  }

  test() {
    return this.http.get('/auth/test');
  }
}

const authService = new AuthService(ApiClient);
export default authService;
