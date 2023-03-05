import { createServer, METHODS } from "http"
import { constants } from "http2"
import { userController } from "./controller/user-controller.js"
const HTTP_PORT = 3000

const transformResponse = ({ buffer }) => JSON.parse(Buffer.concat(buffer));

createServer((req, res) => {
  if (req.method === constants.HTTP2_METHOD_POST) {
    const payload = []
    req.on("data", (res) => payload.push(res))
    req.on('end', async () => {
      const data = transformResponse({ buffer: payload })
      return userController.save({ response: res, payload: data })
    })
  }
  if (req.method === constants.HTTP2_METHOD_GET) {
    return userController.list({ response: res, })
  }
}).listen(HTTP_PORT, () => console.log("Server running"))