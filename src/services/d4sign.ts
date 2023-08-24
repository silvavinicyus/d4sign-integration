import axios from 'axios';
import { IInputSign, IOutputSign } from "../dto/fileSign";

export class D4SignService implements D4SignService {
  async uploadDocument(props: IInputSign): Promise<IOutputSign> {
    try {      

      console.log({
        url: `${process.env.HOST_D4_SIGN}/documents/${process.env.D4_SIGN_SAFE_UUID}/upload?tokenAPI=${process.env.D4_SIGN_TOKEN}&cryptKey=${process.env.D4_SIGN_CRYPT_KEY}`,
        maxBodyLength: Infinity,
        method: 'POST',
        headers: {
          "Content-Type": "multipart/form-data;",
          "tokenAPI": `${process.env.D4_SIGN_TOKEN}`,          
        },
        data: {
          "file": props.file,
          "uuid_folder": `${process.env.D4_SIGN_FOLDER_UUID}`
        }
      })
      
      // const uploadedFile = await axios({
      //   url: `${process.env.HOST_D4_SIGN}/documents/${process.env.D4_SIGN_SAFE_UUID}/upload?tokenAPI=${process.env.D4_SIGN_TOKEN}&cryptKey=${process.env.D4_SIGN_CRYPT_KEY}`,
      //   maxBodyLength: Infinity,
      //   method: 'POST',
      //   headers: {
      //     "Content-Type": "multipart/form-data;",
      //     "tokenAPI": `${process.env.D4_SIGN_TOKEN}`,          
      //   },
      //   data: {
      //     "file": props.file,
      //     "uuid_folder": `${process.env.D4_SIGN_FOLDER_UUID}`
      //   }
      // })

      // await axios({
      //   url: `${process.env.HOST_D4_SIGN}/documents/${uploadedFile.data.uuid}/createlist?tokenAPI=${process.env.D4_SIGN_TOKEN}&cryptKey=${process.env.D4_SIGN_CRYPT_KEY}`,
      //   maxBodyLength: Infinity,
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json', 
      //     'Accept': 'application/json',          
      //   },
      //   data: JSON.stringify({
      //     "signers": [
      //       props.emails.map((email, index) => ({
      //         "email": `${email}`,
      //         "act": `${index+1}`,
      //         "foreign": "0",
      //         "after_position": `${index+1}`,
      //         "certificadoicpbr": "0"
      //       }))
      //     ]
      //   })
      // })

      // await axios({
      //   url: `${process.env.HOST_D4_SIGN}/documents/${uploadedFile.data.uuid}/sendtosigner?tokenAPI=${process.env.D4_SIGN_TOKEN}&cryptKey=${process.env.D4_SIGN_CRYPT_KEY}`,
      //   maxBodyLength: Infinity,
      //   method: 'POST',
      //   headers: { 
      //     'Content-Type': 'application/json'
      //   },
      //   data: JSON.stringify({
      //     "message": "Segue documento para assinatura.",
      //     "workflow": "0",
      //     "skip_email": "0"
      //   })
      // })

      return {
        isLeft() {
          return false
        },      
        isRight() {
          return true
        },
        value: 'File successfully sent to signers'
      }
    } catch(err) {
      console.log(err)
      return {
        isLeft() {
          return true
        },
        isRight() {
          return false
        },
        value: new Error('Error during file upload to d4 sign')
      }
    }        
  }
}