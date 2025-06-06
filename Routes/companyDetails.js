import express from 'express'
import { isAuthenticate } from '../Middleware/authentication.js'
import { addCompanyDetails, getCompanyList } from '../Controllers/company.js'

export const companyDetailRouter = express.Router()

companyDetailRouter.get('/companydetails', isAuthenticate, getCompanyList)

companyDetailRouter.post('/companydetails', isAuthenticate, addCompanyDetails)
