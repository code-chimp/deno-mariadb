import {
  Controller,
  Get,
  HttpStatus,
  OakRequest,
  OakResponse,
  Param,
  Post,
  Response,
  Request,
  NotFoundException,
} from "../deps.ts";
import { BandRepository } from "../repositories/BandRepository.ts";
import { IBand } from "../types/IBand.ts";

@Controller("/bands")
export default class BandController {
  private repository: BandRepository;

  constructor() {
    this.repository = new BandRepository();
  }

  @Get("/")
  @HttpStatus(200)
  async getAll() {
    return {
      success: true,
      data: await this.repository.findAll(),
    };
  }

  @Get("/:id")
  @HttpStatus(200)
  async get(@Param("id") id: string) {
    const result = await this.repository.find(Number(id));

    if (result) {
      return {
        success: true,
        data: result,
      };
    } else {
      throw new NotFoundException();
    }
  }

  @Post("/")
  async create(
    @Request() request: OakRequest,
    @Response() response: OakResponse
  ) {
    const body = await request.body();

    if (!request.hasBody) {
      response.status = 400;
      response.body = {
        success: false,
        msg: "The request is empty",
      };
    } else {
      const band: IBand = body.value;
      const newId = await this.repository.add(band);

      if (newId) {
        band.id = newId;
        response.status = 200;
        response.body = {
          success: true,
          data: band,
        };
      } else {
        response.status = 500;
        response.body = {
          success: false,
          msg: "There was an error inserting the new Band",
        };
      }
    }
  }
}
