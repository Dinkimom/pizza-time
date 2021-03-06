import { Entity } from './../shared/types/Entity';
import axios from 'axios';
import { serverEntryPoint } from '../shared/constants/serverEntryPoint';

export abstract class AbstractClient {
  public URL: string;
  public axios: any;

  public constructor(entity: Entity) {
    this.URL = `${serverEntryPoint}/${entity}`;
    this.axios = axios.create({
      timeout: 20000,
    });
  }

  // for imitating real server request
  public sleep = (ms: number) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };
}
