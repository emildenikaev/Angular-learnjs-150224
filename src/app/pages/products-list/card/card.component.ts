import {Component} from '@angular/core';
import {IProduct} from 'src/app/shared/products/product.interface';
import {productMock} from 'src/app/shared/products/product.mock';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css'],
})
export class CardComponent {
    readonly product: IProduct = productMock;

    onProductBuy(event: Event) {
        event.stopPropagation();
    }
}
