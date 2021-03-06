

var par = document.getElementById('main_div');

//the 81 cells
for(var i=1 ; i<82 ;i++)
{
    let element = document.createElement('div');
    element.className = "ch";
    element.id = i;
    //element.innerHTML = i;
    par.appendChild(element);
}


// //attaching click event for each cell.
// var cell = document.querySelectorAll('.ch');
// cell.forEach(foo)

// function foo(itm)
// {
    
//     itm.addEventListener("click" , function(event){
//         //console.log(event.target);
//         var it = event.target;
//         it.style.backgroundColor = "grey";
//         it.innerHTML = "1";

//         if(it.hasAttribute("bombed"))
//         {
//             random_place.forEach(plantbomb);
//             function plantbomb(place)
//             {  
//                 cell[place+1].setAttribute("class","bombed_place");
//             }
            
//         }      

       
        
//     });
// }




// //random place where to bomb is planted
// var random_place = calculaterandom();
// random_place.forEach(plantbomb);
// function plantbomb(place)
// {  
//     cell[place+1].setAttribute("bombed","yes")
// }







// function calculaterandom()
// {
//    let array =[] ;
//     for(let i=0 ; i<10 ; i++)
//     {
//         let t  = Math.floor(Math.random() *81);
//         if(!array.includes(t))
//         {
//             array.push(t)
//         }
//         else
//         {
//             i--;
//         }
         
//     }
//     return array;
// }

//Reference to elements
var par = document.getElementById('main_div');
var score = document.getElementById('score');
var cell = document.querySelectorAll('.ch');
var isgameover =false;




par.addEventListener("click" , (event)=>
{
    place_bomb_to_randome_places();
    if(!isgameover){
    if(event.target = 'div' && event.target.id !='main_div')
    {
       // event.target.style.backgroundColor = "grey";
        event.target.innerHTML = "1";        
        gameover(event.target);
        update_score(event.target);
        
       
        //have to cheak is game over or not
    
          
    }
    }
})


//randomely place the bombs
var random_place = calculaterandom();
function place_bomb_to_randome_places()
{
    
    random_place.forEach((ple)=>{
        cell[ple-1].setAttribute("bombed","yes");   
    })
}







//update the score
function update_score(n)
{
    if(!n.hasAttribute("clicked") && !n.hasAttribute("bombed")){
        score.innerHTML =  Number(score.innerHTML)+Number(n.innerHTML);
        n.setAttribute("clicked" , "true");
        n.style.backgroundColor = "grey";
        
    }
    
    

}


function gameover(obj)
{
    if(obj.hasAttribute("bombed"))
    {

        random_place.forEach((itm)=>{
            cell[itm-1].setAttribute("class","bombed_place");
            cell[itm-1].innerHTML = "";
            
            //console.log("game over runs");
            isgameover = true;
            
        })
    }
     
}




function calculaterandom()
{
   let array =[] ;
    for(let i=0 ; i<10 ; i++)
    {
        let t  = Math.floor(Math.random() *81);
        if(!array.includes(t) && !array.includes(0))
        {
            array.push(t)
        }
        else
        {
            i--;
        }
         
    }
    return array;
}
console.log(random_place);


//reset the all
function reset_button()
{
    cell.forEach((elem)=>{

        if(elem.hasAttribute('clicked'))
        {
            elem.removeAttribute('clicked');
        }
        
        if(elem.hasAttribute('bombed'))
        {
            elem.removeAttribute('bombed');
        }
        if(elem.hasAttribute('style'))
        {
            elem.removeAttribute('style');
        }
        if(elem.hasAttribute('class'))
        {
            elem.setAttribute("class" , "ch");
        }
        elem.innerHTML = "";
        

    })
    score.innerHTML = "0";
    isgameover = false;

}