import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { NoticeBoardComponent } from "../notice-board/notice-board.component";
import { HomeComponent } from "../home/home.component";
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
  selector: 'app-main',
  imports: [FooterComponent, NoticeBoardComponent, HomeComponent, NavbarComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
