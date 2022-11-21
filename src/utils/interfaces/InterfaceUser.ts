import Note from "./InterfaceNote";

export default interface User {
    uid: string;
    username: string;
    email: string;
    password: string;
    notes: Note[];
}