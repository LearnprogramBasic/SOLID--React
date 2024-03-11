using MiBackOffice.Models;
using System.Collections.Generic;

namespace MiBackOffice.Criteria
{
    public interface ICriteria
    {
        IEnumerable<Producto> Filtrar(IEnumerable<Producto> productos);
    }
}
