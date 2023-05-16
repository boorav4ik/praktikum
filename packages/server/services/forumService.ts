import type { Request, Response } from 'express'
import { topicRepos, commentRepos, themeRepos, Comment } from '../db'

export class forumService {
  getAllThemes = (_: Request, res: Response) => {
    themeRepos
      .getAll()
      .then(themes => res.status(200).json(themes))
      .catch(err => res.status(500).json({ error: ['db error', err.status] }))
  }

  createTheme = (_req: Request, res: Response) => {
    themeRepos
      .create(_req.body)
      .then(theme => res.status(200).json(theme))
      .catch(err => res.status(500).json({ error: ['db error', err] }))
  }

  getAllTopics = (_: Request, res: Response) => {
    topicRepos
      .getAll()
      .then(topics => res.status(200).json(topics))
      .catch(err => res.status(500).json({ error: ['db error', err.status] }))
  }

  getTopic = (_req: Request, res: Response) => {
    topicRepos
      .get(_req.params.id)
      .then(topic => res.status(200).json(topic))
      .catch(err => res.status(500).json({ error: ['db error', err.status] }))
  }

  getTopicsForTheme = (_req: Request, res: Response) => {
    topicRepos
      .findAll({
        include: [Comment],
        where: {
          id_theme: _req.query.id_theme,
        },
      })
      .then(topic => res.status(200).json(topic))
      .catch(err => res.status(500).json({ error: ['db error', err.status] }))
  }

  createTopic = (_req: Request, res: Response) => {
    topicRepos
      .create(_req.body)
      .then(topic => res.status(200).json(topic))
      .catch(err => res.status(500).json({ error: ['db error', err] }))
  }

  deleteTopic = (_req: Request, res: Response) => {
    const { id, id_theme } = _req.body
    topicRepos
      .delete(id)
      .then(() =>
        topicRepos.findAll({
          include: [Comment],
          where: {
            id_theme: id_theme,
          },
        })
      )
      .then(topic => res.status(200).json(topic))
      .catch(err => res.status(500).json({ error: ['db error', err.status] }))
  }

  getAllCommentsForTopic = (_req: Request, res: Response) => {
    commentRepos
      .findAll({
        where: {
          id_topic: _req.query.id_topic,
        },
      })
      .then(comments => res.status(200).json(comments))
      .catch(err => res.status(500).json({ error: ['db error', err.status] }))
  }

  getComment = (_req: Request, res: Response) => {
    commentRepos
      .findAll({
        where: { id: _req.params.id },
      })
      .then(comment => res.status(200).json(comment))
      .catch(err => res.status(500).json({ error: ['db error', err.status] }))
  }

  createComment = (_req: Request, res: Response) => {
    commentRepos
      .create(_req.body)
      .then(comment => {
        return res.status(200).json(comment)
      })
      .catch(err => res.status(500).json({ error: ['db error', err.status] }))
  }

  deleteComment = (_req: Request, res: Response) => {
    const { id, id_topic } = _req.body
    commentRepos
      .delete(id)
      .then(() =>
        commentRepos.findAll({
          where: {
            id_topic: id_topic,
          },
        })
      )
      .then(comment => res.status(200).json(comment))
      .catch(err => res.status(500).json({ error: ['db error', err.status] }))
  }
}
