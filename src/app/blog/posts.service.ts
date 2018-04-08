import {Injectable} from '@angular/core';
import {Post} from './post.model';

export class PostsService {

  posts = [
    new Post(4, 'Really simple authentication', `<p>I have added some really basic authentication. It is really simple, I have even stored the
  password in the source code as it is not protecting really anything. Except the music part. Relax, I will make it available soon again. Next thing 
  would be to prepare the DynamoDb and Cognito.</p>`, 'Mestahh', '2018-04-08'),
    new Post(3, 'First service', `<p>The first service had been introduced and I have added a couple things to make the code 
  a bit leaner. I have added some programmed routing here too. The hardest thing was that I didn't realise that the :id which I set up as a number
  was coming as a string so when finding that in the posts array I compared the string with the number and obviosly that was never true. I
  was even wondering that it could not be the case as I set number as a type in the model and in the service too, but I didn't count with the nature of
  html calls. Everything would be much easier if I would know how to properly do unit testing here. But that is coming later. First I have to
  dig deeper into routing and then forms and the HTTP calls and pipes etc. Parallel I have to set up a database, a Cognito user pool, an API, lambdas.
  It will be so much fun!</p>`, 'Mestahh', '2018-04-04'),
    new Post(2, 'Basic routing added', `<p>I have added some really basic routing in the menu and I have restructured how 
      the blog posts are displayed. Now the component is responsible for storing them. Later on obviously they will come 
      from a database.</p>`, 'Mestahh', '2018-04-03'),
    new Post(1, 'First post', '<p>Well, this is my site now. My main goal is to create an Angular website.</p>\n' +
      '\n' +
      '        <p>Technical specifications are for now: </p>\n' +
      '        <ul>\n' +
      '          <li>The whole site is served by AWS, totally serverless</li>\n' +
      '          <li>Everything is stored in DynamoDB</li>\n' +
      '          <li>API Gateway serves as the REST API behind the Angular site</li>\n' +
      '          <li>All functions are AWS lambdas</li>\n' +
      '          <li>User authentication is handled by AWS Cognito</li>\n' +
      '          <li>Google analytics is set up properly</li>\n' +
      '          <li>Everything should be stored on S3</li>\n' +
      '          <li>There should be an AWS automated deployment pipeline for Continuous delivery</li>\n' +
      '        </ul>\n' +
      '\n' +
      '        <p>Feature specifications:</p>\n' +
      '        <ul>\n' +
      '          <li>Copy what soundcloud can do in terms of upload, playback, organizing into albums, playlists, etc.</li>\n' +
      '          <li>I should be able to post an article to the blog, edit, delete, etc.</li>\n' +
      '        </ul>\n' +
      '        <p>\n' +
      '          Currently, I have the basic Angular app set up, I have some bootstrap styling and everything is uploaded to AWS\n' +
      '          S3, where it is served by a webserver (on S3 itself). In the Angular app, I have a couple Components at the moment only and\n' +
      '          they are not doing much. They basically just bind the HTML templates together.\n' +
      '          I have CloudFront set up there, so my site is replicated in\n' +
      '          every region, so it will be really fast. I bought a domain (<a href="http://mestahh.net" target="_blank">http://mestahh.net</a>) and that is bound in Route53 in AWS to\n' +
      '          serve the S3 content, which is this site. This is an extremely cool journey. I can\'t wait to have some real working content here.\n' +
      '        </p>\n' +
      '        <p>I have created a small git repository where I uploaded the angular application.\n' +
      '          I will create at least two more, one for the lambdas and another one for the CloudFormation scripts that will\n' +
      '          make the deployment possible. Here is the link: <a href="https://github.com/mestahh/mestahh-site" target="_blank">https://github.com/mestahh/mestahh-site</a>\n' +
      '        </p>', 'Mestahh', '2018-03-31')
  ];

  constructor() {
  }

  getPosts() {
    return this.posts;
  }

  getPost(postId: number) {
    return this.posts.find((x: Post) => {
      return x.id === postId;
    });
  }
}
