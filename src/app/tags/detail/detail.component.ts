import { Component, OnInit } from "@angular/core";
import { VideoService } from "src/app/service/video.service";
import { ActivatedRoute, Params } from "@angular/router";
import { PlayVideoService } from "src/app/service/playVideo.service";

@Component({
  selector: "app-detail",
  templateUrl: "./detail.component.html",
  styleUrls: ["./detail.component.css"]
})
export class DetailComponent implements OnInit {
  public http;
  itemList: any = [];
  videoType;
  results;

  constructor(
    private service: VideoService,
    private route: ActivatedRoute,
    private playService: PlayVideoService
  ) {}
  ngOnInit() {
    this.route.queryParams.subscribe((params: Params) => {
      this.videoType = params["TagValue"];
      this.service.getListByTagValue(this.videoType).subscribe(data => {
        this.itemList = data;
      });
    });
  }
  playVideo(videocard) {
    this.playService.playVideoSelected.next(videocard);
  }
}
