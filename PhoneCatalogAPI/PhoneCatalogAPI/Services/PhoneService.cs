using PhoneCatalogAPI.Data;
using PhoneCatalogAPI.Interfaces;
using PhoneCatalogAPI.Models;

namespace PhoneCatalogAPI.Services
{
    public class PhoneService : IPhoneService
    {
        private readonly DatabaseContext _context;

        public PhoneService(DatabaseContext context)
        {
            _context = context;
        }

        public int AddPhone(PhoneData model)
        {
            var phone = new Phone()
            {
                Name = model.Name,
                Color = model.Color,
                Description = model.Description,
                ImageFileName = model.ImageFileName,
                Manufacturer = model.Manufacturer,
                Price = model.Price,
                Processor = model.Processor,
                Ram = model.Ram,
                Screen = model.Screen,
            };

            var entity = _context.Phones.Add(phone);
            var entries = _context.SaveChanges();

            return entries == 1 ? entity.Entity.Id : -1;
        }

        public Phone? GetPhone(int id)
        {
            return _context.Phones.Find(id);
        }
        public bool UpdatePhone(int id, PhoneData model)
        {
            var phone = GetPhone(id);
            if (phone == null)
                return false;

            phone.Name = model.Name;
            phone.Color = model.Color;
            phone.Description = model.Description;
            phone.ImageFileName = model.ImageFileName;
            phone.Manufacturer = model.Manufacturer;
            phone.Price = model.Price;
            phone.Processor = model.Processor;
            phone.Ram = model.Ram;
            phone.Screen = model.Screen;

            _context.Phones.Update(phone);
            var entries = _context.SaveChanges();

            return entries == 1;
        }

        public bool DeletePhone(int id)
        {
            var phone = GetPhone(id);
            if (phone == null)
                return false;

            _context.Phones.Remove(phone);
            _context.SaveChanges();
            return true;
        }

        public IEnumerable<Phone> GetAllPhones()
        {
            return _context.Phones.ToList();
        }
    }
}
