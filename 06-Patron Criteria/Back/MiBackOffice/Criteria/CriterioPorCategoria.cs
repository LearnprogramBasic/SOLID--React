using MiBackOffice.Models;
using System.Collections.Generic;
using System.Linq;

namespace MiBackOffice.Criteria
{
    public class CriterioPorCategoria : ICriteria
    {
        private readonly string _categoria;

        public CriterioPorCategoria(string categoria)
        {
            _categoria = categoria;
        }

        public IEnumerable<Producto> Filtrar(IEnumerable<Producto> productos)
        {
            return productos.Where(p => p.Categoria.Equals(_categoria));
        }
    }
}
