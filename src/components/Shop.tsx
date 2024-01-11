import { type ReactNode } from 'react';

type ShopProps = {
  children: ReactNode;
};

const Shop: React.FC<ShopProps> = ({ children }) => 
<section id="shop">
  <h2>Find something for yourself:</h2>
  <ul id="products">{children}</ul>
</section>

export default Shop;