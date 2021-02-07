import { AxiosInstance } from 'axios';
import ApiClient from './api-client';

class AccountsService {
  constructor(private http: AxiosInstance) {}

  requestPasswordReset(email: string) {
    return this.http.post('/accounts/password-reset-tokens', { email });
  }
}

const accountsService = new AccountsService(ApiClient);
export default accountsService;
