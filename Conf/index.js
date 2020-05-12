const config = {
    SERVER_PORT: 3018,
    DDBB: {
        NAME: 'mydb',
        USER: 'root',
        PASS: '',
        PORT: '3306',
        HOST: '127.0.0.1'
    },
    JWT: {
        PRIVATE_KEY: 'secret',
        EXPIRES_TIME: 10
    }
}

module.exports= config