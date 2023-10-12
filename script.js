/*// M2_W1_D1

//1. Cos'è un algoritmo? Prova a spiegarlo con parole tue, come se lo dovessi spiegare a qualcuno che non ne capisce niente di informatica.
    Un algoritmo può essere paragonato ad uno spartito composto da note musicali e pause che, in base alla loro durata, 
    alla dinamica e ad altre caratteristiche, quando vengono eseguite "producono" un brano musicale (o un'opera, ecc.).
    Le note, le pause e tutti gli altri elementi che caratterizzano e compongono il brano da eseguire non sono altro che "istruzioni" per l'esecutore.
    Allo stesso modo, in informatica e nel caso specifico del web development, l'algoritmo non è altro che una serie di istruzioni (note musicali) utili a
    svolgere determinate procedure per ottenere un risultato (brano, composizione).

2. Cos'è una variabile? Prova a spiegarlo con parole tue, come se lo dovessi spiegare a qualcuno che non ne capisce niente di informatica.
    Una variabile può essere paragonata ad un LP (disco 33 giri) al cui interno le incisioni possono variare da disco a disco.
    Anche in informatica una variabile è un "contenitore" al cui interno il valore espresso (numero o stringa) può variare in base a determinati criteri.

3. undefined e null sono la stessa cosa?
    In JavaScript non sono esattamente la stessa cosa anche se entrambe indicano l'assenza di un valore. Mentra null è un valore (vuoto, inesistente) assegnato,
    undefined è il risultato di una variabile assegnata ma senza un valore (vedi esempio).
*/

// esempio
let ilMioNome;
console.log(ilMioNome); //il risultato sul terminale è undefined

let ilMioCognome = null;
console.log(ilMioCognome); //il risultato sul terminale è null
