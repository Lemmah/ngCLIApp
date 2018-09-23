import { Component, OnInit } from '@angular/core';
import { TestContentService } from '../test-content.service';

@Component({
  selector: 'app-my-test',
  templateUrl: './my-test.component.html',
  styleUrls: ['./my-test.component.css']
})
export class MyTestComponent implements OnInit {
  testContent: string;

  constructor(private testContentService: TestContentService) { }

  ngOnInit() {
    this.testContent = this.testContentService.getContent();
  }

}
