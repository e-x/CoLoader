/* 
 *  Chain loader.
 *  One by one script loader.
 *  
 *  https://github.com/e-x/CoLoader
 */


'use strict';

var scripts = ["script1","script2","script3"];

function Init(){

    Get("body").appendChild(LoadScript(scripts[0],0));
    
}

function LoadScript(name,id){
    
    var a = document.createElement("script");
    a.src = "js/" + name + ".js";
    a.onload = function (){ 
        if ( id < scripts.length - 1) {   
             Get("body").appendChild(LoadScript(scripts[id+1],id+1)); 
        }
    };
    
}

function Get(e){ 
    
    var a = document.getElementById(e);
    if ( a  ) { 
        return a; 
    } else { 
        return 0;
    }
    
}