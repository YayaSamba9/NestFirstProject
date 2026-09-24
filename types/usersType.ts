export interface User {
    id : number;
    name ?: String;
    email ?: String ;
    role ?: 'admin' | 'user';
}