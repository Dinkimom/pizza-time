import { HistoryDTO } from './../../shared/dto/HistoryDTO';
import { UserDTO } from './../../shared/dto/UserDTO';
import { ResponseTypesEnum } from './../../shared/types/ResponseTypesEnum';

export interface IProfileState {
  user: UserDTO | null;
  isFetching: boolean;
  error: string;
  history: HistoryDTO[];
  response: ResponseTypesEnum;
  isOpened: boolean;
}
