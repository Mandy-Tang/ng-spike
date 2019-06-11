import { Component, OnInit } from '@angular/core';
// import '../../../util/www/js/Init';
// import "../../../util/www/js/Init.js";
// import "../../../util/www/deflate/pako.min.js";
// import "../../../util/www/deflate/base64.js";
// import "../../../util/www/jscolor/jscolor.js";
// import "../../../util/www/sanitizer/sanitizer.min.js";
// import "../../../../node_modules/mxgraph/javascript/mxClient.js";
// import "../../../util/www/js/EditorUi.js";
// import "../../../util/www/js/Editor.js";
// import "../../../util/www/js/Sidebar.js";
// import "../../../util/www/js/Graph.js";
// import "../../../util/www/js/Format.js";
// import "../../../util/www/js/Shapes.js";
// import "../../../util/www/js/Actions.js";
// import "../../../util/www/js/Menus.js";
// import "../../../util/www/js/Toolbar.js";
// import "../../../util/www/js/Dialogs.js";
import { run } from "./mxgraph-run.js";



@Component({
  selector: 'app-mxgraph',
  templateUrl: './mxgraph.component.html',
  styleUrls: ['./mxgraph.component.scss']
})
export class MxgraphComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    run();
  }

}
