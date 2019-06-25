import { Injectable, EventEmitter } from "@angular/core";
import { Post } from "../post/post";

@Injectable({
  providedIn: "root"
})
export class PlayVideoService {
  videoContent: Post[];
  playVideoSelected = new EventEmitter();
  constructor() {}
}
