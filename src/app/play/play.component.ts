import { ActivatedRoute, Params } from "@angular/router";
import {
  Component,
  OnInit,
  ChangeDetectorRef,
  ChangeDetectionStrategy
} from "@angular/core";
import { PlayVideoService } from "../service/playVideo.service";
import { Observable, Subject } from "rxjs";

@Component({
  selector: "app-play",
  templateUrl: "./play.component.html",
  styleUrls: ["./play.component.css"]
})
export class PlayComponent implements OnInit {
  title;
  videoId;
  vType;
  description: string;
  publishedDateTime: string;
  youtubeId;
  showList;
  constructor(
    private route: ActivatedRoute,
    private playService: PlayVideoService,
    private change: ChangeDetectorRef
  ) {
    // this.route.params.subscribe((params: Params) => {
    //   this.youtubeId = params["videoId"];
    //   console.log(this.youtubeId);
    // });
    // this.title.next("hwllo");
  }

  ngOnInit() {
    console.log("oninit");
    console.log(this);
    this.showList = {
      title: "test"
    };

    this.playService.playVideoSelected.subscribe(v => {
      this.showList = v;
    });
    //get youtubeId
    // this.route.params.subscribe((params: Params) => {
    //   this.youtubeId = params["v"];
    //   console.log(this.youtubeId);
    // });
    // this.route.params.subscribe(params => {
    //   this.videoId = params["v.videoId"];
    // });
    // this.playService.playVideoSelected.subscribe(v => {
    //   this.description = v.description;
    //   this.youtubeId = v.youtubeVideoId;
    //   this.title = v.title;
    //   console.log(this.description);
    //   console.log(this.youtubeId);
    //   console.log(this.title);
    // });
    // this.route.queryParams.subscribe(params => {
    //   this.vType = params["TagValue"];
    // });
  }
}
