const inventario = [];


inventario.push({nombre:'Pala', valor:200, tipo:'Herramienta'},
               {nombre:'Batidora', valor:450, tipo:'Electronico'},
               {nombre:'Cuchara', valor:100, tipo:'Herramienta'},
               {nombre:'Microondas', valor:600, tipo:'Electronico'}
)
inventario.forEach((item, precio, elemento )=>{
   console.log('producto',item,
               'Precio', precio,
               'tipo', elemento
   );
  
})


const electronicos = inventario.filter((elemento) => elemento.tipo === 'Electronico')
console.log(electronicos);


const nombres = inventario.map( (item) => {
   return item.nombre;
} )
console.log(nombres);
