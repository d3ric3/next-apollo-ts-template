import { IResolvers } from "@graphql-tools/utils";
import { merge } from "lodash";
import { UserResolvers } from "./resolvers/UserResolver";

const resolversMap: IResolvers = merge(UserResolvers);

export default resolversMap;
