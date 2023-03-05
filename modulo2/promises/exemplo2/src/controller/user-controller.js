import { getUser,saveUser } from "../services/dense-operation.js"

export const userController = {
  async read(mail) {
    console.log("Resgatando o seu usuario...")
    const output = await getUser(mail)
    if (!output) {
      return "Não encontramos o seu usuario..."
    }
    return `O nome do seu usuario é: ${output.name}`;
  },
  async save(userInfo) {
    console.log("Salvando o seu usuario...")
    const output = await saveUser(userInfo)
    if (!output) {
      return "Não foi possivel salvar seu usuario... tente mais tarde";
    }
    return "O seu usuario foi salvo com sucesso"
  }
}

