import express, { Response, Request } from "express"
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const createUser = (response: Response, request: Request) => {
  try {
    
  } catch (error) {
    console.log(error)
    
  }
}