function rest() {
    document.getElementById("11").innerHTML = "";
    document.getElementById("12").innerHTML = "";
    document.getElementById("13").innerHTML = "";
    document.getElementById("21").innerHTML = "";
    document.getElementById("22").innerHTML = "";
    document.getElementById("23").innerHTML = "";
    document.getElementById("31").innerHTML = "";
    document.getElementById("32").innerHTML = "";
    document.getElementById("33").innerHTML = "";
    document.getElementById("p1").innerHTML = p1 + " turn";
    cp = 'X'
}


function clk(x) {
    p=document.getElementById("p1");
    if (!x.innerHTML) {
        if (cp == 'X') {
            x.innerHTML = '<img src="images/xb.png">'
            cp = 'O'
            p.innerHTML = p2+' turn'
        } else {
            x.innerHTML = '<img src="images/ob.png">'
            cp = 'X'
            p.innerHTML = p1 +' turn'
        }
    }
    x11 = document.getElementById("11");
    x12 = document.getElementById("12");
    x13 = document.getElementById("13");
    x21 = document.getElementById("21");
    x22 = document.getElementById("22");
    x23 = document.getElementById("23");
    x31 = document.getElementById("31");
    x32 = document.getElementById("32");
    x33 = document.getElementById("33");
    checkwin(x11,x12,x13,sx,so)
    checkwin(x21,x22,x23,sx,so)
    checkwin(x31,x32,x33,sx,so)
    checkwin(x11,x21,x31,sx,so)
    checkwin(x12,x22,x32,sx,so)
    checkwin(x13,x23,x33,sx,so)
    checkwin(x11,x22,x33,sx,so)
    checkwin(x13,x22,x31,sx,so)
}

function checkwin(a,b,c,sx,so) {
    if (a.innerHTML === b.innerHTML && b.innerHTML === c.innerHTML && a.innerHTML !== "") {
        if (a.innerHTML === '<img src="images/xb.png">') {
            a.innerHTML = '<img src="images/xr.png">';
            b.innerHTML = '<img src="images/xr.png">';
            c.innerHTML = '<img src="images/xr.png">';
            sx++;
            setTimeout(() => {
                alert(p1 + " is the winner !");
                rest();
            }, 100);
        }else if (a.innerHTML === '<img src="images/ob.png">') {
            a.innerHTML = '<img src="images/or.png">';
            b.innerHTML = '<img src="images/or.png">';
            c.innerHTML = '<img src="images/or.png">';
            so++;
            setTimeout(() => {
                alert(p2 + " is the winner !");
                rest();
            }, 100);
        }
    }
}