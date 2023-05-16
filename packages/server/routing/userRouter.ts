import { Router } from 'express';
import { userService } from '../services/userService';

export const userRouter = (apiRouter: Router) => {
  const service = new userService();

  const router: Router = Router();

  router.post('/theme', service.setTheme);

  router.post('/:id', service.findOrCreate);

  apiRouter.use('/user', router);
};
