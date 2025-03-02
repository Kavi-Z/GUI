using Microsoft.EntityFrameworkCore.Diagnostics;
using System.Text;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;

namespace DB_App
{

    public partial class MainWindow : Window
    {
        private ProductContent _db = new ProductContent();
        public MainWindow()
        {
            InitializeComponent();
            LoadData();
        }

        private void LoadData()
        {
            Content.ItemsSource = _db.Products.ToList();
        }

        private void Add_Product(object sender, RoutedEventArgs e)
        {
            Product p = new Product();
            Product_window nw = new Product_window(p);

            if (nw.ShowDialog() == true)
            {
                _db.Products.Add(p);
                _db.SaveChanges();
                LoadData();
            }
        }
        private void Delete_Product(object sender, RoutedEventArgs e)
        {
            if (Content.SelectedItem is Product p)
            {
                _db.Products.Remove(p);
                _db.SaveChanges();
                LoadData();
            }
        }
        private void Update_Product(object sender, RoutedEventArgs e)
        {
            if (Content.SelectedItem is Product p)
            {
                Product product = new Product();
                product.productId = p.productId;
                product.Name = p.Name;
                product.Description = p.Description;
                product.Price = p.Price;

                Product_window productWindow = new Product_window(product);

                if (productWindow.ShowDialog() == true)
                {
                    p.Name = product.Name;
                    p.Description = product.Description;
                    p.Price = product.Price;


                    _db.Products.Update(p);
                    _db.SaveChanges();
                    LoadData();
                }
            }
        }



    }
}