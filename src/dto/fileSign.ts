export interface IInputSign {
  emails: string[]
  file: File
}

export type IOutputSign = {
  isLeft(): boolean
  isRight(): boolean
  value: any
}