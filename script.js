tool.fixedDistance = 30
var layer = project.activeLayer

function onMouseMove(event) {
  var path = new Path.Circle({
    center: event.middlePoint,
    radius: Math.round(Math.random() * 30) + 5
  })
  path.fillColor = {
    hue: event.count * 3,
    saturation: 1,
    brightness: 1
  }
}

var myPath;

        function onMouseDown(event) {
            myPath = new Path();
            myPath.strokeColor = 'teal';
            myPath.strokeWidth =8;
        }
        
        function onMouseDrag(event) {
            myPath.add(event.point);
        }
