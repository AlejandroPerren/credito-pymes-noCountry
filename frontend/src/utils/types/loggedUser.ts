export type LoggedUser = {
  username: string;
  role: "USER" | "ADMIN";
  avatar?: string;
};
