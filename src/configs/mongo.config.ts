import { ConfigService } from "@nestjs/config";
import { TypegooseModuleOptions } from "nestjs-typegoose";

export const getmongoConfig = async (
  configService: ConfigService
): Promise<TypegooseModuleOptions> => {
  return {
    uri: getmongoSting(configService),
    ...getMongoOptions(),
  };
};

const getmongoSting = (configService: ConfigService) =>
  "mongodb://" +
  configService.get("MONGO_LOGIN") +
  ":" +
  configService.get("MONGO_PASSWORD") +
  "@" +
  configService.get("MONGO_HOST") +
  ":" +
  configService.get("MONGO_PORT") +
  "/" +
  configService.get("MONGO_AUTH_DB");

const getMongoOptions = () => ({
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
