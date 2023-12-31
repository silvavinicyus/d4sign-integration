import express, { Request, Response, Router } from 'express'
import * as dotenv from 'dotenv'
import { D4SignService } from './services/d4sign'
import multer from 'multer'

dotenv.config()

const app = express()
const router = Router()

app.use(express.json())

router.get('/hello', async (_request: Request, response: Response) => {
  return response.json('Hello World.')
})

router.post('/upload', multer().single('file'), async (request: Request, response: Response) => {
  const file = request.file
  
  const service = new D4SignService();

  const uploadFile = await service.uploadDocument({
    emails: ['vinicyus.silva@luby.software.fake', 'gabriel.carvalho@luby.software.fake'],
    file: file!
  })

  if(uploadFile.isLeft()) {
    return response.status(500).json('Internal server error')
  }

  return response.status(200).json('ok')
})

app.use(router)

export { app }