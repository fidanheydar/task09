
const htmlBodyTag=document.body;

const myNewH1Tag=document.createElement("h1");
myNewH1Tag.textContent="Hello Everyone !"
htmlBodyTag.append(myNewH1Tag)
myNewH1Tag.style.textAlign="center";
myNewH1Tag.style.marginTop="400px"


let i = 0;
let colors = ['#E1D4BB','#FFD93D', '#E76161', '#BACDDB','#DEDEA7','#DDFFBB'];

 let changeColor=function(){
    document.body.style.backgroundColor = colors[i];
    i++;
    if(i>=colors.length){
        i=0;
    }
}
setInterval(changeColor, 1000);