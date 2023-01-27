import { RegisterUser } from "../models/new-user.interface";

export const existingUsers: {[key: string] : RegisterUser } = {
        'laura.woods@example.com': {name: 'laura.woods@example.com', password: '111111Aa!'},
        'marten.faber@example.com': {name: 'marten.faber@example.com', password: '222222Aa!'}
    }

