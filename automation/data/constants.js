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
        PASSWORD: 'invalid_password'
    }
}

export const TASK= { 
    RESPONSE_TIME: 900,
    DEFAULT_NAME: 'defaultName',
    DEFAULT_DESCRIPTION: 'defaultDescription',
    TODAY: 0,
    TOMORROW: 1,
    SINGLE_TASK: 1,
    MANY_TASKS: 10
    
}

export const MESSAGE_ERRORS = {
    INVALID_MESSAGE_EN: 'Invalid email address.',
    INVALID_PASSWORD_EN: 'Blank password.',
    INVALID_CREDENTIALS_EN: 'Email or password incorrect',

    INVALID_MESSAGE_ES:  'Dirección de email no válida.',
    INVALID_PASSWORD_ES: 'Contraseña en blanco.',
    INVALID_CREDENTIALS_ES: 'Email o contraseña incorrectos'
}