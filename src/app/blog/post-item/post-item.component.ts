import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.css']
})
export class PostItemComponent implements OnInit {

  posts = [{title: 'Basic routing added', body: '<p>I have added some really basic routing in the menu and I have restructured how the blog posts are displayed. Now the component is responsible for storing them. Later on obviously they will come from a database.</p>', author: 'Mestahh', date: '2018-04-04'},
    {
    title: 'First post', body: '<p>Well, this is my site now. My main goal is to create an Angular website.</p>\n' +
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
    '        </p>', author: 'Mestahh', date: '2018-03-31'
  }];

  constructor() { }

  ngOnInit() {
  }

}
