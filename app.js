var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};

function adjustTimelineCenters() {
    let centers = document.querySelectorAll('.timeline-center');
    let cards = document.querySelectorAll('.card')
    if (window.innerWidth <= 600) {
        centers.forEach(center => {
            center.style.display = 'none';
        });
        cards.forEach(card => {
            card.style.margin = '15px'
            if (card.style.backgroundColor === 'transparent'){
                card.style.display = 'none'
            }
            else {
                return
            }
        })
        
    } else {
        centers.forEach(center => {
            center.style.display = 'flex';
        })
        cards.forEach(card => {
            card.style.margin = '0'
            if (card.style.display === 'none'){
                card.style.display = 'flex'
                card.style.margin = '0'
            }
            else {
                return
            }
        })
    }
}

// Run the function on initial load
document.addEventListener('DOMContentLoaded', adjustTimelineCenters);

// Run the function on window resize
window.addEventListener('resize', adjustTimelineCenters);