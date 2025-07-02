canvas=document.getElementById("canvas")

canvas.height=window.innerHeight
canvas.width=window.innerWidth
c=canvas.getContext("2d")
let sc=null;
let wth=10
let x=null;
let y=null;
let down=null;
addEventListener("mousedown",function(e){
    down=true
    x=e.clientX
    y=e.clientY
})
addEventListener("mousemove",function(e){
    if(down){
        c.beginPath()
        c.moveTo(x,y)
        c.lineTo(e.clientX,e.clientY)
        c.lineWidth=wth;
        c.lineCap="round"
        c.strokeStyle=sc
        c.stroke()
        x=e.clientX
        y=e.clientY
    }

})
addEventListener("mouseup",function(e){
    down=false
})


function color(color){
    sc=color
}

function wh(){
    slide=document.getElementById("input")
    wth=(slide.value)/4
}