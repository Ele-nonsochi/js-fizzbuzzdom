//Imposto le variabile generale
const boxRow = document.querySelector(".row-create");


for (let i = 1; i <= 100; i++) {
    console.log(i)
    //Creazione di col e div

    const col = document.createElement("div");
    const box = document.createElement("div");
    const p = document.createElement("p");

    //Aggiunta degli elementi

    col.classList.add("square");
    box.classList.add("box");

    //Controllo variabili per scritta e colore

    if (i % 3 == 0) {
        box.classList.add("fizz");
        p.append("fizz");
        box.append(p);

    } else if (i % 5 == 0) {
        box.classList.add("buzz");
        p.append("buzz");
        box.append(p);
    }
    if (i % 3 == 0 && i % 5 == 0) {
        box.classList.add("fizzbuzz");
        p.append("buzz");
        box.append(p);
    }
    if (!(i % 3 == 0 || i % 5 == 0)) {
        p.append(i);
        box.append(p);
    }

    //Aggiunto elementi figli al padre
    col.append(box);
    boxRow.append(col);
}
