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
costs=ic(a)
costs2=ic2(a)
if (h==1){
r=i(a)
if (a>=costs){
a-=costs
b+=1*r
}}else{
r=i2(a)
if (a>=costs2){
a-=costs2
c+=1*r
}
}
}
const i = (j) => {
var k = 20
var l = 5
var m = b-1
var act = k+(l*m)
var total = (-(act-l/2) + Math.sqrt(((act-l/2)**2)+(2*l*j)))/l;
var r = Math.floor(total)
return r
}
const ic = (j) => {
var k = 20
var l = 5
var m = b-1
var act = k+(l*m)
var total = (-(act-l/2) + Math.sqrt(((act-l/2)**2)+(2*l*j)))/l;
var r = Math.floor(total)
var act2 = k+(m*l)
var cost=(r/2)*((act2*2)+((r-1)*l))
return cost
}
const i2 = (j) => {
var k = 20
var l = 10
var m = c
var act = k+(l*m)
var total = (-(act-l/2) + Math.sqrt(((act-l/2)**2)+(2*l*j)))/l;
var r = Math.floor(total)
return r
}
const ic2 = (j) => {
var k = 20
var l = 10
var m = c
var act = k+(l*m)
var total = (-(act-l/2) + Math.sqrt(((act-l/2)**2)+(2*l*j)))/l;
var r = Math.floor(total)
var act2 = k+(m*l)
var cost=(r/2)*((act2*2)+((r-1)*l))
return cost
}
var names = {a:'clicks',b:'cpc',c:'cps',d:'div',e:'rebirths',f:'click function',g:'buy function',h:'used in g',i:'cost function',jklm:'resourcesAvailable, priceStart, priceAdd, currentOwned'}
document.addEventListener('keypress', event => {
  if (event.code==='Digit1'){
g(1)
  }
  if (event.code==='Digit2'){
g(2)
}})
