import { Tags } from "./../post/tags";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { Post } from "../post/post";

@Injectable({
  providedIn: "root"
})
export class VideoService {
  constructor(private httpClient: HttpClient) {}

  getList(): Observable<Post[]> {
    return this.httpClient
      .get("http://atstest.antra.net/gentis/api/video/")
      .pipe(
        map(response => response as Post[]),
        catchError(error => this.handlerErrors(error))
      );
  }

  getTags(): Observable<Tags[]> {
    return this.httpClient
      .get("http://atstest.antra.net/gentis/api/video/tag/count")
      .pipe(
        map(response => response as Tags[]),
        catchError(error => this.handlerErrors(error))
      );
  }
  handlerErrors(error: Error): Observable<any> {
    console.log(error);
    return;
  }
}
