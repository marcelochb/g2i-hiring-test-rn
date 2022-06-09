import axios, { AxiosResponse } from 'axios';

const api = axios.create({
  baseURL: 'https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean',
});

export interface IApiClient {
  getAll<T>(): Promise<AxiosResponse<T>| Error>;
}

export class ApiClient implements IApiClient {
  async getAll<T>(): Promise<AxiosResponse<T, any>> {
    try {
      return await api.get<T>('');
    } catch (error) {
      throw error
    }
  }

}
