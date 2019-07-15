using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CoffeBillBoard.Models
{
    public class CoffeDataAccessLayer
    {
        TestContext db = new TestContext();
        public IEnumerable<TblCoffe> GetAllCoffes()
        {
            try
            {
                return db.TblCoffe.ToList();
            }
            catch
            {
                throw;
            }
        }
        //To Add new coffe record     
        public int AddCoffe(TblCoffe coffe)
        {
            try
            {
                db.TblCoffe.Add(coffe);
                db.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }
        //To Update the records of a particluar coffe    
        public int UpdateCoffe(TblCoffe coffe)
        {
            try
            {
                db.Entry(coffe).State = EntityState.Modified;
                db.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }
        //Get the details of a particular coffe    
        public TblCoffe GetCoffeData(int id)
        {
            try
            {
                TblCoffe coffe = db.TblCoffe.Find(id);
                return coffe;
            }
            catch
            {
                throw;
            }
        }
        //To Delete the record of a particular coffe    
        public int DeleteCoffe(int id)
        {
            try
            {
                TblCoffe coffe = db.TblCoffe.Find(id);
                db.TblCoffe.Remove(coffe);
                db.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }
    }
}
