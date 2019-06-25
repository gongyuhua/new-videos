import { Injectable, EventEmitter } from "@angular/core";
import { Post } from "../post/post";
import { Subject, BehaviorSubject } from "rxjs";
import { VideoPlayInterface } from "../interface/videoPlay.interface";

@Injectable({
  providedIn: "root"
})
export class PlayVideoService {
  videoContent: Post[];
  playVideoSelected = new BehaviorSubject<VideoPlayInterface>({});
  constructor() {}
}
