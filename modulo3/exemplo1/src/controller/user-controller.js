import { listUsers, saveUser } from "../services/dense-operation.js"
import { createResponse } from "../utils/http-formatter.js"
import { constants } from "http2"

export const userController = {
  async list({ response }) {
    console.log("Resgatando o seu usuario...")
    const output = await listUsers()
    if (!output) {
      return createResponse({ res: response, message: "Não encontramos o seu usuario...", statusCode: constants.HTTP_STATUS_NOT_FOUND })
    }
    return createResponse({ res: response, users: output, statusCode: constants.HTTP_STATUS_OK })

  },
  async save({ payload, response }) {
    console.log("Salvando o seu usuario...")
    const output = await saveUser(payload)
    if (!output) {
      return createResponse({ res: response, message: "Não foi possivel salvar seu usuario... tente mais tarde", statusCode: constants.HTTP_STATUS_BAD_REQUEST })
    }
    return createResponse({ res: response, message: "O seu usuario foi salvo com sucesso", statusCode: constants.HTTP_STATUS_OK })
  }
}

