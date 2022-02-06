/*
@Author Gustavo Alberto Valladares Sagrero
@Name Practica-1 Uso del modulo Chalk
*/


//Importamos la dependecia de chalk
import chalk from 'chalk';


/*
El uso de chalk es sencillo, simplemente poner el nombre de la case 'chalk' seguido de un '.' y la función estatica correspondiente al nombre.
Por ejemplo:
-blue
-yellow
-green
-white
-black
-red

Despues de esto, entre comillas ingresas el string.
Ejemplo: chalk.red("Ejemplo de uso");
*/


//Hacemos uso de la clase console y su función log para poder mostrar los mensajes a color en la consola.


//Aquí usamos dos colores, chalk.blue y chalk.yellow para mostrar un saludo
console.log(`${chalk.blue("Hola,")} ${chalk.yellow("Alberto Sagrero")}${chalk.blue("!")}`);
//Aquí volvemos a usar dos colores (chalk.blue y chalk.yellow) para realizar una pregunta, resaltando parte de ella
console.log(`${chalk.blue("Así que vas en")} ${chalk.yellow("4to semestre")}${chalk.blue("?")}`);
//Usamos el color blue con chalk.blue
console.log(chalk.blue(`¿Cómo llegaste ahí?`));