export type User = {
  name?: string;
  email?: string;
  age?: number;
  is_vc?: boolean;
  password?: string;
};

export interface UsersState {
  users: User[];
  user: null | User;
  isLoading: boolean;
  error: null | string;
}
