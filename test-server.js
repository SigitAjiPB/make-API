const express = require('express')
const app = express()
const port = 3000

//endpoint untuk mengambil data Character
app.get('/api/chars', (req, res) => {
    const chars = [
        {
            id: 1,
            name: 'Onyx',
            weapons: 'Gaunlets - Cannon',
        },

        {
            id: 2,
            name: 'Xull',
            weapons: 'Axe - Cannon',
        }
    ]
    res.json(chars)
})

//endpoint untuk menambahkan Character baru

app.post('/api/chars', (req, res) => {
    //logic untuk menambah logika baru
    //menggunakan array sederhana sebagai simulasi database
    const newChar = {
        id: 3,
        name: 'Ragnir',
        weapons: 'Axe - Katars',
    }
    chars.push(newChar)
    res.status(201).json(newChar)
})

//Middleware untuk parsing request body
app.use(express.json())

//mulai server
app.listen(port, ()=> {
    console.log(`Server berjalan di http://localhost:${port}`)
})