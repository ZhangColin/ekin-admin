interface Window {
    existLoading: boolean;
    lazy: number;
    unique: number;
    tokenRefreshing: boolean;
    requests: Function[];
    eventSource: EventSource;
    loadLangHandle: Record<string, any>;
}

interface AnyObj {
    [key: string]: any;
}

interface TableDefaultData<T = any> {
    list: T;
    remark: string;
    total: number;
}

interface ApiResponse<T = any> {
    code: number;
    data: T;
    message: string;
    timestamp: number;
}

type ApiPromise<T = any> = Promise<ApiResponse<T>>;
