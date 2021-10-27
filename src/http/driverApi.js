import { host } from './httpIndex';


export const GetDriverFromServer = async () => {

  return await host.get('/');
}