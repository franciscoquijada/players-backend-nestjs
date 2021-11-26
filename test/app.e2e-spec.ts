import { HttpStatus } from '@nestjs/common';
import * as request from 'supertest';
import { apiV1 } from '../src/configs/api.configs';

describe('Players (e2e)', () => {
  const baseUrlApi = `http://localhost:3000/${apiV1.api}/${apiV1.version}`;
  const playerUrl = '/players';
  const typeJsonUtf8 = 'application/json; charset=utf-8';
  const badRequest = 'Bad Request';
  const partialErrorMessageLessZero = 'must not be less than 1';

  it('it should list a players without parameters', () => {
    return request(baseUrlApi)
      .get(playerUrl)
      .expect(HttpStatus.OK)
      .expect('Content-Type', typeJsonUtf8)
      .expect((response: request.Response) => {
        const { id, nickname, status, balance, avatar } =
          response.body.data[0];
        expect(response.body.data).toHaveLength(20);
        expect(typeof response.body.data).toBe('object');
        expect(typeof response.body.data[0]).toBe('object');
        expect(typeof id).toBe('number');
        expect(typeof nickname).toBe('string');
        expect(typeof status).toBe('string');
        expect(typeof balance).toBe('number');
        expect(typeof avatar).toBe('string');
        expect(typeof response.body.total).toBe('number');
        expect(typeof response.body.page).toBe('number');
      });
  });

  it('it should list a one player with search by id', () => {
    const searchParam = 'search';
    return request(baseUrlApi)
      .get(playerUrl)
      .query({ [searchParam]: '1' })
      .expect(HttpStatus.OK)
      .expect('Content-Type', typeJsonUtf8)
      .expect((response: request.Response) => {
        const { id, nickname, status, balance, avatar } =
          response.body.data[0];
        expect(typeof response.body.data).toBe('object');
        expect(typeof id).toBe('number');
        expect(typeof nickname).toBe('string');
        expect(typeof status).toBe('string');
        expect(typeof balance).toBe('number');
        expect(typeof avatar).toBe('string');
        expect(typeof response.body.total).toBe('number');
        expect(typeof response.body.page).toBe('number');
      });
  });

  it('it should bad request to send limit param less than zero', () => {
    const limitParam = 'limit';
    return request(baseUrlApi)
      .get(playerUrl)
      .query({ [limitParam]: '0' })
      .expect(HttpStatus.BAD_REQUEST)
      .expect('Content-Type', typeJsonUtf8)
      .expect((response: request.Response) => {
        expect(response.body.statusCode).toBe(400);
        expect(response.body.message[0]).toBe(
          `${limitParam} ${partialErrorMessageLessZero}`,
        );
        expect(response.body.error).toBe(badRequest);
      });
  });

  it('it should bad request to send page param less than zero', () => {
    const pageParam = 'page';
    return request(baseUrlApi)
      .get(playerUrl)
      .query({ [pageParam]: '0' })
      .expect(HttpStatus.BAD_REQUEST)
      .expect('Content-Type', typeJsonUtf8)
      .expect((response: request.Response) => {
        expect(response.body.statusCode).toBe(400);
        expect(response.body.message[0]).toBe(
          `${pageParam} ${partialErrorMessageLessZero}`,
        );
        expect(response.body.error).toBe(badRequest);
      });
  });
});
