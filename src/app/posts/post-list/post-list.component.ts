import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  constructor() { }
  // posts = [
  //   {title: '1 Post', content: "asdfkj agagg sgooww "},
  //   {title: '2 Post', content: "asdfkj agagg sgooww "},
  //   {title: '3 Post', content: "asdfkj agagg sgooww "},

  // ];
  @Input() posts: Post[] = [];
  ngOnInit() {
  }

}
