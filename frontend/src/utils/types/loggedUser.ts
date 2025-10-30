export type LoggedUser = {
  username: string;
  role: LoggedUserStatus;
  avatar?: string;
};

export type LoggedUserStatus = "USER" | "ADMIN";
