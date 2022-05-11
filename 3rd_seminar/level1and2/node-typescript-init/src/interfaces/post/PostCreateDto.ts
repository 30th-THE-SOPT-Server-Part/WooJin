export interface PostCreateDto {
    userId: string;
    title: string;
    content: string;
    additional?: {
        category: string;
        season: string;
    };
}
