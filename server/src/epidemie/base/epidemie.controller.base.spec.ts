import { Test } from "@nestjs/testing";
import { INestApplication, HttpStatus, ExecutionContext } from "@nestjs/common";
import request from "supertest";
import { MorganModule } from "nest-morgan";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { EpidemieController } from "../epidemie.controller";
import { EpidemieService } from "../epidemie.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  createdAt: new Date(),
  duree: 42.42,
  id: "exampleId",
  indiceIncidence: 42.42,
};
const CREATE_RESULT = {
  createdAt: new Date(),
  duree: 42.42,
  id: "exampleId",
  indiceIncidence: 42.42,
};
const FIND_MANY_RESULT = [
  {
    createdAt: new Date(),
    duree: 42.42,
    id: "exampleId",
    indiceIncidence: 42.42,
  },
];
const FIND_ONE_RESULT = {
  createdAt: new Date(),
  duree: 42.42,
  id: "exampleId",
  indiceIncidence: 42.42,
};

const service = {
  create() {
    return CREATE_RESULT;
  },
  findMany: () => FIND_MANY_RESULT,
  findOne: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

describe("Epidemie", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: EpidemieService,
          useValue: service,
        },
      ],
      controllers: [EpidemieController],
      imports: [MorganModule.forRoot(), ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /epidemies", async () => {
    await request(app.getHttpServer())
      .post("/epidemies")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
      });
  });

  test("GET /epidemies", async () => {
    await request(app.getHttpServer())
      .get("/epidemies")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
        },
      ]);
  });

  test("GET /epidemies/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/epidemies"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /epidemies/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/epidemies"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
