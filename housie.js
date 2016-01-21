var usedNum = new Array(91); 
window.onload = function newcard() 
{
    
    for(var a=0;a<100;a++)
        usedNum[a]=0;
    
    
    for(var c=0;c<45;c++)
    {
        do
          {
            var n=Math.floor(Math.random()*100);
          }while(usedNum[n]==1);
        document.getElementById("sq"+c).innerHTML = n;
        usedNum[n]=1;
    }
}
