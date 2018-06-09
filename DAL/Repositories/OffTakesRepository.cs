// =============================
// Email: info@ebenmonney.com
// www.ebenmonney.com/templates
// =============================

using DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using DAL.Repositories.Interfaces;

namespace DAL.Repositories
{
    public class OffTakesRepository : Repository<OffTake>, IOffTakesRepository
    {
        public OffTakesRepository(ApplicationDbContext context) : base(context)
        { }




        private ApplicationDbContext _appContext => (ApplicationDbContext)_context;

        public IEnumerable<OffTake> GetAllOffTakeData()
        {
            return _appContext.OffTakes
                .OrderBy(c => c.Name)
                .ToList();
        }
    }
}
