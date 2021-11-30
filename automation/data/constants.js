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
    
    INVALID_EMAIL: 1,
    INVALID_EMAIL_EN: 'Invalid email address.',
    INVALID_EMAIL_ES:  'Dirección de email no válida.',
    
    INVALID_PASSWORD: 2,
    INVALID_PASSWORD_EN: 'Blank password.',
    INVALID_PASSWORD_ES: 'Contraseña en blanco.',

    INVALID_CREDENTIALS: 3,
    INVALID_CREDENTIALS_EN: 'Email or password incorrect',
    INVALID_CREDENTIALS_ES: 'Email o contraseña incorrectos'
}