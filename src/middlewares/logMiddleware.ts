export const logMiddleware = (request: any, _:any, next: any) =>{
    const currentDate = new Date().toLocaleString();

    const method = request.method;
    const url = request.originalUrl;

    const logString = `[${currentDate}] ${method} ${url}`;
    console.log(logString);

    next();
}