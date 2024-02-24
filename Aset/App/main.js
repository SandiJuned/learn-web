// toggle class active
const navbarNav = document.querySelector('.navbar-nav');
//ketika menu diklik
document.querySelector('#menu').onclick = () => {
  navbarNav.classList.toggle('active');
};

//exit side bar
const menu = document.querySelector('#menu');
document.addEventListener('click', function(e){
  if(!menu.contains(e.target) && !navbarNav.contains(e.target)){
    navbarNav.classList.remove('active');
  }
});

//wadah kode
function salinKode() {
            var kodeElemen = document.getElementById("kode");
            var range = document.createRange();
            range.selectNode(kodeElemen);
            window.getSelection().removeAllRanges();
            window.getSelection().addRange(range);
            document.execCommand("copy");
            window.getSelection().removeAllRanges();
            alert("Kode berhasil disalin!");
        }
 
 function salinKode2() {
            var kodeElemen = document.getElementById("kode2");
            var range = document.createRange();
            range.selectNode(kodeElemen);
            window.getSelection().removeAllRanges();
            window.getSelection().addRange(range);
            document.execCommand("copy");
            window.getSelection().removeAllRanges();
            alert("Kode berhasil disalin!");
        }