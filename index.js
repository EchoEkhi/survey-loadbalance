require('dotenv').config()

const express = require('express')

const app = express()

app.listen(process.env.PORT, () => console.log('Server running'))

let count = 0

app.use('/', (_, res) => {

    let url = ''

    switch (count % 4) {
        case 0:
            url = process.env.LINK0
            break
        case 1:
            url = process.env.LINK1
            break
        case 2:
            url = process.env.LINK2
            break
        case 3:
            url = process.env.LINK3
            break
    }

    res.redirect(url)
    console.log(`Redirected applicant No.${count} to URL No.${count % 4}.`)

    count++

})
