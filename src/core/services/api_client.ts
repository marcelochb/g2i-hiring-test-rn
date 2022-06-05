import axios, { AxiosResponse } from 'axios';

const api = axios.create({
  baseURL: 'https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean',
});

export interface IApiClient {
  getAll(): Promise<AxiosResponse>;
}

export class ApiClient implements IApiClient {
  async getAll(): Promise<AxiosResponse<any, any>> {
    return await api.get('');
  }

}
