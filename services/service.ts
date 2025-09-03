export interface HttpResponse<T = unknown> {
    items?: T;
    message: string;
    status_code: number;
}
