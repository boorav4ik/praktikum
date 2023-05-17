import type { Request, Response } from 'express'
import { userRepos } from '../db'

export class userService {
  setTheme = (_req: Request, res: Response) => {
    userRepos
      .update(_req.body.id, { ..._req.body })
      .then(resp => {
        if (resp[0] === 0) {
          userRepos.create(_req.body)
        }
        res.status(200).json('ok')
      })
      .catch(err =>
        res
          .status(500)
          .json({ error: ['db error: unable to set theme', err.status] })
      )
  }
  getTheme = (_req: Request, res: Response) => {
    userRepos
      .findAll({
        where: { id: _req.query.id },
      })
      .then(theme => res.status(200).json(theme))
      .catch(err => res.status(500).json({ error: ['db error', err.status] }))
  }
}
