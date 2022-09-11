
    let izq= document.getElementById("izq-fecha");
    let der= document.getElementById("der-fecha");
    let pantalla=document.querySelector(".pantalla");

   
    let Carrusel=["url(./src/fotocarusel1.PNG)","url(./src/fotocarusel2.PNG)","url(./src/fotocarusel3.PNG)","url(./src/fotocarusel4.PNG)","url(./src/fotocarusel5.PNG)"];
    let i=0;


   izq.addEventListener("click",()=>{
      if(i==4){
        i=0;
      pantalla.style.backgroundImage=Carrusel[i];
      }else{
        i++;
        pantalla.style.backgroundImage=Carrusel[i];
      }
     
   });
   


   der.addEventListener("click",()=>{
      if(i==0){
        i=4;
        pantalla.style.backgroundImage=Carrusel[i];
      }else{
        i--;
        pantalla.style.backgroundImage=Carrusel[i];
      }
      
   });












  let contenedor= document.querySelector(".contenedor");
  const fizq= document.querySelector(".f-izq");
  const fder= document.querySelector(".f-der");
  const primero= document.querySelector(".primero");
  const segundo= document.querySelector(".segundo");
  const tercero= document.querySelector(".tercero");
  const cuarto= document.querySelector(".cuarto");
  const quinto= document.querySelector(".quinto");
  const sexto= document.querySelector(".sexto");

  let Provedor=["../Proyecto/src/provedor1.PNG","../Proyecto/src/provedor2.PNG","../Proyecto/src/provedor3.PNG","../Proyecto/src/provedor4.PNG","../Proyecto/src/provedor5.PNG","../Proyecto/src/provedor6.PNG","../Proyecto/src/provedor7.PNG","../Proyecto/src/provedor8.PNG","../Proyecto/src/provedor9.PNG"];
  let e=0;
  
  fizq.addEventListener("click",()=>{
    e++;
    if(e>5){
      e=0;
    }
    
    
    contenedor.style.animation="lado-izq 1s";
    console.log("pas"+e);

         if(e==1){
        primero.src=Provedor[e];
        segundo.src=Provedor[e+1];
        tercero.src=Provedor[e+2];
        cuarto.src=Provedor[e+3];
        quinto.src=Provedor[e+4];
        sexto.src=Provedor[0];

      }
      else if(e==2){
        primero.src=Provedor[e];
        segundo.src=Provedor[e+1];
        tercero.src=Provedor[e+2];
        cuarto.src=Provedor[e+3];
        quinto.src=Provedor[0];
        sexto.src=Provedor[1];

      }
      else if(e==3){
        primero.src=Provedor[e];
        segundo.src=Provedor[e+1];
        tercero.src=Provedor[e+2];
        cuarto.src=Provedor[0];
        quinto.src=Provedor[1];
        sexto.src=Provedor[2];
 
      }
      else if(e==4){
        primero.src=Provedor[e];
        segundo.src=Provedor[e+1];
        tercero.src=Provedor[0];
        cuarto.src=Provedor[1];
        quinto.src=Provedor[2];
        sexto.src=Provedor[3];
       
      }

      if(e==5){
        primero.src=Provedor[5];
        segundo.src=Provedor[0];
        tercero.src=Provedor[1];
        cuarto.src=Provedor[2];
        quinto.src=Provedor[3];
        sexto.src=Provedor[4];
      }
      
      else if(e==0){
        primero.src=Provedor[0];
        segundo.src=Provedor[5];
        tercero.src=Provedor[4];
        cuarto.src=Provedor[3];
        quinto.src=Provedor[2];
        sexto.src=Provedor[1];
        
      }
      
    setTimeout(()=>{
      contenedor.style.animation="";
     
    },1000)
  
  })

  fder.addEventListener("click",()=>{
    e--;
    contenedor.style.animation="lado-der 1s";
    if(e<0){
      e=5;
    }

     if(e==-1){
      primero.src=Provedor[5];
      segundo.src=Provedor[0];
      tercero.src=Provedor[1];
      cuarto.src=Provedor[2];
      quinto.src=Provedor[3];
      sexto.src=Provedor[4];
      console.log(e)
    }
    else if(e==4){
      primero.src=Provedor[4];
      segundo.src=Provedor[5];
      tercero.src=Provedor[0];
      cuarto.src=Provedor[1];
      quinto.src=Provedor[2];
      sexto.src=Provedor[3];
      console.log(e)
     
    }else if(e==3){
      primero.src=Provedor[3];
      segundo.src=Provedor[4];
      tercero.src=Provedor[5];
      cuarto.src=Provedor[0];
      quinto.src=Provedor[1];
      sexto.src=Provedor[2];
      console.log(e)
    }
    else if(e==2){
      primero.src=Provedor[2];
      segundo.src=Provedor[3];
      tercero.src=Provedor[4];
      cuarto.src=Provedor[5];
      quinto.src=Provedor[0];
      sexto.src=Provedor[1];
      console.log(e)
    }
    else if(e==1){
      primero.src=Provedor[1];
      segundo.src=Provedor[2];
      tercero.src=Provedor[3];
      cuarto.src=Provedor[4];
      quinto.src=Provedor[5];
      sexto.src=Provedor[0];
      console.log(e)
    }
   
    else if(e==0){
      primero.src=Provedor[0];
      segundo.src=Provedor[1];
      tercero.src=Provedor[2];
      cuarto.src=Provedor[3];
      quinto.src=Provedor[4];
      sexto.src=Provedor[5];
      console.log(e)
    }
    else if(e==5){
      primero.src=Provedor[5];
      segundo.src=Provedor[0];
      tercero.src=Provedor[1];
      cuarto.src=Provedor[2];
      quinto.src=Provedor[3];
      sexto.src=Provedor[4];
      console.log(e)
    }


    setTimeout(()=>{
      contenedor.style.animation="";
  
    },1000)
  
  })



/*

         if(e==1){
        primero.src=Provedor[e];
        segundo.src=Provedor[e+1];
        tercero.src=Provedor[e+2];
        cuarto.src=Provedor[e+3];
        quinto.src=Provedor[e+4];
        sexto.src=Provedor[0];

      }
      else if(e==2){
        primero.src=Provedor[e];
        segundo.src=Provedor[e+1];
        tercero.src=Provedor[e+2];
        cuarto.src=Provedor[e+3];
        quinto.src=Provedor[0];
        sexto.src=Provedor[1];

      }
      else if(e==3){
        primero.src=Provedor[e];
        segundo.src=Provedor[e+1];
        tercero.src=Provedor[e+2];
        cuarto.src=Provedor[0];
        quinto.src=Provedor[1];
        sexto.src=Provedor[2];
 
      }
      else if(e==4){
        primero.src=Provedor[e];
        segundo.src=Provedor[e+1];
        tercero.src=Provedor[0];
        cuarto.src=Provedor[1];
        quinto.src=Provedor[2];
        sexto.src=Provedor[3];
       
      }
      
      if(e==5){
        primero.src=Provedor[5];
        segundo.src=Provedor[0];
        tercero.src=Provedor[1];
        cuarto.src=Provedor[2];
        quinto.src=Provedor[3];
        sexto.src=Provedor[4];
      }
      
      else if(e==0){
        primero.src=Provedor[0];
        segundo.src=Provedor[5];
        tercero.src=Provedor[4];
        cuarto.src=Provedor[3];
        quinto.src=Provedor[2];
        sexto.src=Provedor[1];
        
      } */