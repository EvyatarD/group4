import { Component } from '@angular/core';
import { BookService } from "./book.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Exam';
  search: string;
  page: number;
  showInfo: number;

  constructor(private bookService: BookService) {
    this.page = -1;
    this.search = "";
    this.showInfo = null;
  }

  searchBook(e: Event, input: HTMLInputElement) {
    // this.loggerService.log('myQuery ' +  this.myQuery.nativeElement.value);
    // this.loggerService.log('Searching movie: event ' + JSON.stringify(e) + ' input' + JSON.stringify(input));
    // this.initDefaultValues();
    e.preventDefault();
    this.page = -1;
    this.search = input.value;
    this.loadMovies();
    // this.favoritesComponent.isMenuOpen = false;
  }

  loadMovies() {
    // const url = `${this.endpoint}&page=${this.page}&s=${this.search}`;
    // this.loggerService.log(`fetching movies from url: ${url}`);
    // fetch(url)
    // .then( response => response.json() )
    this.page += 1;
    console.log(this.page);
    this.bookService.loadBook(this.search, this.page);

  }

  showI(id: number) {

    if (this.showInfo == id)
      this.showInfo = null;
    else
      this.showInfo = id;
  }
}
