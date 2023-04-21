let mellytitle = document.getElementById("ynwmelly-title");
let mellyh1 = document.getElementById("ynwmelly-h1");
let mellyinsta = document.getElementById("ynwmelly-insta");
let bslimetitle = document.getElementById("ynwbslime-title");
let bslimeh1 = document.getElementById("ynwbslime-h1");
let bslimeinsta = document.getElementById("ynwbslime-insta");
let bortlentitle = document.getElementById("ynwbortlen-title");
let bortlenh1 = document.getElementById("ynwbortlen-h1");
let bortleninsta = document.getElementById("ynwbortlen-insta");
let smokedaloctitle = document.getElementById("ynwsmokedaloc-title");
let smokedaloch1 = document.getElementById("ynwsmokedaloc-h1");
let smokedalocinsta = document.getElementById("ynwsmokedaloc-insta");

mellytitle.onmousemove = () => {
    mellyinsta.classList.add("show");
    mellyh1.classList.remove("show");
  }
  
  mellytitle.onmouseleave = () => {
    mellyh1.classList.add("show");
    mellyinsta.classList.remove("show");
  }

  bslimetitle.onmousemove = () => {
    bslimeinsta.classList.add("show");
    bslimeh1.classList.remove("show");
  }
  
  bslimetitle.onmouseleave = () => {
    bslimeh1.classList.add("show");
    bslimeinsta.classList.remove("show");
  }

  bortlentitle.onmousemove = () => {
    bortleninsta.classList.add("show");
    bortlenh1.classList.remove("show");
  }
  
  bortlentitle.onmouseleave = () => {
    bortlenh1.classList.add("show");
    bortleninsta.classList.remove("show");
  }

  smokedaloctitle.onmousemove = () => {
    smokedalocinsta.classList.add("show");
    smokedaloch1.classList.remove("show");
  }
  
  smokedaloctitle.onmouseleave = () => {
    smokedaloch1.classList.add("show");
    smokedalocinsta.classList.remove("show");
  }

  let seemore1 = document.getElementById("seemore1");

  seemore1.onclick = () =>
  {
    window.location.href = "../ynw-melly.php";
  }

  let seemore2 = document.getElementById("seemore2");

  seemore2.onclick = () =>
  {
    window.location.href = "../ynw-bslime.php";
  }

  let seemore3 = document.getElementById("seemore3");

  seemore3.onclick = () =>
  {
    window.location.href = "../ynw-bortlen.php";
  }

  let seemore4 = document.getElementById("seemore4");

  seemore4.onclick = () =>
  {
    window.location.href = "../ynw-smokedaloc.php";
  }

    let nav = document.getElementById("nav");
    let btnnav = document.getElementById("btnnav");

    btnnav.onclick = () => {
      nav.classList.toggle('menu_show');
    };  
    
    let menu = document.getElementById("menu");

    menu.onclick = () => {
        menu.classList.toggle("active");
    }

let btn1 = document.getElementById("btn1");
let vestClick1 = document.getElementById("vest-click1");

btn1.onclick = () => {
    vestClick1.classList.toggle('displayNone');
    vestClick2.classList.add('displayNone');
    vestClick3.classList.add('displayNone');
    vestClick4.classList.add('displayNone');
}

let btn2 = document.getElementById("btn2");
let vestClick2 = document.getElementById("vest-click2");

btn2.onclick = () => {
    vestClick1.classList.add('displayNone');
    vestClick2.classList.toggle('displayNone');
    vestClick3.classList.add('displayNone');
    vestClick4.classList.add('displayNone');
}

let btn3 = document.getElementById("btn3");
let vestClick3 = document.getElementById("vest-click3");

btn3.onclick = () => {
    vestClick1.classList.add('displayNone');
    vestClick2.classList.add('displayNone');
    vestClick3.classList.toggle('displayNone');
    vestClick4.classList.add('displayNone');
}

let btn4 = document.getElementById("btn4");
let vestClick4 = document.getElementById("vest-click4");

btn4.onclick = () => {
    vestClick1.classList.add('displayNone');
    vestClick2.classList.add('displayNone');
    vestClick3.classList.add('displayNone');
    vestClick4.classList.toggle('displayNone');
}

let more1 = document.getElementById("more1");
let post1 = document.getElementById("post1");
let right1 = document.getElementById("right1");
let img1 = document.getElementById("img1");
let btnA1 = document.getElementById("btnA1");

