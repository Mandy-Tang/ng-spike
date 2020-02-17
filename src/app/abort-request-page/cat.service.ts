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

  public simpleAbort() {
    const abortController = new AbortController();
    const { signal } = abortController;
    this.apollo.query({
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
      `,
      context: {
        fetchOptions: {
          signal,
        },
      },
    }).subscribe(res => {

    })

    setTimeout(() => {
      abortController.abort();
    }, 1000);
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

  public generateGetAuthorRequest() {
    const abortController = new AbortController();
    const { signal } = abortController;
    const request = this.apollo.query({
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
      `,
      context: {
        fetchOptions: {
          signal,
        },
      },
    });
    return {
      abortController,
      request,
    }
  }
}
