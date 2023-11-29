import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { response } from 'express';
import { Book } from './test-request-get';

@Component({
  selector: 'app-test-request-get',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './test-request-get.component.html',
  styleUrl: './test-request-get.component.scss'
})
export class TestRequestGetComponent {
  bookList: Book[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {


  }

  searcBookList(name: string){
    this.http.get<Book[]>('https://www.anapioficeandfire.com/api/books?name='+name)
    .subscribe(response => {
      this.bookList = response;
    });
  }

}
