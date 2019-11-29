class Complex {

    re:number;
    im:number;

    constructor(re,im){
    this.re = re;
    this.im = im;
    }

    add(complex:Complex){
        let im = this.im + complex.im;
        let re = this.re + complex.re;
        return new Complex(re,im);
    }

    sub(complex:Complex){
        let im = this.im - complex.im;
        let re = this.re - complex.re;
        return new Complex(re,im);
    }

    toString(){
        console.log('re: ',this.re,'im: ',this.im);
    }
}

let l1 = new Complex(2,4);
let l2 = new Complex(-4,7);
let l3 = l1.add(l2);
let l4 = l1.sub(l2);

l3.toString();
l4.toString();

