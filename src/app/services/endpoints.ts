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