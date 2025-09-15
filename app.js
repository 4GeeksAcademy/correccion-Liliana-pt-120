/* 
Funciones a elaborar:

* printByLine: 
    Esta función debe imprimir el corazón línea por línea en la consola del editor, debe de haber un salto de línea entre cada impresión. 
    Recibe un parámetro llamado "ms" que indica el retraso en milisegundos entre cada impresión de línea.

* printByChart: 
    Esta función debe imprimir el corazón carácter por carácter en la consola del editor, debe de haber un delay entre cada impresión de carácter. 
    Cada vez que se complete la impresión de una línea, se debe hacer un salto de línea. 
    Recibe un parámetro llamado "ms" que indica el retraso en milisegundos entre cada impresión de carácter.

Pistas:

- Investiga sobre la función setTimeout, puede ser de interés.
- Usa console.log o process.stdout.write para imprimir en la consola de acuerdo a lo que necesites.
- Recuerda que necesitas iterar un string, ¿cómo lo conviertes en un array de caracteres?

Para iniciar el proyecto, ejecuta node app.js

*/




const asciiHeart = [
    "⣠⣤⣶⣶⣦⣄⡀  ⠀⢀⣤⣴⣶⣶⣤⣀",
    "⣼⣿⣿⣿⣿⣿⣿⣷⣤⣾⣿⣿⣿⣿⣿⣿⣧",
    "⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿",
    "⠹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠏",
    " ⠙⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠋ ",
    "   ⠙⢿⣿⣿⣿⣿⣿⣿⣿⡿⠛⠁⠀",
    "     ⠉⢿⣿⣿⣿⠟⠋⠀",
    "⠀      ⠙⠻⠁"
]




/*const printByChart = (ms) => {

}
const printByLine = (ms) => {*/




/*const printByLine = (ms) => {
    asciiHeart.forEach((line, index) => {
        setTimeout(() => {
            console.log(line)
        }, ms * index)

    })
}
printByLine(1500)*/




const printByChart = (ms) => {
    let delay = 0;
        asciiHeart.forEach(line => {
            line.split('').forEach((character, i) => {
                setTimeout(() => {
                    process.stdout.write(`${character}`)
                    if (line.length-1===i) {
                    process.stdout.write(`\n`)  
                    }
                }, ms * delay++);
            })
        });
    }
    
printByChart(100);