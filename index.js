import jsonServer from 'json-server'

const server = jsonServer.create()
const router = jsonServer.router('database.json')
const middlewares = jsonServer.defaults()
const port = process.env.PORT || 4000

server.use(middlewares)
server.use(router)

server.listen(port, () => console.log('si se esta escuchando!'))