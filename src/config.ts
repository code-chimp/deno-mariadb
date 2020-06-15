const env = Deno.env;

export const APP_PORT: number = env.get("APP_PORT")
  ? Number(env.get("APP_PORT"))
  : 4000;

export const DB_HOST: string = env.get("DB_HOST") || "localhost";
export const DB_PORT: number = env.get("DB_PORT")
  ? Number(env.get("DB_PORT"))
  : 3306;
export const DB_USER: string = env.get("DB_USER") || "";
export const DB_PASS: string = env.get("DB_PASS") || "";
export const DB: string = env.get("DB") || "";

