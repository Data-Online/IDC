using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using DAL;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using QuickApp.Pro.ViewModels;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using IdentityServer4.AccessTokenValidation;

namespace QuickApp.core.Controllers
{
    [Authorize(AuthenticationSchemes = IdentityServerAuthenticationDefaults.AuthenticationScheme)]

    [Produces("application/json")]
    [Route("api/[controller]")]
    public class FarmdataController : Controller
    {
        private IUnitOfWork _unitOfWork;
        readonly ILogger _logger;

        public FarmdataController(IUnitOfWork unitOfWork, ILogger<FarmdataController> logger)
        {
            _unitOfWork = unitOfWork;
            _logger = logger;
        }

        [Authorize(Roles = "administrator")]
        [HttpGet("offtakes")]
        public IActionResult Get()
        {
            var user = User.Identity.Name;
            
            var allOffTakes = _unitOfWork.OffTakes.GetAll();
            return Ok(Mapper.Map<IEnumerable<OffTakeViewModel>>(allOffTakes));
        }

        [HttpGet("offtakes2")]
        public IActionResult Get2()
        {
            var allOffTakes = _unitOfWork.OffTakes.GetAll();
            return Ok(Mapper.Map<IEnumerable<OffTakeViewModel>>(allOffTakes));
        }
    }
}