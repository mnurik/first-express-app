import Product from '../models/product';
import Size from '../models/size';
import User from '../models/user';
import ProductOption from '../models/product_options';

[User, Product, Size, ProductOption].forEach(model => model.sync());
