export const httpResponse = ({ res, statusCode, ...response }) => {
  res.statusCode = statusCode
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(response))
}

