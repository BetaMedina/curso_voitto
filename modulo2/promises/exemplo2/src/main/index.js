import { userController } from "../controller/user-controller.js"

console.log(await userController.read("joao.medina@dev.com.br"))
console.log("=======================\n\n")
console.log(await userController.save(
  {
    "name": "João Medina2",
    "email": "joao.medina2@dev.com.br",
    "idade": 30,
    "hobby": "Desenhar"
  }
))
console.log("=======================\n\n")
console.log(await userController.read("joao.medina2@dev.com.br"))
console.log("=======================\n\n")

