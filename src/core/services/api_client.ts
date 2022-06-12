import axios, { AxiosResponse } from 'axios';

const api = axios.create({
  baseURL: 'https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean',
});
interface IProps {
  mockSimulate: boolean;
}
interface IParams<T> {
  mockAxiosResponse:AxiosResponse<T>;
}
export interface IApiClient {
  getAll<T>({mockAxiosResponse}:IParams<T>): Promise<AxiosResponse<T>| Error>;
}

export class ApiClient implements IApiClient {

  mockSimulate: boolean;

  constructor({mockSimulate = false}:IProps) {
    this.mockSimulate = mockSimulate
  }



  async getAll<T>({mockAxiosResponse}:IParams<T>): Promise<AxiosResponse<T, any>> {
    try {
      return this.mockSimulate ? mockAxiosResponse :  await api.get<T>('');
    } catch (error) {
      throw error
    }
  }

}
