import { Request, Response, Router } from 'express';

const router: Router = Router();

router.get('/', (req: Request, res: Response) => {
    return res.status(200).json({
        status: 200,
        message: '좋아요 성공'
    });
});

module.exports = router;