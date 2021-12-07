import dotenv from 'dotenv'
dotenv.config()

export const URLS = {
    BASE_URL: process.env.BASE_URL
}

export const CREDENTIALS = {
    STANDARD_USER:{
        EMAIL: process.env.EMAIL,
        PASSWORD: process.env.PASSWORD
    },

    INVALID_USER:{
        EMAIL: 'invalid_email@gmail.com',
        PASSWORD: 'invalid_password',
        EMPTY: ''
    }
}

export const TASK = { 
    RESPONSE_TIME: 900,
    MIN_REPONSE_TIME: 100,
    DEFAULT_NAME: 'defaultName',
    DEFAULT_DESCRIPTION: 'defaultDescription',
    TODAY: 0,
    TOMORROW: 1,
    SINGLE_TASK: 1,
    MANY_TASKS: 10
    
}

export const MESSAGE_ERRORS = {
    TYPE: {
        INVALID_EMAIL: 0,
        INVALID_PASSWORD: 1,
        INVALID_CREDENTIALS: 2
    },

    EN: {
        INVALID_EMAIL: 'Invalid email address.',
        INVALID_PASSWORD: 'Blank password.',
        INVALID_CREDENTIALS: 'Wrong email or password'
    },

    ES: {
        INVALID_EMAIL:  'Dirección de email no válida.',
        INVALID_PASSWORD: 'Contraseña en blanco.',
        INVALID_CREDENTIALS: 'Email o contraseña incorrectos'
    }    
}