import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { TreeNode } from 'angular-tree-component';

@Component({
  selector: 'app-virtual-scroll-tree',
  templateUrl: './virtual-scroll-tree.component.html',
  styleUrls: ['./virtual-scroll-tree.component.scss']
})
export class VirtualScrollTreeComponent implements OnInit, AfterViewInit {
  public nodes;
  public options = {
    nodeHeight: 23,
    useVirtualScroll: true,
    dropSlotHeight: 3
  };
  @ViewChild('tree', {static: true}) tree;

  constructor() { }

  ngOnInit() {
    this.nodes = this.generateData(600, 20);
  }

  ngAfterViewInit(): void {
    // this.tree.treeModel.expandAll();
  }

  private generateData = (level1Count: number, level2Count: number = 0) => {
    const result = new Array(500).fill(null).map((item, i) => ({
      id: `${i}`,
      name: `rootDynamic${i}`,
      children: new Array(100).fill(null).map((item, n) => ({
        id: `${i}.${n}`,
        name: `rootChildDynamic${i}.${n}`
      }))
    }));

    return result;
  }

}
