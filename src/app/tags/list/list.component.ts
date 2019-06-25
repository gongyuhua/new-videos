import { VideoService } from "./../../service/video.service";
import { Component, OnInit } from "@angular/core";
import { SortPipe } from "../../pipe/sort.pipe";
import { KeyValue } from "@angular/common";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"]
})
export class ListComponent implements OnInit {
  tagsList = {};
  constructor(private service: VideoService) {}

  ngOnInit() {
    this.service.getTags().subscribe(data => {
      this.tagsList = data;
      console.log(this.tagsList);
    });
  }

  // reverseKeyOrder = (a: KeyValue<number,string>, b: KeyValue<number,string>): number => {
  //   return a.key > b.key ? -1 : (b.key > a.key ? 1 : 0);
  // }
  valueOrder = (
    a: KeyValue<string, number>,
    b: KeyValue<string, number>
  ): number => {
    return b.value - a.value;
  };
}
