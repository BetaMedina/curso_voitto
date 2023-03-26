import { deleteCourse, listCourses, readCourses, saveCourse, updateCourse } from "../services/course-service.js"
import { httpResponse } from "../utils/http-formatter.js"
import { constants } from "http2"

export const courseController = {
  async list({ response }) {
    console.log("Resgatando o seus cursos...")
    const output = await listCourses()
    if (!output) {
      return httpResponse({ res: response, message: "Não encontramos cursos no sistema...", statusCode: constants.HTTP_STATUS_NOT_FOUND })
    }
    return httpResponse({ res: response, courses: output, statusCode: constants.HTTP_STATUS_OK })

  },
  async read({ params, response }) {
    console.log("Resgatando o seus cursos...")
    const output = await readCourses(params.id)
    if (!output) {
      return httpResponse({ res: response, message:"O seu curso não foi encontrado na plataforma, verifique o id passado e tente novamente.", statusCode: constants.HTTP_STATUS_NOT_FOUND })
    }
    return httpResponse({ res: response, output, statusCode: constants.HTTP_STATUS_OK })

  },
  async save({ payload, response }) {
    console.log("Salvando o seu curso...")
    const output = await saveCourse(payload)
    if (!output) {
      return httpResponse({ res: response, message: "Não foi possivel salvar seu curso... tente mais tarde", statusCode: constants.HTTP_STATUS_BAD_REQUEST })
    }
    return httpResponse({ res: response, message: "O seu curso foi salvo com sucesso", statusCode: constants.HTTP_STATUS_CREATED })
  },

  async delete({ params, response }) {
    console.log("Resgatando o seus cursos...")
    const output = await readCourses(params.id)
    if (!output) {
      return httpResponse({ res: response, message: "O seu curso não foi encontrado na plataforma, verifique o id passado e tente novamente.", statusCode: constants.HTTP_STATUS_NOT_FOUND })
    }
    await deleteCourse(params.id)
    return httpResponse({ res: response, courses: output, statusCode: constants.HTTP_STATUS_NO_CONTENT })

  },

  async update({ params, payload, response }) {
    console.log("Salvando o seu curso...")
    const output = await readCourses(params.id)
    if (!output) {
      return httpResponse({ res: response, message: "O seu curso não foi encontrado na plataforma, verifique o id passado e tente novamente.", statusCode: constants.HTTP_STATUS_NOT_FOUND })
    }
    await updateCourse({ id: params.id, ...payload })
    return httpResponse({ res: response, message: "O seu curso foi atualizado com sucesso", statusCode: constants.HTTP_STATUS_OK })
  }
}

