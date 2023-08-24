export interface IInputSign {
  emails: string[]
  file: Express.Multer.File
}

export type IOutputSign = {
  isLeft(): boolean
  isRight(): boolean
  value: any
}