function catchData() {
    let fildset = document.getElementById("fild");
    fildset.classList.remove("result");
    fildset.classList.add("restor");
    let prim = document.getElementById("texto").value;
    if (prim == "") {
        alert("Questão 1 não foi resolvida")
        prim.focus;
        return;
    }
    document.getElementById("result1").innerHTML = prim;
    let seg = "";
    if (document.getElementById("seg01").checked) {
        seg = seg + "1530";
    } else if (document.getElementById("seg02").checked) {
        seg = seg + "1622";
    } else if (document.getElementById("seg03").checked) {
        seg = seg + "1500";
    } else if (document.getElementById("seg04").checked) {
        seg = seg + "1822";
    } else if (document.getElementById("seg05").checked) {
        seg = seg + "1889";
    }
    if (seg == '') {
        alert("Questão 2 não foi resolvida")
        seg.focus;
        return;
    }
    document.getElementById("result2").innerHTML = seg;

    let ter;
    if (document.getElementById("ter01").checked) {
        ter = "Ana Bolena";
    } else if (document.getElementById("ter02").checked) {
        ter = "Catarina Howard";
    } else if (document.getElementById("ter03").checked) {
        ter = "Catarina de Aragão";
    } else if (document.getElementById("ter04").checked) {
        ter = "Joana Seymour";
    } else if (document.getElementById("ter05").checked) {
        ter = "Ana de Cleves";
    } else if (document.getElementById("ter06").checked) {
        ter = "Catarina Parr";
   }
    if (ter == '') {
        alert("Questão 3 não foi resolvida")
        ter.focus;
        return;
    }
    document.getElementById("result3").innerHTML = ter;
    if (document.getElementById("quar01").checked) {
        document.getElementById("result4").innerHTML = "Eduardo Primeiro";
    } else if (document.getElementById("quar02").checked) {
        document.getElementById("result4").innerHTML = "Isabel Primeira";
    } else {
        alert("Questão 4 não foi resolvida");
    }

}

