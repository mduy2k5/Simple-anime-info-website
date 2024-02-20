// Function when click at one anime
function clicked(classs,imgs,names,content,backcolor,textcolor){
    document.getElementById("sec2").style.display='flex';
    document.getElementById("sec2").style.backgroundColor = backcolor;
    document.getElementById("content").style.display='none';
    const mainsec = document.createElement("div");
    mainsec.className = "mainsec";
    mainsec.id = "mainsec";
    const image = document.createElement("img");
    image.src = imgs;
    mainsec.append(image);
    const secondsec = document.createElement('div');
    secondsec.className = "secondsec";
    secondsec.id = "secondsec";
    const text1 = document.createElement('h3');
    text1.innerText = names;
    text1.id = "contenttext1";
    text1.className = "contenttext1";
    text1.style.color = textcolor;
    const text2 = document.createElement('h3');
    text2.textContent = content;
    text2.id = "contenttext2";
    text2.className = "contenttext2";
    secondsec.append(text1);
    secondsec.append(text2);
    const btn = document.createElement('button');
    btn.className = "btn1";
    btn.id = "btn1";
    btn.onclick = function() {start1();};
    btn.innerText = "Back";
    btn.style.backgroundColor = textcolor;
    secondsec.append(btn);
    mainsec.appendChild(secondsec);
    document.getElementById("sec2").append(mainsec);
    window.scrollTo(0, window.innerHeight);
}
// Function after login
function start(){
    document.getElementById("start").style.opacity=0;
    const winheight = String(window.innerHeight) + "px";
    document.getElementById('start').style.height = winheight;
    const winheightneg = String(-window.innerHeight) + "px";
    document.getElementById("start").style.marginTop= winheightneg;
    document.getElementById("nav-links").style.display='flex';
    document.getElementById("s003").style.display='flex';
    document.getElementById("content").style.display='flex';
    
}
// Function back from info page
function start1(){
    document.getElementById("start").style.opacity=0;
    const winheightneg = String(-window.innerHeight) + "px";
    document.getElementById("start").style.marginTop=winheightneg;
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