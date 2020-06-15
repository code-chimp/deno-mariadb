import { Band } from "../models/Band.ts";
import { dso, ModelFields, Query } from "../deps.ts";
import { DB, DB_HOST, DB_PASS, DB_PORT, DB_USER } from "../config.ts";
import { IBand } from "../types/IBand.ts";

export class BandRepository {
  private band: Band;

  constructor() {
    dso.connect({
      hostname: DB_HOST,
      port: DB_PORT,
      username: DB_USER,
      password: DB_PASS,
      db: DB,
    });

    this.band = dso.define(Band);
  }

  async findAll(): Promise<Array<ModelFields<Band>>> {
    const query: Query = new Query().table("bands").select("*");

    return await this.band.query(query);
  }

  async find(id: number): Promise<ModelFields<Band> | undefined> {
    return await this.band.findById(id);
  }

  async add(band: IBand): Promise<number | undefined> {
    return await this.band.insert({
      name: band.name,
      genre: band.genre,
      website: band.website,
    });
  }
}
