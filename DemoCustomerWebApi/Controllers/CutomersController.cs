using DemoCustomerWebApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace DemoCustomerWebApi.Controllers
{
    public class CutomersController : ApiController
    {
        private static readonly ICustomerRepository _customers = new CustomerRepository();
        // GET api/<controller>
        [HttpGet]
        [Route("api/Customers/GetAllCustomers")]
        public IEnumerable<Customer> Get()
        {
            return _customers.GetAll();
        }
       
        // GET api/<controller>/5
       [HttpGet]
        [Route("api/Customers/GetCustomer")]
        public Customer Get(int id)
        {
            Customer c = _customers.Get(id);
            if (c == null)
                throw new HttpResponseException(HttpStatusCode.NotFound);
 
            return c;
        }
        // POST api/<controller>

        [Route("api/Customers/CreateCustomer")]
        public Customer Post(Customer customer)
        {
            return _customers.Add(customer);
        }
        // PUT api/<controller>/5
       [Route("api/Customers/UpdateCustomer")]
       [HttpPost]
        public Customer Put(Customer customer)
        {
            if (!_customers.Update(customer))
                throw new HttpResponseException(HttpStatusCode.NotFound);
            return customer;
        }
        // DELETE api/<controller>/5

        [Route("api/Customers/DeleteCustomer")]
        public Customer Delete(int id)
        {
            Customer c = _customers.Get(id);
            _customers.Remove(id);
            return c;
        }

    }
}
