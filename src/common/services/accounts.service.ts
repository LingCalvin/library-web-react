import { AxiosInstance } from 'axios';
import ApiClient from './api-client';

class AccountsService {
  constructor(private http: AxiosInstance) {}

  requestPasswordReset(email: string) {
    return this.http.post('/accounts/password-reset-tokens', { email });
  }

  resetPassword(token: string, password: string) {
    return this.http.post('/accounts/password-resets', { token, password });
  }
}

const accountsService = new AccountsService(ApiClient);
export default accountsService;
