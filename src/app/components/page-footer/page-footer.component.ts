import { Component, OnInit } from '@angular/core';
import { InstagramService, InstagramPost } from '../../services/instagram.service';
import { DomSanitizer, SafeUrl, SafeStyle } from '@angular/platform-browser';
import * as moment from 'moment';

@Component({
  selector: 'page-footer',
  templateUrl: './page-footer.component.html',
  styleUrls: ['./page-footer.component.scss']
})
export class PageFooterComponent implements OnInit {
  constructor(private instagram: InstagramService, private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.instagram.fetchMedia();
  }

  openInstagramPost(postUrl: string): void {
    window.open(postUrl, '_blank');
  }

  bgUrl(url: string): SafeStyle {
    const style = `url('${url}')`;
    return this.sanitizer.bypassSecurityTrustStyle(style);
  }

  shortCaption(caption: string): string {
    return (caption.length > 100) ? caption.substring(0, 100) + '...' : caption;
  }

  formatDate(date: Date): string {
    return moment(date).fromNow();
  }

  get instagramPosts(): InstagramPost[] {
    return this.instagram.posts;
  }
}
