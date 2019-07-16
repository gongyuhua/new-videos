import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { PlayVideoService } from "src/app/service/playVideo.service";
import { Subject } from "rxjs";

@Component({
  selector: "app-item",
  templateUrl: "./item.component.html",
  styleUrls: ["./item.component.css"]
})
export class ItemComponent implements OnInit {
  @Input() tagItem;
  itemChanged = new Subject();

  constructor(
    private route: ActivatedRoute,
    private service: PlayVideoService
  ) {}

  ngOnInit() {}
  getListByTagValue() {
  //
  }
}
