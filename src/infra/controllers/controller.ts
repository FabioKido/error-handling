import fs from 'fs'
import { Request, Response } from 'express'
import { BadRequestError } from '../helpers/errors'

export const name = async(req: Request, res: Response) => {
    const {name} = req.body

    if(name.length < 4) throw new BadRequestError('Nome menor que o esperado...')
    console.log(name)

    res.json({
        name
    })
}

export const file = (req: Request, res: Response) => {
    const file = fs.readFileSync('jest.config.js')

    if(!file) throw new BadRequestError('Arquivo não encontrado...')

    return res.json(file.toString())
}