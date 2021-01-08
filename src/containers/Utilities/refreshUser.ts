import { authService } from 'fbase';

const refreshUser = async () => {
  const user = await authService.currentUser;
};
