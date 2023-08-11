export type LoginDto = {
    email: string;
    password: string;
}
export type CreateUserDto = {
    email: string;
    password: string;
    fullName: string;
};

export type ResponseUser = {
    createdAt: string;
    email: string;
    fullName: string;
    id: number;
    token: string;
    updatedAt: string;
}
