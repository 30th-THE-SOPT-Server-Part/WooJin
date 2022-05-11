import { Router } from "express";
import { body } from "express-validator/check";
import { UserController } from "../controllers";

const router: Router = Router();

router.post('/', [
    body("name")
        .notEmpty().withMessage("name이 비어있습니다."),
    body("phone")
        .notEmpty().withMessage("phone이 비어있습니다."),
    body("email")
        .notEmpty().withMessage("email이 비어있습니다.")
        .isEmail().withMessage("email 형식이 올바르지 않습니다."),
], UserController.createUser);
router.put('/:userId', [
    body("email")
        .isEmail().withMessage("email 형식이 올바르지 않습니다."),
], UserController.updateUser);        
router.get('/:userId', UserController.findUserById);
router.delete('/:userId', UserController.deleteUser);

export default router;
