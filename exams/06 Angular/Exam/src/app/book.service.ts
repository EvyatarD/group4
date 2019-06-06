import { Injectable } from '@angular/core';
import { IBook } from './Book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  books: IBook[];
  tempBook: IBook;
  endPoint: string;
  isSearched: boolean;
  hasMore: boolean;

  constructor() {
    this.books = [];
    this.endPoint = "https://www.googleapis.com/books/v1/volumes?key=AIzaSyBQx_8AIKCiQdYGcIR2cvlo3ljjOq5bDNc";
    this.isSearched = false;
    this.hasMore = false;
  }

  loadBook(searchTerm: string, page: number) {
    let tempArrBooks = [];
    let tempTitle = "";
    let tempAuthor = [];
    let tempUrl = "";
    if (page == 0)
      this.books = [];

    const url = `${this.endPoint}&q=${searchTerm}&startIndex=${page}`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        tempArrBooks = (data.items);
        for (let book of tempArrBooks) {
          tempTitle = book.volumeInfo.title;
          if (book.volumeInfo.authors) {
            for (let author of book.volumeInfo.authors)
              tempAuthor.push(author);
          }
          tempUrl = book.volumeInfo.previewLink;
          this.books.push({ authors: tempAuthor, title: tempTitle, url: tempUrl, publisher: book.volumeInfo.publisher, publishedDate: book.volumeInfo.publishedDate, description: book.volumeInfo.description, thumbnail: book.volumeInfo.imageLinks.smallThumbnail });
        }
        console.log(this.books);
        this.isSearched = true;
        this.hasLoadMore(searchTerm, page + 1);
      })
      .catch(() => {
        console.log("error");
        alert("No result");
        this.hasLoadMore(searchTerm, page + 1);
        this.isSearched = false;
      })
      ;
  }

  hasLoadMore(searchTerm: string, page: number) {
    const url = `${this.endPoint}&q=${searchTerm}&startIndex=${page}`;
    fetch(url).then(response => response.json())
      .then(data => {
        if (!data.items)
          this.hasMore = true;

      });

  }

}
