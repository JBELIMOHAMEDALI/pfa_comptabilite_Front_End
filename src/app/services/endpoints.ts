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
export const GET_USER_SELECTED_COMPANY_END_POINT: string = `${environment.apiUrl}/company/get/selected`;
export const DELETE_USER_COMPANIES_END_POINT: string = `${environment.apiUrl}/company/delete`;
export const POST_USER_COMPANIES_END_POINT: string = `${environment.apiUrl}/company/add`;
export const PUT_USER_COMPANIES_END_POINT: string = `${environment.apiUrl}/company/update`;
export const SET_SELECTED_USER_COMPANIES_END_POINT: string = `${environment.apiUrl}/company/set/selection`;

//USER-INFO ENDPOINTS
export const USER_INFO_END_POINT: string = `${environment.apiUrl}/user/info`;

//EMPLOYEE ENDPOINTS
export const GET_USER_EMPLOYEES_END_POINT: string = `${environment.apiUrl}/employee/get`;
export const DELETE_USER_EMPLOYEES_END_POINT: string = `${environment.apiUrl}/employee/delete`;
export const POST_USER_EMPLOYEES_END_POINT: string = `${environment.apiUrl}/employee/add`;
export const PUT_USER_EMPLOYEES_END_POINT: string = `${environment.apiUrl}/employee/update`;

//ACCOUNTING PLAN ENDPOINTS
export const GET_USER_ACCOUNTING_PLAN_SOURCES_END_POINT: string = `${environment.apiUrl}/accounting/plan/get/sources`;
export const GET_USER_ACCOUNTING_PLAN_END_POINT: string = `${environment.apiUrl}/accounting/plan/get`;
export const IMPORT_USER_ACCOUNTING_PLAN_END_POINT: string = `${environment.apiUrl}/accounting/plan/import`;
export const EXPORT_USER_ACCOUNTING_PLAN_END_POINT: string = `${environment.apiUrl}/accounting/plan/export`;
export const UNLINK_USER_ACCOUNTING_PLAN_END_POINT: string = `${environment.apiUrl}/accounting/plan/unlink`;
export const DELETE_USER_ACCOUNTING_PLAN_ROW_END_POINT: string = `${environment.apiUrl}/accounting/plan/delete/row`;
export const POST_USER_ACCOUNTING_PLAN_ROW_END_POINT: string = `${environment.apiUrl}/accounting/plan/add/row`;
export const PUT_USER_ACCOUNTING_PLAN_ROW_END_POINT: string = `${environment.apiUrl}/accounting/plan/update`;
export const POST_USER_ACCOUNTING_PLAN_END_POINT: string = `${environment.apiUrl}/accounting/plan/add`;


//TAXES ENDPOINTS
export const GET_USER_TAXES_END_POINT: string = `${environment.apiUrl}/tax/get`;
export const DELETE_USER_TAXES_END_POINT: string = `${environment.apiUrl}/tax/delete`;
export const POST_USER_TAXES_END_POINT: string = `${environment.apiUrl}/tax/add`;
export const PUT_USER_TAXES_END_POINT: string = `${environment.apiUrl}/tax/update`;

//CUSTOMERS ENDPOINTS
export const GET_USER_CUSTOMERS_END_POINT: string = `${environment.apiUrl}/customer/get`;
export const DELETE_USER_CUSTOMERS_END_POINT: string = `${environment.apiUrl}/customer/delete`;
export const POST_USER_CUSTOMERS_END_POINT: string = `${environment.apiUrl}/customer/add`;
export const PUT_USER_CUSTOMERS_END_POINT: string = `${environment.apiUrl}/customer/update`;
//PRODUCTS ENDPOINTS
export const GET_USER_PRODUCTS_END_POINT: string = `${environment.apiUrl}/products/get`;

//SERVICES ENDPOINTS
export const GET_USER_SERVICES_END_POINT: string = `${environment.apiUrl}/services/get`;
