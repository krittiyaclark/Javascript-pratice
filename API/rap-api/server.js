const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

let savage = {
	age: 28,
	BirthName: 'Shéyaa Bin Abraham-Joseph',
	birthLocaion: 'London, England',
}

// Set up to handle get request
app.get('/', (request, response) => {
	response.sendFile(__dirname + '/index.html')
})

app.get('/api/savage', (request, response) => {
	response.json(savage)
})
// Listening on port 8000
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`)
})
