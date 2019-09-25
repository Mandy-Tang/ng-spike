import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-virtual-scroll-tree',
  templateUrl: './virtual-scroll-tree.component.html',
  styleUrls: ['./virtual-scroll-tree.component.scss']
})
export class VirtualScrollTreeComponent implements OnInit {
  public nodes;
  public options = {};

  constructor() { }

  ngOnInit() {
    this.nodes = this.generateData(600, 20);
  }

  private generateData = (level1Count: number, level2Count: number = 0) => {
    let index = 0;
    const result = [];
    for (let i = 0; i < level1Count; i++) {
      result.push({
        id: index,
        name: `first level node - id ${index}`,
        children: []
      });
      index++;
      for (let j = 0; j < level2Count; j++) {
        result[i].children.push({
          id: index,
          name: `second level node - id ${index}`,
        });
        index++;
      }
    }
    return result;
  }

}
