export class Post {
  postId: number;
  title: string;
  body: string;
  author: string;
  createdAt: string;

  constructor(postId: number, title: string, body: string, author: string, createdAt: string) {
    this.postId = postId;
    this.title = title;
    this.body = body;
    this.author = author;
    this.createdAt = createdAt;
  }
}
