var a = 0;
var b = 1;
var c = 0;
const d = document.getElementById('count');
var e = 0;
const f =()=>{
  a+=b
  d.innerText=a
};
const g =(h)=>{
if (h==1){
if (a>=cost){
a-=cost
b+=1
}}else{
if (a>=cost2){
a-=cost2
c+=1
}
}
}
const i = (j,k,l,m) => {
var act = k+(l*m)
var b = act-(l/2);
    var b2 = b**2;
    return Math.floor((-b)+Math.sqrt(b2+(l*(j)*(2)))/(l));
}
i(a,20,5,b-1)
var names = {a:'clicks',b:'cpc',c:'cps',d:'div',e:'rebirths',f:'click function',g:'buy function',h:'used in g',i:'cost function'}
