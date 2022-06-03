export interface Identity {
    token: string | null;
}

export interface User {
    id: number | null;
    uid: string | null;
    first_name: string | null;
    last_name: string | null;
    email: string | null;
    username: string | null;
}