import { connect } from '../database/database';
import { Router } from 'express';
const router = Router();

router.get('/', (req, res) => res.send('hello to my apirest'));

export default router;
