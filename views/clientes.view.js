// PAGINA 

export function crearPagina(titulo, contenido) {
    return ` 
  <!DOCTYPE html>
  <html lang="es">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>${titulo}</title>
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
          </head>

          <style>
                .navbar {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    z-index: 1000;
                    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
                    background-color: black; 
                    padding-left: 30px;
                    padding-right: 30px;
                }
                .navbar a {
                    color: whitesmoke; 
                }
                .navbar a:hover {
                    color: white; 
                }
                body {
                    background-color: whitesmoke;
                }
                h1 {
                    text-align: center;
                    padding-top: 100px;
                    padding-bottom: 50px;
                }
                .card {
                    border-radius: 10px 10px 0 0;
                    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5); 
                    transition: transform 0.2s; 
                    background-color: #F5C884;
                }
                    
                .card:hover {
                    transform: translateY(-10px); 
                }
                .card a {
                    margin-top: 10px;
                    width: 80%;
                }
                .card-title {
                    font-family: italic;
                    box-shadow: 0 3px 0 rgba(0, 0, 0, 0.8);
                    padding-bottom: 5px; 
                }
                .card img {
                    border-radius: 10px 10px 0 0;
                    margin-top: 10px;
                }
            </style>

      <body>  
          <nav class="navbar navbar-expand-lg">
              <a class="navbar-brand" href='/proyectos/'>Portfolium</a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                  <div class="mx-auto">
                      <ul class="navbar-nav">
                      </ul>
                  </div>
                  <a href="/clientes/nuevo" class="btn ms-auto">Agregar Cliente</a>
                  <a href="/proyectos" class="btn ms-2">Ir a Proyectos</a>
              </div>
          </nav>
          <div class="container mt-4">
              ${contenido} 
          </div> 

          <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"></script>
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
      </body>
  </html>
  `;
}




// CLIENTES

export function mostrarClientes(clientes) {
    let html = "<h1>Clientes</h1>";
    html += '<table class="table table-bordered">';
    html += '<thead><tr><th>Foto</th><th>Nombre</th><th>Descripción</th><th>Proyectos</th><th>Opciones</th></tr></thead><tbody>';

    clientes.forEach(cliente => {
        html += `<tr>
                  <td><img src="${cliente.foto}" alt="${cliente.nombre}" style="width: 100px; height: auto;"></td>
                  <td>${cliente.nombre}</td>
                  <td>${cliente.descripcion}</td>
                  <td><a href="/clientes/${cliente._id}/proyectos" class="btn btn-primary">Ver Proyectos</a></td>
                  <td>
                     <a href="/clientes/eliminar/${cliente._id}" class="btn btn-danger">Eliminar</a>
                  </td> 
               </tr>`;
    });

    html += '</tbody></table>';
    return html;
}



export function crearFormularioCliente() {
    return `
    <h1>Agregar Cliente</h1>
    <form action="/clientes/nuevo" method="post" class="form-group">
        <div class="mb-3">
            <label for="nombre" class="form-label">Nombre</label>
            <input type="text" name="nombre" class="form-control" required>
        </div>

        <div class="mb-3">
            <label for="foto" class="form-label">Foto (URL)</label>
            <input type="url" name="foto" class="form-control" required>
        </div>

        <div class="mb-3">
            <label for="descripcion" class="form-label">Descripción</label>
            <textarea name="descripcion" class="form-control" required></textarea>
        </div>

        <button type="submit" class="btn btn-success">Agregar</button>
    </form>
  `;
}



export function crearListadoProyectosPorCliente(proyectos, cliente) {

    let html = "";
    html += '<div class="mb-3">';
    html += `<h1>Proyectos de ${cliente.nombre}</h1>`;
    html += '</div>';
    html += '<div class="row">';

    proyectos.forEach(proyecto => {
        html += `
            <div class="col-md-4 mb-4">
                <a href="/proyectos/ver/${proyecto._id}" class="card text-decoration-none"> 
                    <div class="card-body">
                        <h5 class="card-title">${proyecto.name}</h5>
                        <img src="${proyecto.img}" class="card-img-top" alt="Imagen de proyecto">
                    </div>
                </a>
            </div>`;
    });

    html += '</div>';
    return html;
}