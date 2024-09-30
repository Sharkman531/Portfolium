// PAGINA 

export function crearPagina(titulo, contenido) {
    return ` 
    <!DOCTYPE html>
    <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${titulo}</title>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" 
            integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
            
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

        </head>
        <body>
            <nav class="navbar navbar-expand-lg">
                <a class="navbar-brand" href='/proyectos/'>Portfolium</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <div class="mx-auto">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link" href="/proyectos/mobile">Mobile</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/proyectos/landing">LandingPage</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/proyectos/webapp">Web App</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/proyectos/ecommerce">e-Commerce</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/proyectos/game">Games</a>
                            </li>
                        </ul>
                    </div>
                    <a href="/proyectos/nuevo" class="btn ms-auto">Agregar nuevo proyecto</a>
                    <a href="/clientes" class="btn ms-2">Ir a Clientes</a>
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




// PROYECTOS

export function crearListadoProyectos(proyectos) {
    let html = "";
    html += '<div class="mb-3" style="margin-top: 30px;">';
    html += "<h1>Lista de proyectos</h1>";
    html += '</div>';
    html += '<div class="row">';

    if (proyectos.length === 0) {
        html += '<p>No hay proyectos</p>';
    } else {
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
    }

    html += '</div>';
    return html;
}



export function crearListadoProyectosPorSeccion(proyectos, seccion) {
    let html = "";
    html += `<h1>Proyectos en la sección: ${seccion.charAt(0).toUpperCase() + seccion.slice(1)}</h1>`;
    html += '<div class="row">';

    if (proyectos.length === 0) {
        html += '<p>No hay proyectos en esta sección</p>';
    } else {
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
    }

    html += '</div>';
    return html;
}



export function crearFormularioProyecto(clientes) {
    let html = `
      <h1>Agregar Nuevo Proyecto</h1>
      <form action='/proyectos/nuevo' method='post' class='form-group'>
          <div class='mb-3'>
              <label for='name' class='form-label'>Nombre</label>
              <input type='text' name='name' class='form-control' required>
          </div>
  
          <div class='mb-3'>
              <label for='description' class='form-label'>Descripción</label>
              <input type='text' name='description' class='form-control' required>
          </div>
  
          <div class='mb-3'>
              <label for='link' class='form-label'>Enlace</label>
              <input type='url' name='link' class='form-control' required>
          </div>
  
          <div class='mb-3'>
              <label for='img' class='form-label'>Imagen URL</label>
              <input type='url' name='img' class='form-control' required>
          </div>
  
          <div class='mb-3'>
              <label for='technologies' class='form-label'>Tecnologías (separadas por comas)</label>
              <input type='text' name='technologies' class='form-control' required>
          </div>
  
          <div class='mb-3'>
              <label for='section' class='form-label'>Sección</label>
              <select name='section' class='form-select' required>
                  <option value='mobile'>Mobile</option>
                  <option value='landing'>LandingPage</option>
                  <option value='webapp'>Web App</option>
                  <option value='ecommerce'>e-Commerce</option>
                  <option value='game'>Games</option>
              </select>
          </div>

          <div class='mb-3'>
              <label for='clientId' class='form-label'>Cliente</label>
              <select name='clientId' class='form-select' required>
                  <option value=''>Seleccione un cliente</option>
                  ${clientes.map(cliente => `<option value='${cliente._id}'>${cliente.nombre}</option>`).join('')}
              </select>
          </div>
  
          <button type='submit' class='btn btn-success'>Agregar</button>
      </form>
    `;
    return html;
}



export function crearDetalleProyecto(proyecto, cliente) {
    let html = "<h1>Detalle del Proyecto</h1>";
    html += `
        <table class="table table-bordered">
            <tbody>
                <tr>
                    <th>ID</th>
                    <td>${proyecto._id}</td>
                </tr>
                <tr>
                    <th>Nombre</th>
                    <td>${proyecto.name}</td> 
                </tr>
                <tr>
                    <th>Descripción</th>
                    <td>${proyecto.description}</td>
                </tr>
                <tr>
                    <th>Enlace</th>
                    <td><a href="${proyecto.link}" target="_blank">${proyecto.link}</a></td>
                </tr>
                <tr>
                    <th>Imagen</th>
                    <td><img src="${proyecto.img}" alt="Imagen de proyecto" width="200"></td>
                </tr>
                <tr>
                    <th>Tecnologías</th>
                    <td>${proyecto.technologies}</td>
                </tr>
                <tr>
                    <th>Sección</th>
                    <td>${proyecto.section}</td>
                </tr>
                <tr>
                    <th>Cliente</th>
                    <td>${cliente ? cliente.nombre : 'No asignado'}</td>
                </tr>
            </tbody>
        </table>
    `;
    html += `
        <div class="mt-4">
            <a href="/proyectos/modificar/${proyecto._id}" class="btn btn-primary">Editar</a>
            <a href="/proyectos/eliminar/${proyecto._id}" class="btn btn-danger">Eliminar</a>
            <a href="/proyectos" class="btn btn-secondary">Atrás</a>
        </div>
    `;
    return html;
}


export function modificarForm(proyecto, clientes) {
    let html = "<h1>Modificar Proyecto</h1>";
    html += `<form action='/proyectos/modificar/${proyecto._id}' method='post' class="mt-4">`;
    html += `
        <div class="mb-3">
            <label for="name" class="form-label">Nombre</label>
            <input type="text" class="form-control" name="name" value="${proyecto.name}" required>
        </div>
        <div class="mb-3">
            <label for="description" class="form-label">Descripción</label>
            <input type="text" class="form-control" name="description" value="${proyecto.description}" required>
        </div>
        <div class="mb-3">
            <label for="link" class="form-label">Enlace</label>
            <input type="url" class="form-control" name="link" value="${proyecto.link}" required>
        </div>
        <div class="mb-3">
            <label for="img" class="form-label">Imagen URL</label>
            <input type="url" class="form-control" name="img" value="${proyecto.img}" required>
        </div>
        <div class="mb-3">
            <label for="technologies" class="form-label">Tecnologías (separadas por comas)</label>
            <input type="text" class="form-control" name="technologies" value="${proyecto.technologies}" required>
        </div>
        <div class="mb-3">
            <label for="section" class="form-label">Sección</label>
            <select name="section" class="form-select" required>
                <option value="mobile" ${proyecto.section === 'mobile' ? 'selected' : ''}>Mobile</option>
                <option value="landing" ${proyecto.section === 'landing' ? 'selected' : ''}>LandingPage</option>
                <option value="webapp" ${proyecto.section === 'webapp' ? 'selected' : ''}>Web App</option>
                <option value="ecommerce" ${proyecto.section === 'ecommerce' ? 'selected' : ''}>e-Commerce</option>
                <option value="game" ${proyecto.section === 'game' ? 'selected' : ''}>Games</option>
            </select>
        </div>
        
        <div class="mb-3">
            <label for="clientId" class="form-label">Cliente</label>
            <select name="clientId" class="form-select" required>
                <option value="">Seleccione un cliente</option>
                ${clientes.map(cliente => `
                    <option value="${cliente._id}" ${cliente._id === proyecto.clientId ? 'selected' : ''}>${cliente.nombre}</option>
                `).join('')}
                ${clientes.map(cliente => `<option value='${cliente._id}'>${cliente.nombre}</option>`).join('')}
            </select>
        </div>
        
        <button type="submit" class="btn btn-primary">Aplicar cambios</button>
        <a href="/proyectos" class="btn btn-secondary">Cancelar</a>
    `;
    html += "</form>";
    return html;
}