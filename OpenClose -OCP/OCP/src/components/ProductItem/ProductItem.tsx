
import { ListItem, Product  } from '../../Interface/ListItem';


export class ProductItem implements ListItem {
  private product: Product;

  constructor(product: Product) {
    this.product = product;
  }

  render() {
    return <span>{this.product.name} - ${this.product.price}</span>;
  }
}