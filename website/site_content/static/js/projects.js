var TextAnimation = function (techItemElement, toRotate) {
    this.toRotate = toRotate;
    this.techItemElement = techItemElement;
    this.loopNum = 0;
    this.tick();
};

TextAnimation.prototype.tick = function () {
    // animation duration
    var DURATION = 2500;

    // use i to keep track of word in array we're displaying
    var i = this.loopNum % this.toRotate.length;

    // wrap word in animated span
    this.techItemElement.innerHTML = '<span class="wrap cool-text-animation">' + this.toRotate[i] + '</span>';

    // set animation duration
    this.techItemElement.children[0].style.animationDuration = (DURATION / 1000).toString() + 's';
    
    var that = this;
    this.loopNum++;

    setTimeout(function () {
        // reset HTML to "" so nothing is displayed and no animations continue in the background
        that.techItemElement.innerHTML = "";
        that.tick();
    }, DURATION);
};

window.onload = function () {
    var elements = document.getElementsByClassName('project-tech');
    for (var i = 0; i < elements.length; i++) {
        var toRotate = Array
            .from(elements[i].children);

        for (var j = 0; j < toRotate.length; ++j) {
            toRotate[j] = toRotate[j].innerText;
        }

        if (toRotate) {
            new TextAnimation(elements[i], toRotate);
        }
    }
};