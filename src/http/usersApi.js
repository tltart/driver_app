import { host } from './httpIndex';


export const GetUsersFromServer = async () => {

  return await host.get('/users');
}