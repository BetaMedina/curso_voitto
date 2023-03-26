import { createServer } from "http"
import { constants } from "http2"
import { courseController } from "./controller/course-controller.js"
const HTTP_PORT = 3000

const transformResponse = ({ buffer }) => JSON.parse(Buffer.concat(buffer));

createServer((req, res) => {
  if (req.url === '/courses' && req.method === constants.HTTP2_METHOD_POST) {
    const payload = []
    req.on("data", (res) => payload.push(res))
    req.on('end', async () => {
      const data = transformResponse({ buffer: payload })
      return courseController.save({ response: res, payload: data })
    })
  }
  if (req.url === '/courses' && req.method === constants.HTTP2_METHOD_GET) {
    return courseController.list({ response: res, })
  }

  if (req.url.match('/courses/*') && req.method === constants.HTTP2_METHOD_GET) {
    return courseController.read({ params: { id: +req.url.split('/')[2] }, response: res, })
  }

  if (req.url.match('/courses/*') && req.method === constants.HTTP2_METHOD_DELETE) {
    return courseController.delete({ params: { id: +req.url.split('/')[2] }, response: res, })
  }

  if (req.url.match('/courses/*') && req.method === constants.HTTP2_METHOD_PUT) {
    const payload = []
    req.on("data", (res) => payload.push(res))
    req.on('end', async () => {
      const data = transformResponse({ buffer: payload })
      return courseController.update({ params: { id: +req.url.split('/')[2] }, response: res, payload: data })
    })
  }
}).listen(HTTP_PORT, () => console.log("Server running"))