export interface ResponseModel{
    message : string;
    allowed : boolean;
    statusCode : number;
    user : string;
}
//This recieves the message from the api for authentication purpose
export interface AdminResponseModel{
    message : string;
    allowed : boolean;
    statusCode : number;
}
