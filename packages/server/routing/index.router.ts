import { Router } from 'express';
import { forumRouter } from './forumRouter';
import { userRouter } from './userRouter';

export const apiRouter: Router = Router();

forumRouter(apiRouter);
userRouter(apiRouter);
