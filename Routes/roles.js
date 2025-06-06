import express from 'express'
import { addRoles, deleteRoles, getRoles, updateRoles } from '../Controllers/roles.js'
import { isAuthenticate } from '../Middleware/authentication.js'

export const rolesRoute = express.Router()

rolesRoute.get("/roles", isAuthenticate, getRoles)

rolesRoute.post("/role", isAuthenticate, addRoles)

rolesRoute.put("/role", isAuthenticate, updateRoles)

rolesRoute.delete("/role/:id", isAuthenticate, deleteRoles)