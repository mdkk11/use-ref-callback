export type User = {
  id: number;
  name: string;
  email: string;
};

export const fetchUser = async (id: number): Promise<User> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return { id, name: 'Taro', email: 'taro@example.com' };
};

export const updateUser = async (updatedUser: User): Promise<User> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return updatedUser;
};
