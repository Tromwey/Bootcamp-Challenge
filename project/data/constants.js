import dotenv  from '../dotenv'
dotenv.config()

export const URLS = {
    BASE_URL: 'https://www.saucedemo.com/'
}

export const CREDENTIALS = {
    STANDARD_USER: {
        USERNAME: process.env.USERNAME,
        PASSWORD: process.env.PASSWORD
    }
}