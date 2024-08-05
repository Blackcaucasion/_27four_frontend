import { Component } from '@angular/core';
import { PathService } from '../path.service';

@Component({
  selector: 'app-shortest-path',
  templateUrl: './shortest-path.component.html',
  styleUrls: ['./shortest-path.component.css']
})
export class ShortestPathComponent {
  source: string = '';
  destination: string = '';
  route: any;

  constructor(private pathService: PathService) { }

  findPath() {
    this.pathService.getShortestPath(this.source, this.destination).subscribe(data => {
      console.log(data)
      this.route = data;
    });
  }
}
