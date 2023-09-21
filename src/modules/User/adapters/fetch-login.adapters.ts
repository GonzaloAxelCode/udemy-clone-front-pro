import { EndpointUser, User } from "@/modules/User/models/user.models";

export const createAdapter = (user: EndpointUser) => {
  const formatedUser: User = {
    name: user.firstName,
  };

  return formatedUser;
};
