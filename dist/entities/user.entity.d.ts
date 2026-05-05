export declare enum UserRole {
    OWNER = "owner",
    ADMIN = "admin",
    STAFF = "staff"
}
export declare class User {
    id?: number;
    username?: string;
    password?: string;
    role?: UserRole;
}
