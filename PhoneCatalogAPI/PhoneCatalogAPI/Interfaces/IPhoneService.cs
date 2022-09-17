using PhoneCatalogAPI.Models;

namespace PhoneCatalogAPI.Interfaces
{
    public interface IPhoneService
    {
        public IEnumerable<Phone> GetAllPhones();
        public Phone? GetPhone(int id);
        public int AddPhone(PhoneData model);
        public bool UpdatePhone(int id, PhoneData model);
        public bool DeletePhone(int id);
    }
}
