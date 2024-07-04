let container = document.querySelector('.container');
let n = 16, m = 16;

function gridMaker(){
  
  for (let i = 0; i < n; i++){
  
    let divCol = document.createElement('div');
  
    for (let j = 0; j < m; j++){
    
      let div = document.createElement('div');
  
        div.addEventListener('mouseover', function(){
          div.style.backgroundColor = getRandomColor();
        });
        
        divCol.appendChild(div);
        
        div.style.backgroundColor = 'black';
        let wid = 960/n;
        wid -= 2;
        let hei = 960/m;
        hei -= 2;
        console.log(wid);
        console.log(hei);
        div.style.width = wid + 'px';
        div.style.height = hei + 'px';
        div.style.margin = '1px';
    
  }
  
      divCol.style.margin = (divCol.style.margin * -1) + 'px';
      container.appendChild(divCol);
    
  }
  
}
gridMaker();

let custom = document.querySelector('.custom');
custom.addEventListener('click',function () {
  let customM = 100;
  let customN = 100;
  while (customM >= 100 || customN >= 100){
  
    customM = prompt('Enter a number of rows less than 100');
  
    customN = prompt('Enter a number of columns less than 100');
    
  }
  n = customN;
  m = customM;
  container.innerHTML = '';
  gridMaker();
});

let reset = document.querySelector('.reset');
reset.addEventListener('click', function () {
  n = 16;
  m = 16;
  container.innerHTML = '';
  gridMaker();
});

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
