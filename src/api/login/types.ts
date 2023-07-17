export type UserLoginType = {
  username: string;
  password: string;
};

export type UserLoginResponseType = {
  token: string;
};

export type MenuType = {
  id: string;
  title: string;
  parentId: string;
  name: string;
  icon: string;
  hidden: boolean;
  sort: number;
  children: MenuType[];
};

export type UserType = {
  userId: string;
  avatar: string;
  roles: string | string[];
  menus: MenuType[];
};
