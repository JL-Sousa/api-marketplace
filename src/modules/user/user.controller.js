import { Router } from 'express';

export const userRouter = Router();

const router = Router();

userRouter.use('/users', router);

router.get('/', function (req, res) {
  res.send('Hello User');
});
