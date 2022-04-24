import { Router } from 'express';

const router: Router = Router();

router.use('/user', require('./user'));

module.exports = router;