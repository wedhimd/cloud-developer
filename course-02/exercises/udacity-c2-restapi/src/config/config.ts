export const config = {
  dev: {
    username: "dbudigramdev",
    password: "dbudigramdev",
    database: "dbudigramdev",
    host: "dbudigramdev.c20s2o9fdl2c.us-east-1.rds.amazonaws.com",
    dialect: "postgres",
    aws_region: "us-east-1",
    aws_profile: "default",
    aws_media_bucket: "udigramalidev",
  },
  jwt: {
    secret: " ",
  },
  prod: {
    username: "",
    password: "",
    database: "udagram_prod",
    host: "",
    dialect: "postgres",
  },
};
