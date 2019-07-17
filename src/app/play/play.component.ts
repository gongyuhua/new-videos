import { ActivatedRoute, Params } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { PlayVideoService } from "../service/playVideo.service";
import { Subject } from "rxjs";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: "app-play",
  templateUrl: "./play.component.html",
  styleUrls: ["./play.component.css"]
})
export class PlayComponent implements OnInit {
  showList;
  youtubeId;
  videoId;
  videoUrl;

  constructor(
    private route: ActivatedRoute,
    private playService: PlayVideoService,
    private sanitizer: DomSanitizer
  ) {
    // this.route.params.subscribe((params: Params) => {
    //   this.youtubeId = params["videoId"];
    //   console.log(this.youtubeId);
    // });
    // this.playService.playVideoSelected.subscribe(v => {
    //   this.showList = v;
    //   console.log(this.showList);
    //   this.title = v.title;
    //   console.log(this.title);
    // });
  }

  ngOnInit() {
    //get youtubeId
    // this.route.params.subscribe((params: Params) => {
    //   this.youtubeId = params["v"];
    //   console.log(this.youtubeId);
    // });
    this.route.params.subscribe(params => {
      this.videoId = params["v.videoId"];
    });
    // this.route.queryParams.subscribe(params => {
    //   this.vType = params["TagValue"];
    // });
    this.playService.playVideoSelected.subscribe(v => {
      this.showList = v;
      this.updateVideoUrl();
      console.log(this.showList);
    });
  }
  updateVideoUrl() {
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://www.youtube.com/embed/${
        this.showList.youtubeVideoId
      }?autoplay=1&rel=0`
    );
  }
}
