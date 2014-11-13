using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace DemoCustomerWebApi.Models
{
    public interface ICustomerRepository
    {
        IEnumerable<Customer> GetAll();
        Customer Get(int id);
        Customer Add(Customer item);
        void Remove(int id);
        bool Update(Customer item);
    }
}