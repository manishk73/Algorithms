'use strict'

const colors = ["aliceblue","antiquewhite","aqua","aquamarine","azure","beige","bisque","black","blanchedalmond","blue","blueviolet","brown","burlywood","cadetblue","chartreuse","chocolate","coral","cornflowerblue","cornsilk","crimson","cyan","darkblue","darkcyan","darkgoldenrod","darkgray","darkgreen","darkgrey","darkkhaki","darkmagenta","darkolivegreen","darkorange","darkorchid","darkred","darksalmon","darkseagreen","darkslateblue","darkslategray","darkslategrey","darkturquoise","darkviolet","deeppink","deepskyblue","dimgray","dimgrey","dodgerblue","firebrick","floralwhite","forestgreen","fuchsia","gainsboro","ghostwhite","gold","goldenrod","gray","green","greenyellow","grey","honeydew","hotpink","indianred","indigo","ivory","khaki","lavender","lavenderblush","lawngreen","lemonchiffon","lightblue","lightcoral","lightcyan","lightgoldenrodyellow","lightgray","lightgreen","lightgrey","lightpink","lightsalmon","lightseagreen","lightskyblue","lightslategray","lightslategrey","lightsteelblue","lightyellow","lime","limegreen","linen","magenta","maroon","mediumaquamarine","mediumblue","mediumorchid","mediumpurple","mediumseagreen","mediumslateblue","mediumspringgreen","mediumturquoise","mediumvioletred","midnightblue","mintcream","mistyrose","moccasin","navajowhite","navy","oldlace","olive","olivedrab","orange","orangered","orchid","palegoldenrod","palegreen","paleturquoise","palevioletred","papayawhip","peachpuff","peru","pink","plum","powderblue","purple","red","rosybrown","royalblue","saddlebrown","salmon","sandybrown","seagreen","seashell","sienna","silver","skyblue","slateblue","slategray","slategrey","snow","springgreen","steelblue","tan","teal","thistle","tomato","turquoise","violet","wheat","white","whitesmoke","yellow","yellowgreen"]

//const colors = ['lightgoldenrodyellow'];

/*function findColor(input) {
  
  if(!input) return [];
  let selectedCol =[]; 
  for(let k=0; k< colors.length;k++){
    let color = colors[k];
    let prevIndex = -1;
    
    for(let i=0; i< input.length; i++){
       let char = input.charAt(i);
       let current = color.indexOf(char,prevIndex); 
      
       if(current===-1) {
         prevIndex=-1;
         break;
       }
       prevIndex = current+1;
       
    }
    if(prevIndex!== -1){
     selectedCol.push(color);
    }
    
  }
  
  return selectedCol;
}*/

/*Optimized O(n+m) */
function findColor(input){

  let pattern = ""; let selected = [];
  for(let i=0; i< input.length;i++){
      pattern = pattern + `.*${input.charAt(i)}`;
  }
  pattern = new RegExp(pattern);
  for(let k=0; k< colors.length;k++){
    if(pattern.test(colors[k])){
        selected.push(colors[k]);
    }
  }
  return selected;
}

console.log(findColor('uqi'))
// [ 'darkturquoise', 'mediumaquamarine', 'mediumturquoise', 'paleturquoise', 'turquoise' ]

console.log(findColor('zre'))
// [ 'azure' ]

console.log(findColor('gold'))
// [ 'darkgoldenrod', 'gold', 'goldenrod', 'lightgoldenrodyellow', 'palegoldenrod' ]

