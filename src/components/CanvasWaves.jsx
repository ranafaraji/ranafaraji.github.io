import {useEffect,useRef} from 'react';
export default function CanvasWaves(){
 const ref=useRef(null);
 useEffect(()=>{
  const canvas=ref.current,ctx=canvas.getContext('2d');if(!ctx)return;
  const reduced=matchMedia('(prefers-reduced-motion: reduce)'),parent=canvas.parentElement;
  let width=0,height=0,frame=0,time=0,visible=true,pointer={x:.75,y:.5},target={x:.75,y:.5};
  const resize=()=>{width=parent.clientWidth;height=parent.clientHeight;const dpr=Math.min(devicePixelRatio||1,2);canvas.width=width*dpr;canvas.height=height*dpr;ctx.setTransform(dpr,0,0,dpr,0,0);if(reduced.matches)draw();};
  function draw(){ctx.clearRect(0,0,width,height);const mobile=width<700,lines=mobile?12:23;
   for(let j=0;j<lines;j++){ctx.beginPath();for(let x=0;x<=width;x+=7){const base=height*.68+j*9;const dist=(x/width-pointer.x);const influence=Math.exp(-dist*dist*16);const y=base+Math.sin(x*.008+time+j*.15)*(mobile?18:36)+Math.cos(x*.003-time*.6)*25-influence*(pointer.y-.5)*65;if(x===0)ctx.moveTo(x,y);else ctx.lineTo(x,y);}ctx.strokeStyle=`rgba(247,179,207,${.045+j/lines*.09})`;ctx.lineWidth=1;ctx.stroke();}}
  function tick(){if(!visible||document.hidden||reduced.matches){frame=0;return;}pointer.x+=(target.x-pointer.x)*.045;pointer.y+=(target.y-pointer.y)*.045;time+=.006;draw();frame=requestAnimationFrame(tick);}
  function start(){if(!frame&&!reduced.matches&&visible&&!document.hidden)frame=requestAnimationFrame(tick);else if(reduced.matches)draw();}
  const move=e=>{const r=parent.getBoundingClientRect();target={x:(e.clientX-r.left)/r.width,y:(e.clientY-r.top)/r.height};};
  const observer=new ResizeObserver(resize);observer.observe(parent);
  const intersection=new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;if(!visible){cancelAnimationFrame(frame);frame=0;}else start();});intersection.observe(parent);
  const visibility=()=>{if(document.hidden){cancelAnimationFrame(frame);frame=0;}else start();};const preference=()=>{cancelAnimationFrame(frame);frame=0;start();};
  parent.addEventListener('pointermove',move);document.addEventListener('visibilitychange',visibility);reduced.addEventListener('change',preference);resize();start();
  return()=>{cancelAnimationFrame(frame);observer.disconnect();intersection.disconnect();parent.removeEventListener('pointermove',move);document.removeEventListener('visibilitychange',visibility);reduced.removeEventListener('change',preference);};
 },[]);
 return <canvas ref={ref} aria-hidden="true"/>;
}
