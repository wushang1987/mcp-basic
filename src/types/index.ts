// filepath: c:\GitHupWorkspace\mcp-basic\src\types\index.ts
export interface RequestWithParams<T> extends Express.Request {
  params: T;
}

export interface ResponseWithBody<T> extends Express.Response {
  body: T;
}

export interface NextFunction {
  (err?: any): void;
}