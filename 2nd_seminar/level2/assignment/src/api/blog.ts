import { Request, Response } from "express";

const selectPost = async (req: Request, res: Response) => {
    const param = req.params;

    return res.status(200).json({
        status: 200,
        message: "포스팅 조회 성공",
        posting_number: param.blogId
    });
};

const likePost = async (req: Request, res: Response) => {
    const param = req.params;

    return res.status(200).json({
        status:200,
        message: "좋아요 성공",
        posting_number: param.blogId
    });
};

export { selectPost, likePost };
