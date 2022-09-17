namespace PhoneCatalogAPI
{
    public class Phone
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Manufacturer { get; set; }
        public string Description { get; set; }
        public string Color { get; set; }
        public decimal Price { get; set; }
        public string ImageFileName { get; set; }
        public string Screen { get; set; }
        public string Processor { get; set; }
        public int Ram { get; set; }
    }
}