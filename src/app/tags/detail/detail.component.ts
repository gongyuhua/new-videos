import { Component, OnInit } from "@angular/core";
import { Post } from "src/app/post/post";
import { VideoService } from "src/app/service/video.service";
import { ActivatedRoute } from "@angular/router";
import { PlayVideoService } from "src/app/service/playVideo.service";
import { fromEvent } from "rxjs";

@Component({
  selector: "app-detail",
  templateUrl: "./detail.component.html",
  styleUrls: ["./detail.component.css"]
})
export class DetailComponent implements OnInit {
  public http;
  itemList: Post[];
  videoType;
  constructor(
    private service: VideoService,
    private route: ActivatedRoute,
    private playService: PlayVideoService
  ) {}
  ngOnInit() {
    this.service.getList().subscribe(data => {
      this.itemList = data;
      console.log(this.itemList);
    });
    this.route.queryParams.subscribe(params => {
      this.videoType = params["TagValue"];
    });
  }
  playVideo(v) {
    console.log(v);
    this.playService.playVideoSelected.emit(v);
  }
}
