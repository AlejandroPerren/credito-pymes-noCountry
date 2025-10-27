export type LoggedUser = {
  username: string;
  role: "user" | "admin";
  avatar?: string;
};
