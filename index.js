const app = require('express')()
// eslint-disable-next-line import/order
const http = require('http').createServer(app)
const io = require('socket.io')(http)

const PORT = process.env.PORT || 4000
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')
const xlsxFile = require('read-excel-file/node')
const data = []

// register cors
app.use(cors())
const whitelist = ['http://localhost:3000'];
const corsOptions = {
  credentials: true,
  origin: (origin, callback) => {
    console.log('origin:', origin)
    console.log('callback:', callback)
    if(whitelist.includes(origin))
      return callback(null, true)

    callback(new Error('Not allowed by CORS'));
  }
}

app.use(cors(corsOptions));


// configure body parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// configure morgan
app.use(morgan('dev'))

// define first route
app.get('/', (req, res) => {
  res.json('<== Top Vendors Application Started Successfully! ==>')
})

io.on('getData', (socket) => {
  console.log('socket:', socket)
  console.log('GET DATA!' + data)
})

io.on('connection', (socket) => {
  console.log('a user connected');
});

app.listen(PORT, () => {
  console.log(`App is running on ${PORT}`)
})

// load in the data from the excel spreadsheet
xlsxFile('./data.xlsx').then((rows) => {
  for (const i in rows) {
    data.push(rows[i])
  }
  // console.log('data:', data)
})
