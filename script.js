// Function when click at one anime
function clicked(classs,imgs,names,content,backcolor,textcolor){
    document.getElementById("sec2").style.display='flex';
    document.getElementById("sec2").style.backgroundColor = backcolor;
    document.getElementById("content").style.display='none';
    document.getElementById("content_header").style.display='none';
    document.getElementById("anime-trending").style.display='none';

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
function top_anime() {
    fetch('https://api.jikan.moe/v4/top/anime')
    .then((response) => response.json())
    .then((json) => { 
        let count = 1;
        console.log(json);
        json.data.forEach(anime => {
            if (count > 10) return; // Chỉ lấy 10 anime đầu tiên
            const big_div = document.createElement('div');
            big_div.className = "swiper-slide";
            big_div.id = "swiper-slide";
            const item_div = document.createElement('div');
            item_div.className = "item";
            const number_div = document.createElement('div');
            number_div.className = "number";
            const span_ele = document.createElement('span');
            span_ele.textContent = count;
            number_div.append(span_ele);
            const text_ele = document.createElement('div');
            text_ele.className = "film-title-dynamic-name";
            text_ele.textContent = anime.title;
            number_div.append(text_ele);
            item_div.append(number_div);
            const image = document.createElement('img');
            image.src = anime.images.jpg.image_url;
            image.className = "film-poster";
            item_div.append(image);
            const clear_fix = document.createElement('div');
            clear_fix.className = "clearfix";
            item_div.append(clear_fix);
            big_div.append(item_div);
            document.getElementById("swiper-wrapper").append(big_div);
            count++;
        });
    })
    .catch((error) => {
        console.error('Error fetching data:', error);
    });
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
    document.getElementById("anime-trending").style.display = 'block';
    document.getElementById("content_header").style.display='flex';
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
// first load
function firstrender() {
    // call ApI
    fetch('https://api.jikan.moe/v4/seasons/now')
    .then((response) => response.json())
    .then((json) => {
        console.log(json);
        json.data.slice(0,21).forEach(anime => {
            const node = document.createElement('li');
            node.className = anime.mal_id;
            const image = document.createElement('img');
            image.src = anime.images.jpg.image_url;
            node.append(image);
            const text = document.createElement('h4');
            text.textContent = anime.title;
            node.appendChild(text);
            node.onclick = function () { 
                fetch('https://api.jikan.moe/v4/anime/'+ anime.mal_id +'/full')
                .then((response) => response.json())
                .then((json) => {
                    clicked(json.data.mal_id,json.data.images.jpg.large_image_url,json.data.title,json.data.synopsis,"#ffffff","#000000");
                })
                .catch((error) => {
                    console.error('Error fetching data:', error);
                });
                fetch('https://api.jikan.moe/v4/anime/'+ anime.mal_id +'/pictures')
                .then((response) => response.json())
                .then((json) => {
                    console.log(json);
                })
                .catch((error) => {
                    console.error('Error fetching data:', error);
                });
            };
            document.getElementById("content").appendChild(node);
        });
    })
    .catch((error) => {
        console.error('Error fetching data:', error);
    });
}

