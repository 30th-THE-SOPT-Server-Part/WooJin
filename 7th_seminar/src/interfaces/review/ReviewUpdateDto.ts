import mongoose from "mongoose";

export interface ReviewUpdateDto {
    writer?: mongoose.Types.ObjectId;
    title?: string;
    content?: string;
}
