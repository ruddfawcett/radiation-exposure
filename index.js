window.onload = function() {
    var randomNumber = Math.floor(Math.random() * 1083) + 1;
    document.getElementById('image').src = `./images/${randomNumber}.jpg`;
    var image = document.getElementById('image');

    var img = new Image();
    img.src = image.src;

    img.onload = function() {
      try {
          var canvas = fx.canvas();
      } catch (e) {
          alert(e);
          return;
      }
      try {
          var canvas = fx.canvas();
      } catch (e) {
          alert(e);
          return;
      }

      var texture = canvas.texture(image);
      var startTime, endTime;

      function start() {
        startTime = new Date();
      };

      function end() {
        endTime = new Date();
        var diff = endTime - startTime;
        diff /= 1000;

        var seconds = Math.round(diff);
      }

      var seconds = 100000;
      var drawTexture = function() {
        seconds++;
        canvas.draw(texture).edgeWork(seconds).update();
      }

      var t = setInterval(drawTexture, 20);

      image.parentNode.insertBefore(canvas, image);

      var startTime, endTime;

      function start() {
        startTime = new Date();
      };

      function end() {
        endTime = new Date();
        var diff = endTime - startTime;
        diff /= 1000;

        var seconds = Math.round(diff);
      }

      var seconds = 300;
      var drawTexture = function() {
        seconds++;
        canvas.draw(texture).edgeWork(seconds).update();
      }

      var t = setInterval(drawTexture, 20);

      image.parentNode.insertBefore(canvas, image);
    }

    // image.parentNode.removeChild(image);
};
