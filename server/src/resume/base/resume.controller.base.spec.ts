import { Test } from "@nestjs/testing";
import { INestApplication, HttpStatus, ExecutionContext } from "@nestjs/common";
import request from "supertest";
import { MorganModule } from "nest-morgan";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { ResumeController } from "../resume.controller";
import { ResumeService } from "../resume.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  acc: "true",
  createdAt: new Date(),
  epsilon: 42.42,
  id: "exampleId",
  proportionInitiale: 42.42,
};
const CREATE_RESULT = {
  acc: "true",
  createdAt: new Date(),
  epsilon: 42.42,
  id: "exampleId",
  proportionInitiale: 42.42,
};
const FIND_MANY_RESULT = [
  {
    acc: "true",
    createdAt: new Date(),
    epsilon: 42.42,
    id: "exampleId",
    proportionInitiale: 42.42,
  },
];
const FIND_ONE_RESULT = {
  acc: "true",
  createdAt: new Date(),
  epsilon: 42.42,
  id: "exampleId",
  proportionInitiale: 42.42,
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

describe("Resume", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: ResumeService,
          useValue: service,
        },
      ],
      controllers: [ResumeController],
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

  test("POST /resumes", async () => {
    await request(app.getHttpServer())
      .post("/resumes")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
      });
  });

  test("GET /resumes", async () => {
    await request(app.getHttpServer())
      .get("/resumes")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
        },
      ]);
  });

  test("GET /resumes/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/resumes"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /resumes/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/resumes"}/${existingId}`)
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
