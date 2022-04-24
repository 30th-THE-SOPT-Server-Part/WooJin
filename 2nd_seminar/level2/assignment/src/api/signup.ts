import { Request, Response, Router } from 'express';

const router: Router = Router();

router.get('/', (req: Request, res: Response) => {
    return res.status(201).json({
        status: 201,
        message: '유저 생성 성공'
    });
});

module.exports = router;
