import { LoginDTO } from './../shared/dto/LoginDTO';
import { AbstractClient } from './AbstractClient';

export class UserClient extends AbstractClient {
  constructor() {
    super('user');
  }

  public login = (data: LoginDTO) => {};

  public logout = (data: string) => {};
}
