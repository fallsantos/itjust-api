import { Request, Response } from 'express'
import { nanoid } from 'nanoid'

import { Link } from '../types/link'

import linksRepository from '../repositories/linkRepotory'

class LinksController {
  links: Link[] = []

  async postLink (req: Request, res: Response) {
    const link = req.body as Link// Typecast/converção

    link.code = nanoid(5)

    try {
      const result = await linksRepository.add(link)

      if (!result!.id) {
        return res.status(400).json({ error: 'Bad request' })
      }
      link.id = result!.id
    } catch (error) {
      return res.status(400).json({ error: error })
    }

    return res.status(201).json(link)
  }

  async getLink (req: Request, res: Response) {
    const code = req.params.code as string

    try {
      const link = await linksRepository.findByCode(code)
      if (!link) {
        return res.status(404).json({ error: 'Code not found' })
      }
      return res.json(link)
    } catch (error) {
      return res.status(400).json({ error: error })
    }
  }

  async hitLink (req: Request, res: Response) {
    const code = req.params.code as string

    try {
      const link = await linksRepository.hit(code)

      if (!link) {
        return res.status(404).json({ error: 'Not hit' })
      }

      return res.json(link)
    } catch (error) {
      return res.status(404).json({ error: error })
    }
  }
}

export default new LinksController()
