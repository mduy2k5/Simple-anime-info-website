// Function when click at one anime
function setdelay(){
    console.log("scroll");
}
setTimeout(setdelay, 10000);
function clicked(classs,imgs,names,content,backcolor,textcolor,leftm, topm,backimg){
    document.getElementById("sec2").style.display='flex';
    document.getElementById("sec2").style.backgroundColor = backcolor;
        
    //document.getElementById("sec2").style.backgroundImage = "url("+imgs+")";
    document.getElementById("content").style.display='none';
    const mainsec = document.createElement("div");
    mainsec.className = "mainsec";
    mainsec.id = "mainsec";
    mainsec.style.backgroundImage = "url("+backimg+")";
    const image = document.createElement("img");
    image.src = imgs;
    mainsec.append(image);
    const secondsec = document.createElement('div');
    secondsec.className = "secondsec";
    secondsec.id = "secondsec";
    secondsec.style.display = "flex";
    secondsec.style.marginLeft= leftm;
    secondsec.style.marginTop = topm;
    console.log(topm);
    const text1 = document.createElement('h3');
    text1.innerText = names;
    text1.id = "contenttext1";
    text1.className = "contenttext1";
    text1.style.color = textcolor;
    const text2 = document.createElement('h3');
    text2.textContent = content;
    text2.id = "contenttext2";
    text2.className = "contenttext2";
    text2.style.textShadow = "1px 1px "+textcolor;
    secondsec.append(text1);
    secondsec.append(text2);
    const btn = document.createElement('button');
    btn.className = "btn1";
    btn.id = "btn1";
    //btn.onclick = function() {start2();};
    btn.innerText = "Watch";
    btn.style.backgroundColor = textcolor;
    secondsec.append(btn);
    mainsec.appendChild(secondsec);
    
    
    document.getElementById("sec2").append(mainsec);
    window.scrollTo({ top: 145, behavior: 'smooth' });
    // let i = 0;
    // while (i< 145){
    //     window.scrollTo(0,i);
    //     setdelay();
    //     i = i+1;
    // }
    // const lop = (i) => {
    //     setTimeout(()=> {
    //         i+= 1;
    //         window.scrollTo(0,i);
    //         if (i< 145) lop(i);
    //     },15);
    // };
    // lop(i);
    
}

// Function after login
function start(){
    document.getElementById("start").style.opacity=0;
    document.getElementById("start").style.marginTop='-900px';
    document.getElementById("nav-links").style.display='flex';
    document.getElementById("s003").style.display='flex';
    document.getElementById("content").style.display='flex';
    
}
// Function back from info page
function start1(){
    document.getElementById("start").style.opacity=0;
    document.getElementById("start").style.marginTop='-900px';
    document.getElementById("nav-links").style.display='flex';
    document.getElementById("s003").style.display='flex';
    document.getElementById("content").style.display='flex';
    window.scrollTo(0,0);
    document.getElementById("sec2").style.display='none';
    try{
        document.getElementById("mainsec").remove();
    }
    catch(rrr){
        console.log("Error");
    }
}
