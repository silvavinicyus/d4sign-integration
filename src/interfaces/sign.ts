import { IInputSign, IOutputSign } from "../dto/fileSign";

export interface ISignService {
  uploadDocument(props: IInputSign): Promise<IOutputSign>
}