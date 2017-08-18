import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


import { NotificationsService } from 'angular2-notifications';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {
  private status = {
    400: '错误的请求。由于语法错误，该请求无法完成。',
    401: '未经授权，禁止访问资源。',
    403: '已禁止，服务器拒绝响应。',
    404: '未找到资源，无法找到请求的位置。',
    405: '方法不被允许。使用该位置不支持的请求方法进行了请求。',
    406: '不可接受。服务器只生成客户端不接受的响应。',
    407: '需要代理身份验证。客户端必须先使用代理对自身进行身份验证。',
    408: '请求超时。等待请求的服务器超时。',
    409: '冲突。由于请求中的冲突，无法完成该请求。',
    410: '过期。请求页不再可用。',
    411: '长度必需。未定义“内容长度”。',
    412: '前提条件不满足。请求中给定的前提条件由服务器评估为 false。',
    413: '请求实体太大。服务器不会接受请求，因为请求实体太大。',
    414: '请求 URI 太长。服务器不会接受该请求，因为 URL 太长。',
    415: '不支持的媒体类型。服务器不会接受该请求，因为媒体类型不受支持。',
    416: 'HTTP 状态代码 {0}',
    500: '内部服务器错误。',
    501: '未实现。服务器不识别该请求方法，或者服务器没有能力完成请求。',
    503: '服务不可用。服务器当前不可用(过载或故障)。'
  };

  constructor(
    private _notificationsService: NotificationsService
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // 请求拦截
    // const authReq = req.clone({ url: req.url.replace('http://', 'https://') });
    // Setting new headers
    // const authReq = req.clone({setHeaders: {Authorization: authHeader}});
    const started = Date.now();
    return next
      .handle(req)
      .do(event => {  // 计算请求时间
        if (event instanceof HttpResponse) {
          const elapsed = Date.now() - started;
          console.log(`Request for ${req.urlWithParams} took ${elapsed} ms.`);
        }
      })
      .catch((error: HttpResponse<any>) => {
        console.log(error);
        if (error.ok === false) {
          if (this.status.hasOwnProperty(error.status)) {
            this._notificationsService.error(`错误${error.status} :`, this.status[error.status]);
          } else {
            this._notificationsService.error(`错误${error.status} :`, error.statusText);
          }
        }
        return Observable.throw(error);
      });
  }
}
