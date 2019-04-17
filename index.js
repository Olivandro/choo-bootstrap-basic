const choo = require('choo')
const html = require('choo/html')

const main = require('./views/main')

const app = choo()


app.route('/', main)
app.mount('body')
