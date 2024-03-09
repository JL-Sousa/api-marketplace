import { Router } from 'express';

export const productRouter = Router();

const router = Router();

productRouter.use('/products', router);

router.get('/', function (req, res) {
  res.send('Hello Product! :)');
});
