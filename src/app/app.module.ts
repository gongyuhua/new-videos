import { SafePipe } from './pipe/safe.pipe';
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { LoginComponent } from "./login/login.component";
import { TagsComponent } from "./tags/tags.component";
import { DetailComponent } from "./tags/detail/detail.component";
import { ListComponent } from "./tags/list/list.component";
import { ItemComponent } from "./tags/list/item/item.component";
import { SortPipe } from "./pipe/sort.pipe";
import { PlayComponent } from "./play/play.component";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule } from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    TagsComponent,
    DetailComponent,
    ListComponent,
    ItemComponent,
    SortPipe,
    PlayComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