more1.onclick = () => {
    
    if(post1.style.width === "850px") {
        post1.style.width = "500px";
        right1.style.left = "-350px";
        img1.style.borderRadius = "20px 20px 0px 0px";
        btn1.style.visibility = "visible";
        btn2.style.visibility = "visible";
        btn3.style.visibility = "visible";
        btn4.style.visibility = "visible";
        vestClick1.style.visibility = "visible";
        vestClick2.style.visibility = "visible";
        vestClick3.style.visibility = "visible";
        vestClick4.style.visibility = "visible";
        vestClick1.style.opacity = "1";
        vestClick2.style.opacity = "1";
        vestClick3.style.opacity = "1";
        vestClick4.style.opacity = "1";
        btnA1.style.opacity = "1";
        more1.innerText = "Show Details";
        more1.style.width = "500px";
    } else {
        post1.style.width = "850px";
        right1.style.left = "0";
        img1.style.borderRadius = "20px 0px 0px 0px";
        btn1.style.visibility = "hidden";
        btn2.style.visibility = "hidden";
        btn3.style.visibility = "hidden";
        btn4.style.visibility = "hidden";
        vestClick1.style.visibility = "hidden";
        vestClick2.style.visibility = "hidden";
        vestClick3.style.visibility = "hidden";
        vestClick4.style.visibility = "hidden";
        vestClick1.style.opacity = "0";
        vestClick2.style.opacity = "0";
        vestClick3.style.opacity = "0";
        vestClick4.style.opacity = "0";
        btnA1.style.opacity = "0";
        more1.innerText = "Hide Details";
        more1.style.width = "850px";
    }
}

const downloadBtn1 = document.querySelector(".download-btn1");
const fileLink1 = "https://drive.google.com/uc?export=download&id=1SUTuepkhf66wg7dtmCb55tr55zbZb76l";

const initTimer1 = () => {
    if(downloadBtn1.classList.contains("disable-timer")) {
        return location.href = fileLink1;
    }
    location.href = fileLink1;
    downloadBtn1.innerHTML = '<span class="text2">Your file is downloading...</span>';
    setTimeout(() => {
        downloadBtn1.classList.add("disable-timer");
        downloadBtn1.innerHTML = `<span class="icon material-symbols-rounded">vertical_align_bottom</span>
                                 <span class="text">Download Again</span>`;
    }, 3000);
}

downloadBtn1.addEventListener("click", initTimer1);

let btn15 = document.getElementById("btn15");
let vestClick15 = document.getElementById("vest-click15");

btn15.onclick = () => {
    vestClick15.classList.toggle('displayNone');
    vestClick16.classList.add('displayNone');
    vestClick17.classList.add('displayNone');
    vestClick18.classList.add('displayNone');
}

let btn16 = document.getElementById("btn16");
let vestClick16 = document.getElementById("vest-click16");

btn16.onclick = () => {
    vestClick15.classList.add('displayNone');
    vestClick16.classList.toggle('displayNone');
    vestClick17.classList.add('displayNone');
    vestClick18.classList.add('displayNone');
}

let btn17 = document.getElementById("btn17");
let vestClick17 = document.getElementById("vest-click17");

btn17.onclick = () => {
    vestClick15.classList.add('displayNone');
    vestClick16.classList.add('displayNone');
    vestClick17.classList.toggle('displayNone');
    vestClick18.classList.add('displayNone');
}

let btn18 = document.getElementById("btn18");
let vestClick18 = document.getElementById("vest-click18");

btn18.onclick = () => {
    vestClick15.classList.add('displayNone');
    vestClick16.classList.add('displayNone');
    vestClick17.classList.add('displayNone');
    vestClick18.classList.toggle('displayNone');
}

let more2 = document.getElementById("more2");
let post2 = document.getElementById("post2");
let right2 = document.getElementById("right2");
let img4 = document.getElementById("img4");
let btnA4 = document.getElementById("btnA4");

more2.onclick = () => {
    
    if(post2.style.width === "850px") {
        post2.style.width = "500px";
        right2.style.left = "-350px";
        img4.style.borderRadius = "20px 20px 0px 0px";
        btn15.style.visibility = "visible";
        btn16.style.visibility = "visible";
        btn17.style.visibility = "visible";
        btn18.style.visibility = "visible";
        vestClick15.style.visibility = "visible";
        vestClick16.style.visibility = "visible";
        vestClick17.style.visibility = "visible";
        vestClick18.style.visibility = "visible";
        vestClick15.style.opacity = "1";
        vestClick16.style.opacity = "1";
        vestClick17.style.opacity = "1";
        vestClick18.style.opacity = "1";
        btnA4.style.opacity = "1";
        more2.innerText = "Show Details";
        more2.style.width = "500px";
    } else {
        post2.style.width = "850px";
        right2.style.left = "0";
        img4.style.borderRadius = "20px 0px 0px 0px";
        btn15.style.visibility = "hidden";
        btn16.style.visibility = "hidden";
        btn17.style.visibility = "hidden";
        btn18.style.visibility = "hidden";
        vestClick15.style.visibility = "hidden";
        vestClick16.style.visibility = "hidden";
        vestClick17.style.visibility = "hidden";
        vestClick18.style.visibility = "hidden";
        vestClick15.style.opacity = "0";
        vestClick16.style.opacity = "0";
        vestClick17.style.opacity = "0";
        vestClick18.style.opacity = "0";
        btnA4.style.opacity = "0";
        more2.innerText = "Hide Details";
        more2.style.width = "850px";
    }
}

