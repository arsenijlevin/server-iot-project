import { Test, TestingModule } from '@nestjs/testing';
import { HttpStatus, INestApplication, ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();

    app.useGlobalPipes(new ValidationPipe());

    await app.init();
  });

  afterAll(async () => {
    await Promise.all([app.close()]);
  });

  describe('/temperature-and-humidity (POST)', () => {
    describe('Correct data', () => {
      it('Correct temperature and humidity', async () => {
        const mockData = {
          temperature: 25,
          humidity: 50,
        };

        const response = await request(app.getHttpServer())
          .post('/temperature-and-humidity')
          .send(mockData)
          .expect(HttpStatus.CREATED);

        const { temperature, humidity } = response.body;

        expect(temperature).toBe(mockData.temperature);
        expect(humidity).toBe(mockData.humidity);
      });
    });

    describe('Wrong data', () => {
      describe('No data', () => {
        it('temperature', async () => {
          const mockData = {
            humidity: 123,
          };

          await request(app.getHttpServer())
            .post('/temperature-and-humidity')
            .send(mockData)
            .expect(HttpStatus.BAD_REQUEST);
        });
        it('humidity', async () => {
          const mockData = {
            temperature: 123,
          };

          await request(app.getHttpServer())
            .post('/temperature-and-humidity')
            .send(mockData)
            .expect(HttpStatus.BAD_REQUEST);
        });
      });
      describe('String data', () => {
        it('temperature', async () => {
          const mockData = {
            temperature: 'string temperature',
          };

          await request(app.getHttpServer())
            .post('/temperature-and-humidity')
            .send(mockData)
            .expect(HttpStatus.BAD_REQUEST);
        });
        it('humidity', async () => {
          const mockData = {
            humidity: 'string humidity',
          };

          await request(app.getHttpServer())
            .post('/temperature-and-humidity')
            .send(mockData)
            .expect(HttpStatus.BAD_REQUEST);
        });
      });
      describe('Negative data', () => {
        it('temperature', async () => {
          const mockData = {
            temperature: -1,
            humidity: 1,
          };

          await request(app.getHttpServer())
            .post('/temperature-and-humidity')
            .send(mockData)
            .expect(HttpStatus.BAD_REQUEST);
        });
        it('humidity', async () => {
          const mockData = {
            temperature: 1,
            humidity: -1,
          };

          await request(app.getHttpServer())
            .post('/temperature-and-humidity')
            .send(mockData)
            .expect(HttpStatus.BAD_REQUEST);
        });
      });
    });
  });
});
