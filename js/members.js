//メンバーごとのID飛ばすページを配列で管理
const members = [
    {id: "daigo", page: "daigo.html"},
    {id: "ryusei", page: "ryusei.html"},
    {id: "shunsuke", page: "shunsuke.html"},
    {id: "kyohei", page: "kyohei.html"},
    {id: "kento", page: "kento.html"},
    {id: "joichiro", page: "joichiro.html"},
    {id: "kazuya", page: "kazuya.html"}
];

//ループイベント追加
members.forEach(member => {
    const element = document.getElementById(member.id);
    if(element) {
        element.style.cursor = "pointer";
        element.addEventListener("click",() => {
            window.location.href =　"html/" + member.page;
        });
    }
});

//ハンバーガーボタン
const hamburger = document.querySelector(".hamburger");
const menuPanel = document.querySelector(".menu-panel");

hamburger.addEventListener("click",() =>{
    menuPanel.classList.toggle("active");
    hamburger.classList.toggle("active");
});
