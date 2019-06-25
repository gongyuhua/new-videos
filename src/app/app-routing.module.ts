import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TagsComponent } from "./tags/tags.component";
import { DetailComponent } from "./tags/detail/detail.component";
import { PlayComponent } from "./play/play.component";
import { LoginComponent } from "./login/login.component";

const routes: Routes = [
  { path: "", redirectTo: "/webapp", pathMatch: "full" },
  {
    path: "webapp",
    component: TagsComponent,
    children: [{ path: "video", component: DetailComponent }]
  },
  { path: "webapp/login", component: LoginComponent },
  { path: "webapp/video/:videoId", component: PlayComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
