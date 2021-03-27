
// const http = require('http')

const express = require('express')
const app = express()

let notes = [ 
    {
        id: 1,
        content: "HTML is easy",
        date: 'today',
        important: true
    },
    {
        id: 2,
        content: "Browsers can execute only Javascript",
        date: "today",
        important: false
    },
    {
        id: 3,
        content: " GET and POST are the most important methods of HTTP protocol",
        date: "today",
        important: true
    }
]

app.get('/', (request, response) => {
    response.send('<h1>Hello World</h1')
})

app.get('/api/notes',(request, response) => {
    response.json(notes)
})

app.get('api/notes/:id', (request, response) => {
    const id = Number(request.params.id)
    const note = notes.find(note => note.id === id)
    response.json(note)

    if(note) {
        response.json(note)
    } else {
        response.status(404).end()
    }
})


const PORT = 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`);

// const app = http.createServer((request, response) => {
//     response.writeHead(200,{ 'content-type': 'application/json' })
//     response.end(JSON.stringify(notes))
// })