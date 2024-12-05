    let offsetX=0
    let offsetY=0
    var img3=document.querySelector('.img3')
    var img1=document.querySelector('.img1')
    var img2=document.querySelector('.img2')
    function moveRight(){
        if(img1.style.visibility=="visible"){
            img1.style.visibility="hidden"
            img2.style.visibility="visible"
            img3.style.visibility="hidden"
            offsetX+=100
            img2.style.transform=`translate(${offsetX}px,${offsetY}px)`
            img1.style.transform=`translate(${offsetX}px,${offsetY}px)`
            img3.style.transform=`translate(${offsetX}px,${offsetY}px)`

            
        }else{
            img1.style.visibility="visible"
            img2.style.visibility="hidden"
            img3.style.visibility="hidden"

             offsetX+=100
             img2.style.transform=`translate(${offsetX}px,${offsetY}px)`
            img1.style.transform=`translate(${offsetX}px,${offsetY}px)`
            img3.style.transform=`translate(${offsetX}px,${offsetY}px)`

        }
        
    }

    function moveLeft(){
        if(img1.style.visibility=="visible"){
            img1.style.visibility="hidden"
            img2.style.visibility="visible"
            img3.style.visibility="hidden"
            offsetX-=100
            img2.style.transform=`translate(${offsetX}px,${offsetY}px)`
            img1.style.transform=`translate(${offsetX}px,${offsetY}px)`
            img3.style.transform=`translate(${offsetX}px,${offsetY}px)`


        }else{
            img1.style.visibility="visible"
            img2.style.visibility="hidden"
            img3.style.visibility="hidden"
             offsetX-=100
             img2.style.transform=`translate(${offsetX}px,${offsetY}px)`
            img1.style.transform=`translate(${offsetX}px,${offsetY}px)`
            img3.style.transform=`translate(${offsetX}px,${offsetY}px)`

        }
        
    }

    function moveUp(){
        img1.style.visibility="hidden"
        img2.style.visibility="hidden"
        offsetY-=100
        img3.style.visibility="visible"
        img3.style.transform=`translate(${offsetX}px,${offsetY}px)`
        img2.style.transform=`translate(${offsetX}px,${offsetY}px)`
        img1.style.transform=`translate(${offsetX}px,${offsetY}px)`
    }

    function moveDown(){
        img1.style.visibility="hidden"
        img2.style.visibility="hidden"
        offsetY+=100
        img3.style.visibility="visible"
        img3.style.transform=`translate(${offsetX}px,${offsetY}px)`
        img2.style.transform=`translate(${offsetX}px,${offsetY}px)`
        img1.style.transform=`translate(${offsetX}px,${offsetY}px)`

    }
let x=0
   function zoom(){
x+=1.2
        img3.style.transform=`scale(${x})`
        img2.style.transform=`scale(${x})`
        img1.style.transform=`scale(${x})`

    }


   function Mini(){
x-=0.52
        img3.style.transform=`scale(${x})`
        img2.style.transform=`scale(${x})`
        img1.style.transform=`scale(${x})`

    }