let arabic = document.getElementById("arabic");
let english = document.getElementById("english");
let jerusalem = document.getElementById("introduction");
let f = document.getElementById("p1");
let fffff = document.getElementById("p2");
let fff = document.getElementById("p3");
let ffff = document.getElementById("p4");

arabic.onclick = ()=>{
    setLanguage("arabic");
    localStorage.setItem("result", "arabic");
};

english.onclick = ()=>{
    setLanguage("english");
    localStorage.setItem("result", "english");
};

function setLanguage(getLanguage){
    if(getLanguage === "arabic"){
        jerusalem.innerHTML = "تضم مدينة القدس العديد من المعالم التاريخية والأثرية التي يصل عددها إلى 220. من أهمها: المسجد الأقصى ، قبة الصخرة ، كنيسة القيامة ، ومدينة القدس كانت ولا تزال موطنًا للعديد من الحضارات المتنوعة والمتعاقبة ، وهذا واضح في مبانيها القديمة ، وتخطيط المدن ، والشوارع ، والأسواق. والأحياء السكنية.";
        f.innerHTML = "فلسطين";
        fffff.innerHTML = "الصفحة الرئيسية";
        fff.innerHTML = "من نحن";
        ffff.innerHTML = "التواصل";
    }
    else
        if(getLanguage === "english"){
            jerusalem.innerHTML = "The city of Jerusalem includes many historical and archaeological monuments, which number up to 220. Among the most important of these are; Al-Aqsa Mosque, the Dome of the Rock, the Church of the Holy Sepulcher, and the city of Jerusalem was and still is home to many diverse and successive civilizations, and this is evident in its ancient buildings, city planning, streets, markets, and residential neighborhoods.";
            f.innerHTML = "Palestine";
            fffff.innerHTML = "Home"
            fff.innerHTML = "About";
            ffff.innerHTML = "Contact";
        }
};

onload = ()=>{
    setLanguage(localStorage.getItem("result"))
}