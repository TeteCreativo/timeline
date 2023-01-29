//Extraer los datos del archivo Json con funcion asincrona
async function main() {
    try { 
        const respuesta = await fetch("/datos.json");

        if(respuesta.ok) {
        const datos = await respuesta.json();

        //console.log(datos);
        
        // Se ordena por fecha el array de datos que viene del documento json
        datos.sort((a, b) => a.date - b.date);

        console.log(datos);


        //Se inserta en el HTML el array ordenado "Datos"

        let html = "";

        datos.forEach( e => {
        html +=`<div class='child'><div class='content'><p>${e.date}</p><h4>${e.title}</h4><img src=${e.image}></a><p>${e.text}</p></div></div>`});

        //Otra forma de hacerlo concatenando.
        //html +="<div class='child'><div class='content'><p>"+e.date+"</p><h4>"+e.title+"</h4><img src="+e.image+"></a><p>"+e.text+"</p></div> </div>"});
        
        timeline.innerHTML = html
        
        } else {
        console.log("Hay un problema, revisa el código");
        }
        
    } catch (error) {
        console.log(error.message);
    }
    
}

main();