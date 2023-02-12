export type User = {
  id?: number;
  name?: string;
  email?: string;
  age?: number;
  is_vc?: boolean;
  password?: string;
};

export interface UsersState {
  users: User[];
  user: null | User | string | any;
  isLoading: boolean;
  error: null | string;
}
