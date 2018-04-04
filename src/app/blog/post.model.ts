export class Post {
  id: number;
  title: string;
  body: string;
  author: string;
  createdAt: string;

  constructor(id: number, title: string, body: string, author: string, createdAt: string) {
    this.id = id;
    this.title = title;
    this.body = body;
    this.author = author;
    this.createdAt = createdAt;
  }
}
