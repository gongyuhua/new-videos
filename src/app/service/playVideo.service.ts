import { Injectable, EventEmitter } from "@angular/core";
import { Post } from "../../shared/post/post";
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: "root"
})
export class PlayVideoService {
  videoContent: Post[];
  playVideoSelected = new BehaviorSubject({});
  constructor() {}
}
