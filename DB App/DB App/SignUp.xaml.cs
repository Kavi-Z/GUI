using System;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Windows;
using DB_App;

namespace DB_App
{
    public partial class SignUp : Window
    {
        private ProductContent _db = new ProductContent();

        public SignUp()
        {
            InitializeComponent();
        }

        private void SignUp_Click(object sender, RoutedEventArgs e)
        {
            Login login = new Login();
            login.Show();
            this.Close();
        }
       
    }
}
