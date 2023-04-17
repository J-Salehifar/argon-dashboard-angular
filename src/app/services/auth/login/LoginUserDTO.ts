export class LoginUserDTO {
    constructor(
        public username: string,
        public password: string,
    ) { }
}


export class CurrentUser {
    constructor(
        public user_id: number,
        public user_first_name: string,
        public user_last_name: string,
        public user_position: string,
    ) {

    }
}


export interface IloginUserAccount {
    status: string,
    data: {
        token: string,
        token_expiretime: number,
        user_first_name: string,
        user_last_name: string,
        user_id: number,
        user_position: string
    }
    message: string
}

export class null_user {
    constructor(
        public user_id: number = 0,
        public user_first_name: string = '',
        public user_last_name: string = '',
        public user_position: string = '',
    ) { }

}


export interface checkUserAuth{
    status: string,
    data: {
        user_id: number,
        user_first_name: string,
        user_last_name: string,
        user_position: string
    }
    message: string
}
