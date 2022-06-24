const newsleatter = document.getElementById("newsleatter");
const productos = document.getElementById("productos")
const elements = [{
        title:"Nuevas promociones",
        body:"En el mes del padre lleva caja de 6 boxer por solo $60.000"
    },
    {   
        title:"Nueva coleccion",
        body:"obten nuestra nueva coleccion de temporada de verano"
    },{
        title:"Nuestros clientes son mas felices",
        body:"La comodidad de nuestros boxers es insuperable"
    },{
        title:"nuestras telas, hechas para tu comodidad",
        body:"The standard chunk of Lorem Ipsum used  "
    }]
const products =[{
        title:"boxer corto color negro",
        tallas:"TALLAS: S, M, L, XL",
        precio:"$16.000",
        img:"../assets/producto1.jpg"
    },
    {
        title:"boxer corto color negro",
        tallas:"TALLAS: S, M, L, XL",
        precio:"$16.000",
        img:"../assets/producto2.webp"
    },
    {
        title:"Boxer largo color blanco",
        tallas:"TALLAS: S, M, L, XL",
        precio:"$20.000",
        img:"../assets/destacado3.jpg"
    },
    {
        title:"Boxer largo color negro",
        tallas:"TALLAS: S, M, L, XL",
        precio:"$15.000",
        img:"../assets/destacado1.jpg"
    },
    {
        title:"Boxer largo color azul",
        tallas:"TALLAS: S, M, L, XL",
        precio:"$20.000",
        img:"../assets/destacado2.png"
    },
    {
        title:"Boxer media pierna color negro",
        tallas:"TALLAS: S, M, L, XL",
        precio:"$20.000",
        img:"../assets/producto6.webp"
    }
]

elements.forEach(element => {
    $(newsleatter).append(`
    <div class="row g-0 m-2" >
    <div class="col-md-4">
    <img src="../assets/promo.webp" class="img-fluid rounded-start img-thumbnail " alt="caja de promocion ">
    </div>
    <div class="col-md-8 m-auto">
    <div class="card-body ms-2">
        <h5 class="card-title">${element.title}</h5>
        <p class="card-text align-middle">${element.body}</p>
    </div>
    </div>
    </div>
`)
});
products.forEach((element,index) =>{
    
    $(productos).append(`
    <div class="col">
        <div class="card">
            <img src="${element.img}" class="card-img-top size-img img-fluid"
                alt="producto ${index}">
            <div class="card-body">
                <h5 class="card-title text-center">${element.title}</h5>
                <p class="card-text d-flex justify-content-between"><span class="tallas"> ${element.tallas} </span><span class="precio fw-bold"> ${element.precio} </span> </p>
                <div class="d-grid gap-2 col-10 mx-auto">
                    <a href="./contacto.html" class="btn btn-primary negro">Comprar</a>
                </div>
            </div>
        </div>
    </div>
    `)
})