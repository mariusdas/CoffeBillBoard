using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using CoffeBillBoard.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CoffeBillBoard.Controllers
{
    [Route("api/[controller]")]
    public class CoffeDataController : Controller
    {
        CoffeDataAccessLayer coffeData = new CoffeDataAccessLayer();

        [HttpGet("[action]")]
        public IEnumerable<TblCoffe> AllCoffe()
        {
            return coffeData.GetAllCoffes();
        }

        [HttpPost("[action]")]
        public void AddCoffe(string CoffeName, string CoffePrice, [FromForm]IFormFile file)
        {
            TblCoffe coffe = new TblCoffe();
            coffe.Name = CoffeName;

            var outCoffePrice = 0.0;
            if (Double.TryParse(CoffePrice, out outCoffePrice))
                coffe.Price = outCoffePrice;

            if (coffeData.GetAllCoffes().Count() == 0)
                coffe.CoffeId = 1;
            else
                coffe.CoffeId = coffeData.GetAllCoffes().Select(x => x.CoffeId).Max() + 1;

            if (file != null)
            {
                byte[] fileBytes;
                using (var memoryStream = new MemoryStream())
                {
                    file.CopyTo(memoryStream);
                    fileBytes = memoryStream.ToArray();
                    coffe.Image = fileBytes;
                    coffe.ImageToBase64 = Convert.ToBase64String(fileBytes);
                }
            }

            coffeData.AddCoffe(coffe);
        }

        [HttpDelete("[action]")]
        public void DeleteCoffe([FromHeader]int value)
        {
           coffeData.DeleteCoffe(value);
        }
    }
}
