

export interface UserDto {
    name: string;
    email: string;
    password: string;
    role?: 'admin' | 'user';
}
