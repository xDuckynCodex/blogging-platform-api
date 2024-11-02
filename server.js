const app = require('./src/app')

const PORT = 8080

const server = app.listen(PORT, () => console.log(`API listen port ${PORT}`))