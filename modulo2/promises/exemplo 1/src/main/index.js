import { denseOperationWithPromisse } from "../services/dense-operation.js"

denseOperationWithPromisse(10)
  .then(result => console.log(result))


// const response = await denseOperationWithPromisse(10)
// console.log(response)
