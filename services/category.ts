
import http, { apiVersion } from "./httpClient";
import { normalizeString } from "@/utils/normalizeString";
import { HttpResponse } from "./service";
import { ICategory } from "@/types";

// export const CreateDatabase = async (database: ICreateDatabaseForm) => {
//     return http.post<ICreateDatabaseForm, HttpResponse<IDatabase>>(`/${apiVersion}/databases`, database);
// }

export const GetCategories = async (params: any) => {
    return http.get<any, HttpResponse<ICategory[]>>(`/categories?${normalizeString(params)}`);
}

// export const DeleteDatabase = async (databaseId: string) => {
//     return http.delete<HttpResponse<unknown>>(`/${apiVersion}/databases/${databaseId}`);
// }

// export const UpdateDatabase = async (databaseId: string, database: ICreateDatabaseForm) => {
//     return http.put<ICreateDatabaseForm, HttpResponse<IDatabase>>(`/${apiVersion}/databases/${databaseId}`, database);
// }

// export const TestConnection = async (connection: TestConnectionForm) => {
//     return http.post<TestConnectionForm, HttpResponse<unknown>>(`/${apiVersion}/databases/test-connection`, connection);
// }

// export const GetDatabaseById = async (databaseId: string) => {
//     return http.get<string, HttpResponse<IDatabase>>(`/${apiVersion}/databases/${databaseId}`);
// }