   M S B A M L   `   `   `  ����A  =DB App, Version=1.0.0.0, Culture=neutral, PublicKeyToken=nullclr-namespace:DB_AppDB_App  5   	       DB_App.Product_window   5   	   W SPresentationCore, Version=8.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35\ XPresentationFramework, Version=8.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35e aSystem.Windows.Controls.Ribbon, Version=8.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089R NWindowsBase, Version=8.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35F 9http://schemas.microsoft.com/winfx/2006/xaml/presentation     5   	   R NSystem.Xaml, Version=8.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089:x,http://schemas.microsoft.com/winfx/2006/xaml     5   	   @d2http://schemas.microsoft.com/expression/blend/2008     5   	   Jmc;http://schemas.openxmlformats.org/markup-compatibility/2006     5   	   &localclr-namespace:DB_App     5   	     � Title$  Product Window��5   	   $	��420��6    $	��800��6-   .��5	      �  � RowDefinitions 5   
   �� 5      $��75 �6   �� 5      $	��175 �6   �� 5      $��75 �6   �� 5      $��75 �6    � ColumnDefinitions 5   
   �� 5      $	��200 �6   �� 5      $	��600 �6   .+�5   
   �� $��Product Name:��6   $��0��5      $��0��6!   $��16(�5      $
��Bold"�5      $��Center=�5      $��Right=�5      
����  �$��10q�5      �� 5    
   -   5         ��Name$ NameTextbox��5       $��0��5!      $��1��6   $	��300��5"      $��30��6   
�������$��Center=�5$      $
��Left=�5%      �� 5(   
   $��Description:��6   $��1��5)      $��0��6!   $��16(�5*      $
��Bold"�5+      $��Center=�5,      $��Right=�5-      
��� d �$��10q�5/      �� 51   
   -   5        $ DescriptionTextbox��51      $��1��52      $��1��6   $	��300��53      $	��150��6   
�������$��Center=�55      $
��Left=�56       �� AcceptsReturn$
 True��57       �� TextWrapping$
 Wrap=�58      �� 5;   
   $��Cost:��6   $��2��5<      $��0��6!   $��16(�5=      $
��Bold"�5>      $��Center=�5?      $��Right=�5@      
���  ��$��10q�5B      �� 5C   
   -   5        $ PriceTextbox��5C      $��2��5D      $��1��6   $	��300��5E      $��30��6   
�������$��Center=�5G      $
��Left=�5H      �� 5L   
   $��3��6   $��1��6"    �� Orientation$ 
Horizontal=�62   $��Center=�6K   $��
0,0,257,23q�6h   .+�5M      �� -   5        $
��Save��5M      $	��150��5N      $��10q�5O      $��5q�5P      $��16(�5Q      
���2�2�
�������$��Center=�5T      5U      �� 5V      $��Cancel��6   $	��150��5W      $��10q�5X      $��5q�5Y      $��16(�5Z      
���<��
�������5\      5^      5_      5`      