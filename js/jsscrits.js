
console.log("weclome to javascript");
console.log(10);
console.log(10.10);
console.log({fname:"natrayan",gender:"male"});
console.table({fname:"natrayan",gender:"male"});
console.log([5,10,20,15,25,50]);
console.table([5,10,20,15,25,50]);
console.log(true);

//var a;
//let b;
var a=5;
let b=7;
const c=10;

console.log(a);
console.log(b);
console.log(c);

a=6;
console.log(a);
b=8;
console.log(b);
console.log(c);

a=7.5;
console.log(a);
b=9.5;
console.log(b);

a=8.6;
console.log(a);
b=10.6;
console.log(b);

a="natrayan";
console.log(a);
b="naveen";
console.log(b);

a={FNAME:"NATRAYAN",gender:"male"};
console.log(a);
console.table(a);

b={fname:"natrayan", gender:"male"};
console.log(a);
console.table(a);


a=[12,11,25,60];
console.log(b);
console.table(b);

b=[12,11,25,60];
console.log(b);
console.table(b);

console.clear();


a=1;
console.log(typeof a);

a=1.5
console.log(typeof a);

a="natrayan";
console.log(a+": "+typeof a);

a=true;
console.log(a+":"+typeof a);

a=[12,15,10];
console.log(typeof a);

a={fname:"NATRAYAN", gender:"male"};
console.log(typeof a);

a=20;
console.log(typeof a);
a=a.toString();
console.log(typeof a);

a=true;
console.log(typeof a);

a=parseInt(a);
console.log(typeof a);
console.log(a);

a=parseFloat(a);
console.log(typeof a);




a="60"
d=55;
a=a+d;
console.log(a);



a="60"

d=55;
d=String(d);
a=Number(a);
a=a+d;
console.log(a);

var x=true;
console.log(x,typeof x);
x=Number(x);
console.log(x,typeof x);

const f={name:"natrayan",age:26}
console.log(f,typeof f);
f.name="naveen"
console.log(f,typeof f);

f.name=25;
console.log(f,typeof f);

console.clear();

let v1=10;
let v2=20;
console.log(v1+v2);
console.log(v1-v2);
console.log(v1*v2);
console.log(v1/v2);
console.log(v1**v2);
v1=++v1;
console.log(v1);
v1=--v1;
console.log(v1);

v1=25
console.log(v1);

v1+=35;
console.log(v1);
v1-=20;
console.log(v1);
v1*=20
console.log(v1);
v1/=20;
console.log(v1);
v1%=20
console.log(v1);



console.log (v1==5);
console.log(v1==="5",typeof v1);
console.log(v1!=1);
console.log(v1!=="5",typeof v1);

console.log(v1>1);
console.log(v1<1);
console.log(v1>=5);
console.log(v1<=10);
console.clear();

v1="s"
console.log(7==5 || 7<2 || 7>5);
console.log(v1=="s");
console.log(!(v1=="s"));

console.clear();
console.log(v1);
var output=v1=="s"? "v1 has value":"v1 doesnot have value";
console.log(output);

m=60;
 var mark=(35<=m && m<60) ?"grade c":(60<=m&& m<80) ? "Grade B" : (80<=m && m<90) ? "Grade A": (90<=m && m<=100)?
 "Grade Distinction" : "fail";
 console.log(mark);

function findGrade(){
    m=34;
    var mark=(35<=m &&m<60) ? "grade c": (60<=m&& m<80) ? "Grade B": (80<=m&& m<90)? "Grade A":(90<=m&&m<=100)? "Grade Distinction": "Fail";
    console.log(mark);


}

findGrade();

function findgrade(m,k){
    

}








