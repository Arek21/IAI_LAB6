var Complex = /** @class */ (function () {
    function Complex(re, im) {
        this.re = re;
        this.im = im;
    }
    Complex.prototype.add = function (complex) {
        var im = this.im + complex.im;
        var re = this.re + complex.re;
        return new Complex(re, im);
    };
    Complex.prototype.sub = function (complex) {
        var im = this.im - complex.im;
        var re = this.re - complex.re;
        return new Complex(re, im);
    };
    Complex.prototype.toString = function () {
        console.log('re: ', this.re, 'im: ', this.im);
    };
    return Complex;
}());
var l1 = new Complex(2, 4);
var l2 = new Complex(-4, 7);
var l3 = l1.add(l2);
var l4 = l1.sub(l2);
l3.toString();
l4.toString();
