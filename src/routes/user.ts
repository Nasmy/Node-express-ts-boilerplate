import express, { Router } from 'express';
import controller from '../controllers/user';

const router = express.Router();

router.get('/auth', controller.userLogin);

export = router;