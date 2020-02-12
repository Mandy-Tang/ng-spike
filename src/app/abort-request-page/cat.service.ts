import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Apollo} from 'apollo-angular';
import gql from 'graphql-tag';

@Injectable({
  providedIn: 'root'
})
export class CatService {

  constructor(private http: HttpClient, private apollo: Apollo) { }

  public getAll() {
    return this.http.get('http://localhost:3000/cats');
  }

  public getAuthor(id: Number = 1) {
    return this.apollo.query({
      query: gql`
        {
          author(id: 1) {
            id
            firstName
            lastName
            posts {
              id
              title
              votes
            }
          }
        }
      `
    });
  }
}
