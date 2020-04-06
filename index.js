// Creo dos variables de tipo string:

var semana = 'Lunes,Martes,Miercoles,Jueves,Viernes,Sabado,Domingo';

var ciudades = 'Madrid.Sevilla.Barcelona.Valencia.Zaragoza.Bilbao.Donosti';

// Crea un array donde se guarde en cada celda como primer elemento el día de la semana:

var arrayDeSemana = semana.split(',');

var arrayDeCiudades = ciudades.split('.');

// test

console.log(arrayDeCiudades);

var conciertos = [
    [arrayDeSemana[0],arrayDeCiudades[0]],
    [arrayDeSemana[1],arrayDeCiudades[1]],
    [arrayDeSemana[2],arrayDeCiudades[2]],
    [arrayDeSemana[3],arrayDeCiudades[3]],
    [arrayDeSemana[4],arrayDeCiudades[4]],
    [arrayDeSemana[5],arrayDeCiudades[5]],
    [arrayDeSemana[6],arrayDeCiudades[6]]
];

console.log(conciertos);



