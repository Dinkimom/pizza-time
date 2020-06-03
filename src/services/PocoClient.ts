import axios, { AxiosError, AxiosResponse } from 'axios'

export abstract class AbstractClient {
  public URL: string
  public axios: any

  public constructor(serverEntryPoint: string) {
    this.URL = serverEntryPoint
    this.axios = axios.create({
      timeout: 20000,
    })
  }

  public errorHandler = (
    error: AxiosError,
  ): AxiosResponse<AxiosError> | string => {
    if (error.response) {
      // Request made and server responded
      console.log(error.response.data)
      console.log(error.response.status)
      console.log(error.response.headers)
    }

    return error.message
  }
}
