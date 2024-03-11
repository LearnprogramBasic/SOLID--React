using Microsoft.AspNetCore.Mvc;
using MiBackOffice.Models;
using MiBackOffice.Criteria;
using System.Collections.Generic;
using System.Linq;

namespace MiBackOffice.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ProductosController : ControllerBase
    {
        private readonly List<Producto> _productos = new List<Producto>
        {
            new Producto { Id = 1, Nombre = "Computadora Portátil", Categoria = "Electrónica", Precio = 1500 },
            new Producto { Id = 2, Nombre = "Teléfono Inteligente", Categoria = "Electrónica", Precio = 800 },
            new Producto { Id = 3, Nombre = "Audífonos Bluetooth", Categoria = "Accesorios", Precio = 150 },
            new Producto { Id = 4, Nombre = "Mouse Inalámbrico", Categoria = "Accesorios", Precio = 40 },
            new Producto { Id = 5, Nombre = "Teclado Mecánico", Categoria = "Accesorios", Precio = 100 },
            new Producto { Id = 6, Nombre = "Monitor 24 Pulgadas", Categoria = "Electrónica", Precio = 200 },
            new Producto { Id = 7, Nombre = "Cámara DSLR", Categoria = "Fotografía", Precio = 500 },
            new Producto { Id = 8, Nombre = "Lente Zoom 70-200mm", Categoria = "Fotografía", Precio = 1500 },
            new Producto { Id = 9, Nombre = "Trípode de Aluminio", Categoria = "Fotografía", Precio = 120 },
            new Producto { Id = 10, Nombre = "Smartwatch", Categoria = "Electrónica", Precio = 300 }
        };

        [HttpGet]
        public IActionResult Get([FromQuery] string? categoria)
        {
            if (string.IsNullOrEmpty(categoria))
            {
                // Retornar todos los productos si no se especificó categoría
                return Ok(_productos);
            }
            else
            {
                // Filtrar por categoría y retornar los productos
                var criterio = new CriterioPorCategoria(categoria);
                var productosFiltrados = criterio.Filtrar(_productos);
                return Ok(productosFiltrados);
            }
        }
    }
}