const downloadBtn4 = document.querySelector(".download-btn4");
const fileLink4 = "https://drive.google.com/uc?export=download&id=1Ie4vhCHXzYdoIZeypiDRiNF0B_ppHF35";

const initTimer4 = () => {
    if(downloadBtn4.classList.contains("disable-timer")) {
        return location.href = fileLink4;
    }
    location.href = fileLink4;
    downloadBtn4.innerHTML = '<span class="text2">Your file is downloading...</span>';
    setTimeout(() => {
        downloadBtn4.classList.add("disable-timer");
        downloadBtn4.innerHTML = `<span class="icon material-symbols-rounded">vertical_align_bottom</span>
                                 <span class="text">Download Again</span>`;
    }, 3000);
}

downloadBtn4.addEventListener("click", initTimer4);

let btn19 = document.getElementById("btn19");
let vestClick19 = document.getElementById("vest-click19");

btn19.onclick = () => {
    vestClick19.classList.toggle('displayNone');
    vestClick20.classList.add('displayNone');
    vestClick21.classList.add('displayNone');
    vestClick22.classList.add('displayNone');
}

let btn20 = document.getElementById("btn20");
let vestClick20 = document.getElementById("vest-click20");

btn20.onclick = () => {
    vestClick19.classList.add('displayNone');
    vestClick20.classList.toggle('displayNone');
    vestClick21.classList.add('displayNone');
    vestClick22.classList.add('displayNone');
}

let btn21 = document.getElementById("btn21");
let vestClick21 = document.getElementById("vest-click21");

btn21.onclick = () => {
    vestClick19.classList.add('displayNone');
    vestClick20.classList.add('displayNone');
    vestClick21.classList.toggle('displayNone');
    vestClick22.classList.add('displayNone');
}

let btn22 = document.getElementById("btn22");
let vestClick22 = document.getElementById("vest-click22");

btn22.onclick = () => {
    vestClick19.classList.add('displayNone');
    vestClick20.classList.add('displayNone');
    vestClick21.classList.add('displayNone');
    vestClick22.classList.toggle('displayNone');
}

let more3 = document.getElementById("more3");
let post3 = document.getElementById("post3");
let right3 = document.getElementById("right3");
let img7 = document.getElementById("img7");
let btnA7 = document.getElementById("btnA7");

more3.onclick = () => {
    
    if(post3.style.width === "850px") {
        post3.style.width = "500px";
        right3.style.left = "-350px";
        img7.style.borderRadius = "20px 20px 0px 0px";
        btn19.style.visibility = "visible";
        btn20.style.visibility = "visible";
        btn21.style.visibility = "visible";
        btn22.style.visibility = "visible";
        vestClick19.style.visibility = "visible";
        vestClick20.style.visibility = "visible";
        vestClick21.style.visibility = "visible";
        vestClick22.style.visibility = "visible";
        vestClick19.style.opacity = "1";
        vestClick20.style.opacity = "1";
        vestClick21.style.opacity = "1";
        vestClick22.style.opacity = "1";
        btnA7.style.opacity = "1";
        more3.innerText = "Show Details";
        more3.style.width = "500px";
    } else {
        post3.style.width = "850px";
        right3.style.left = "0";
        img7.style.borderRadius = "20px 0px 0px 0px";
        btn19.style.visibility = "hidden";
        btn20.style.visibility = "hidden";
        btn21.style.visibility = "hidden";
        btn22.style.visibility = "hidden";
        vestClick19.style.visibility = "hidden";
        vestClick20.style.visibility = "hidden";
        vestClick21.style.visibility = "hidden";
        vestClick22.style.visibility = "hidden";
        vestClick19.style.opacity = "0";
        vestClick20.style.opacity = "0";
        vestClick21.style.opacity = "0";
        vestClick22.style.opacity = "0";
        btnA7.style.opacity = "0";
        more3.innerText = "Hide Details";
        more3.style.width = "850px";
    }
}

const downloadBtn7 = document.querySelector(".download-btn7");
const fileLink7 = "https://drive.google.com/uc?export=download&id=1n_SyujubpwlXWsFqcfuQKjbAXLLEi8Of";

const initTimer7 = () => {
    if(downloadBtn7.classList.contains("disable-timer")) {
        return location.href = fileLink7;
    }
    location.href = fileLink7;
    downloadBtn7.innerHTML = '<span class="text2">Your file is downloading...</span>';
    setTimeout(() => {
        downloadBtn7.classList.add("disable-timer");
        downloadBtn7.innerHTML = `<span class="icon material-symbols-rounded">vertical_align_bottom</span>
                                 <span class="text">Download Again</span>`;
    }, 3000);
}

downloadBtn7.addEventListener("click", initTimer7);