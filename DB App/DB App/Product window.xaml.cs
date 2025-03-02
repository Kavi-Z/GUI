using System;
using System.Windows;

namespace DB_App
{ 
    public partial class Product_window : Window
    {
        public Product Product { get; private set; }

        public Product_window(Product product)
        {
            InitializeComponent();
            Product = product;

            NameTextbox.Text = product.Name;
            PriceTextbox.Text = product.Price.ToString();
            DescriptionTextbox.Text = product.Description;
        }

        public void Save_Product(object sender, RoutedEventArgs e)
        {
            try
            {
                Product.Name = NameTextbox.Text;
                Product.Price = Convert.ToDecimal(PriceTextbox.Text);
                Product.Description = (DescriptionTextbox.Text);
                DialogResult = true;
                Close();

            }
            catch
            {
                MessageBox.Show("Error In Input");
                DialogResult = false;
                Close();
            }
        }

        }


    }

