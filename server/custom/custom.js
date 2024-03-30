export class Success{
    constructor(status, message) {
        this.status = status;
        this.message = message;
    }
}

export const Problem = (status,message) => {
    const error = new Error();
    error.status = status;
    error.message = message;
    
    return error;
}