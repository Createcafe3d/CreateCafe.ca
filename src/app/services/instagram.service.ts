import { MatSidenav } from '@angular/material';
import { Injectable } from '@angular/core';
import { INSTAGRAM_ACCESS_TOKEN } from './access-token';
import { HttpClient } from '@angular/common/http';
const API_BASE = 'https://api.instagram.com/v1/';

@Injectable()
export class InstagramService {
  constructor(private http: HttpClient) {}

  posts: InstagramPost[] = [];

  fetchMedia() {
    const path = 'users/2558029400/media/recent/';
    const url = `${API_BASE}${path}?access_token=${INSTAGRAM_ACCESS_TOKEN}&count=6`;
    this.posts = [];
    this.http.get(url).subscribe((data: any) => {
      data.data.forEach((post: any) => {
        this.posts.push({
          caption: post.caption.text,
          createdTime: new Date(post.created_time * 1000),
          id: post.id,
          image: post.images.standard_resolution.url,
          link: post.link,
          user: {
            id: post.user.id,
            name: post.user.full_name,
            username: post.user.username,
            profileImage: post.user.profile_picture
          }
        });
      });
    });
  }
}

export interface InstagramPost {
  caption: string;
  createdTime: Date;
  id: string;
  image: string;
  link: string;
  user: {
    id: string;
    name: string;
    username: string;
    profileImage: string;
  };
}
