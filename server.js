const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const cars = {
    '300zx': {
        'make': 'Nissan',
        'engine': 'VG30DETT',
        'horsePower': 300,
        'torque': 283,
        'turbo': true,
        'driveTrain': "RWD",
        'modelYear': "1989 - 2000"
    },
    'fd rx7': {
        'make': 'Mazda',
        'engine': '13B-REW',
        'horsePower': 276,
        'torque': 263,
        'turbo': true,
        'driveTrain': "RWD",
        'modelYear': "1992 - 1995"
    },
    'mk4 supra': {
        'make': 'Toyota',
        'engine': '2JZ-GTE',
        'horsePower': 321,
        'torque': 315,
        'turbo': true,
        'driveTrain': "RWD",
        'modelYear': "1994 - 1998"
    },
    'r32 gtr': {
        'make': 'Nissan',
        'engine': 'RB26DETT',
        'horsePower': 276,
        'torque': 260,
        'turbo': true,
        'driveTrain': "AWD",
        'modelYear': "1989 - 1994"
    },
    'r33 gtr': {
        'make': 'Nissan',
        'engine': 'RB26DETT',
        'horsePower': 276,
        'torque': 260,
        'turbo': true,
        'driveTrain': "AWD",
        'modelYear': "1995 - 1998"
    },
    'r34 gtr': {
        'make': 'Nissan',
        'engine': 'RB26DETT',
        'horsePower': 276,
        'torque': 260,
        'turbo': true,
        'driveTrain': "AWD",
        'modelYear': "1999 - 2002"
    },
    'ek9 civic type r': {
        'make': 'Honda',
        'engine': 'B16B',
        'horsePower': 182,
        'torque': 118,
        'turbo': false,
        'driveTrain': "FWD",
        'modelYear': "1997 - 1998"
    },
    'nsx na1': {
        'make': 'Honda',
        'engine': 'C30A',
        'horsePower': 270,
        'torque': 210,
        'turbo': false,
        'driveTrain': "RWD",
        'modelYear': "1991 - 1996"
    }
}

app.get('/', (request,response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/', (request, response) => { 
        console.log(response.json(cars))
})

app.get('/api/:car', (request, response) => {
    const carChoice = request.params.car.toLowerCase() // This line of code grabs the param after the /api/{ THIS HERE } and uses it 

    if (cars[carChoice]) {
        response.json(cars[carChoice])
    }else {
        response.json(cars['unknown'])
    }
})

app.listen(process.env.PORT || PORT, ()=> {
    console.log(`The server is now running on port ${PORT}, you better go catch it!`)
})