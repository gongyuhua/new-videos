import { Component, OnInit, Input } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { PlayVideoService } from "src/app/service/playVideo.service";

@Component({
  selector: "app-item",
  templateUrl: "./item.component.html",
  styleUrls: ["./item.component.css"]
})
export class ItemComponent implements OnInit {
  @Input() tagItem;

  constructor(
    private route: ActivatedRoute,
    private service: PlayVideoService
  ) {}

  ngOnInit() {}
}
