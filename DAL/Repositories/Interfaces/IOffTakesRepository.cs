
using DAL.Models;
using System.Collections.Generic;

namespace DAL.Repositories.Interfaces
{
    public interface IOffTakesRepository : IRepository<OffTake>
    {
        IEnumerable<OffTake> GetAllOffTakeData();
    }
}