using Microsoft.AspNetCore.Mvc;

namespace PhoneCatalogAPI.Controllers
{
    [ApiController]
    [Route("phones")]
    public class PhonesController : ControllerBase
    {
        private readonly ILogger<PhonesController> _logger;

        public PhonesController(ILogger<PhonesController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<Phone> Get()
        {
            return Enumerable.Range(1, 5).Select(index => new Phone
            {
                Id = index,
                Name = $"iPhone { 6 + index}",
                Manufacturer = "Apple",
                Description = "Lorem ipsum dolor sit amet consectetur.",
                Color = "Black",
                Price = 769 + index * 92,
                ImageFileName = $"IPhone_{6 + index}.png",
                Screen = "4,7 inch IPS",
                Processor = "A10 Fusion",
                Ram = index * 2,
            })
            .ToArray();
        }
    }
}