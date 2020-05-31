import {Router} from 'express';
import {publishToQueue} from '../services/MQService';

const router = Router();

router.post('/msg',async(req, res, next)=>{
  console.log(req.body);
  let { queueName, payload } = req.body; // queueName is the one present in config/config.json
  await publishToQueue(queueName, payload);
  res.status(200).send({"message-sent":true});
  next();
})

export default router;