using System;
using System.Web.Mvc;

namespace DemoCustomerWebApi.Controllers
{
    public class JasmineController : Controller
    {
        public ViewResult Run()
        {
            return View("SpecRunner");
        }
    }
}
