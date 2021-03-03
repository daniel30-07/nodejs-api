import { Request, Response} from "express"
import { User } from '../database/entity/User'
import {getRepository, getConnection} from 'typeorm'

class UserController {
    async create(req: Request, res: Response) {
        const body = req.body;
        const user = getRepository(User).create(req.body)
        const results = getRepository(User).save(user)
        
        
        console.log(user)
        return res.send(results)
    }
}

export { UserController }