import { LoginDTO } from './../shared/dto/LoginDTO';
import { AbstractClient } from './AbstractClient';

export class UserClient extends AbstractClient {
  constructor() {
    super('user');
  }

  public login = async (data: LoginDTO) => {
    await this.sleep(1000);

    return {
      success: true,
      data: {
        id: '0',
        phone: '+79044321539',
        name: 'Test',
      },
    };
  };
}
