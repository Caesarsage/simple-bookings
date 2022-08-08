import express, { Router } from "express"
import { createUser } from "../controllers/usersControllers"

const route: Router = express.Router()

route.post('/user', createUser)