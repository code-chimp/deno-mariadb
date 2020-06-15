import { dso } from "./deps.ts";
import { Band } from "./models/Band.ts";
import { DB, DB_HOST, DB_PASS, DB_PORT, DB_USER } from "./config.ts";

dso.connect({
  hostname: DB_HOST,
  port: DB_PORT,
  username: DB_USER,
  password: DB_PASS,
  db: DB,
});

const band = dso.define(Band);

dso.sync(true);
