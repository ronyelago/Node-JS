const customExpress = require('./config/customExpress')
const app = customExpress()

app.listen(3001, () => console.log('===> running server in port 3001...'))

