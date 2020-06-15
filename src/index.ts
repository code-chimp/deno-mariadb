import { Application } from "./deps.ts";
import BandController from "./controllers/BandController.ts";

import { APP_PORT } from "./config.ts";

const app: Application = new Application({
  controllers: [BandController],
});

await app.run(APP_PORT);
