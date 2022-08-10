import { environment } from "../../environments/environment";

export const SIGNUP_END_POINT: string = `${environment.apiUrl}/auth/user/signup`;
export const VERIFY_ACCOUNT_END_POINT: string = `${environment.apiUrl}/auth/user/validate`;
export const SIGNIN_END_POINT: string = `${environment.apiUrl}/auth/user/signin`;
export const RESET_VERIFY_EMAIL_END_POINT: string = `${environment.apiUrl}/auth/user/verify/reset/email`;
export const RESET_VERIFY_CODE_END_POINT: string = `${environment.apiUrl}/auth/user/verify/reset/code`;
export const RESET_PASSWORD_END_POINT: string = `${environment.apiUrl}/auth/user/reset/password`;
export const GOOGLE_SIGNIN_END_POINT: string = `${environment.apiUrl}/auth/google`;
//DASHBOARD ENDPOINTS
export const USER_DASHBOARD_END_POINT: string = `${environment.apiUrl}/dashboard/get`;



//COMPANY ENDPOINTS
export const GET_USER_COMPANIES_END_POINT: string = `${environment.apiUrl}/company/get`;
export const DELETE_USER_COMPANIES_END_POINT: string = `${environment.apiUrl}/company/delete`;
export const POST_USER_COMPANIES_END_POINT: string = `${environment.apiUrl}/company/add`;
export const PUT_USER_COMPANIES_END_POINT: string = `${environment.apiUrl}/company/update`;


//USER-INFO ENDPOINTS
export const USER_INFO_END_POINT: string = `${environment.apiUrl}/user/info`;


//EMPLOYEE ENDPOINTS
export const GET_USER_EMPLOYEES_END_POINT: string = `${environment.apiUrl}/employee/get`;
export const DELETE_USER_EMPLOYEES_END_POINT: string = `${environment.apiUrl}/employee/delete`;
export const POST_USER_EMPLOYEES_END_POINT: string = `${environment.apiUrl}/employee/add`;
export const PUT_USER_EMPLOYEES_END_POINT: string = `${environment.apiUrl}/employee/update`;