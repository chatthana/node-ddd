import { Router } from 'express';
import userRoute from './modules/users';

export default () => {
  
  const router = Router();
  const apiRouter = Router();

  apiRouter.use('/users', userRoute());

  router.use(apiRouter);

  return router;
};