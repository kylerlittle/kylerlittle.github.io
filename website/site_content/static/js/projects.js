// animation duration
const DURATION = 4000;

var TextAnimation = function (techItemElement, toRotate) {
    this.toRotate = toRotate;
    this.techItemElement = techItemElement;
    this.loopNum = 0;
    this.tick();
};

TextAnimation.prototype.tick = function () {
    // use i to keep track of word in array we're displaying
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    // set visibility
    // this.techItemElement = this.techItemElement.children[i];
    // this.techItemElement.style.visibility = 'visible';

    // span class that has the animation
    // this.techItemElement.children[i].style.visibility = 'visible';
    this.techItemElement.innerHTML = '<span class="wrap cool-text-animation">' + fullTxt + '</span>';

    this.techItemElement.children[0].style.animationDuration = (DURATION / 1000).toString() + 's';
    

    var that = this;
    this.loopNum++;

    setTimeout(function () {
        that.techItemElement.innerHTML = "";
        that.tick();
    }, DURATION);
};

window.onload = function () {
    var elements = document.getElementsByClassName('project-tech');
    for (var i = 0; i < elements.length; i++) {
        var toRotate = Array
            .from(elements[i].children)
            .map(techItem => techItem.innerText);

        if (toRotate) {
            new TextAnimation(elements[i], toRotate);
        }
    }
};