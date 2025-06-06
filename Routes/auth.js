import express from 'express'
import { login, logout, register } from '../Controllers/auth.js'

export const authRouter = express.Router()

authRouter.get("/logout", logout)

authRouter.post("/login", login)

authRouter.post("/register", register)