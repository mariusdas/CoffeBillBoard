using System;
using System.Collections.Generic;

namespace CoffeBillBoard.Models
{
    public partial class TblCoffe
    {
        public int CoffeId { get; set; }
        public string Name { get; set; }
        public double? Price { get; set; }
        public byte[] Image { get; set; }
        public string ImageToBase64 { get; set; }
    }
}
