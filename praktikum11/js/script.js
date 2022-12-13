document.querySelectorAll("#option a").forEach((a) =>{
    // jika nanti di klik maka akan menjalankan fungsi computerChoice 
    a.addEventListener("click", (element) => {
        computerChoice(element);
    });
})
function computerChoice(element){
    // pilihan user
    let pilihanuser = element.target.innerText;

    // mmenankap element result dengan queryselestor
    let pilihankomentar = document.queryselestor("#result");

    // membuat array pilihan untuk komputer
    let choices = ["Rock", "Paper", "Scissors"];

    // pilihan random komputer
    pilihankimputer.innerHTML = choices[Math.round(Math.random() * 2)];
    pilihankomentar = pilihankomentar.innerHTML;

    // jika pilihan user == komputer (dr)
    if(pilihanUser == pilihankomentar){
       // alert("DRAW");
       setTimeout( () => alert("DRAW"), 300);
    }

    // juka pilihan user menang
    if(pilihanUser == "Rock" && pilihankomentar == "Scissors"){
        alert("USER WIN");
    } else if(pilihanUser == "Paper" && pilihankomentar == "Rock"){
        alert("USER WIN");
    } else if(pilihanUser == "Scissors" && pilihankomentar == "Paper"){
        alert("USER WIN");
    } 

       
}