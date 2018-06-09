// =============================
// Email: info@ebenmonney.com
// www.ebenmonney.com/templates
// =============================

using FluentValidation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace QuickApp.Pro.ViewModels
{
    public class OffTakeViewModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        
    }




    //public class CustomerViewModelValidator : AbstractValidator<CustomerViewModel>
    //{
    //    public CustomerViewModelValidator()
    //    {
    //        RuleFor(register => register.Name).NotEmpty().WithMessage("Customer name cannot be empty");
    //        RuleFor(register => register.Gender).NotEmpty().WithMessage("Gender cannot be empty");
    //    }
    //}
}
