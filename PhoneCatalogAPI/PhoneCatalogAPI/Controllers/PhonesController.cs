using Microsoft.AspNetCore.Mvc;
using PhoneCatalogAPI.Interfaces;
using PhoneCatalogAPI.Models;

namespace PhoneCatalogAPI.Controllers
{
    [ApiController]
    [Route("phones")]
    public class PhonesController : ControllerBase
    {
        private readonly ILogger<PhonesController> _logger;
        private readonly IPhoneService _phoneService;

        public PhonesController(ILogger<PhonesController> logger, IPhoneService phoneService)
        {
            _logger = logger;
            _phoneService = phoneService;
        }

        /// <summary>
        /// Get all phones
        /// </summary>
        [HttpGet]
        public IEnumerable<Phone> Get()
        {
            return _phoneService.GetAllPhones();
        }

        /// <summary>
        /// Get phone by id
        /// </summary>
        [HttpGet("{id}")]
        public Phone? GetPhone(int id)
        {
            return _phoneService.GetPhone(id);
        }

        /// <summary>
        /// Add new phone
        /// </summary>
        [HttpPost]
        public int Add([FromBody] PhoneData model)
        {
            return _phoneService.AddPhone(model);
        }

        /// <summary>
        /// Update phone by id
        /// </summary>
        [HttpPut("{id}")]
        public bool Update(int id, [FromBody] PhoneData model)
        {
            return _phoneService.UpdatePhone(id, model);
        }

        /// <summary>
        /// Delete phone by id
        /// </summary>
        [HttpDelete("{id}")]
        public bool Delete(int id)
        {
            return _phoneService.DeletePhone(id);
        }
    }
}