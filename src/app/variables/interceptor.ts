import { ObserversModule } from "@angular/cdk/observers";
import { HttpEvent, HttpHandler, HttpInterceptor,HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CookieService } from "ngx-cookie-service";
import { Observable } from "rxjs";
import { DomainName } from "./pathTools";

@Injectable({
    providedIn:'root'
})
export class interceptor implements HttpInterceptor {
    constructor(
        private coolieService : CookieService
    ){}
    intercept(req:HttpRequest<any>,next:HttpHandler):Observable<HttpEvent<any>>{
        const token = this.coolieService.get('TW-Cookie');
        console.log("token="+token)
        const myRequest = req.clone({
            url : DomainName + req.url,
            headers : req.headers.append('Authorization','token '+token)
        });
        return next.handle(myRequest) 
    }
    
}