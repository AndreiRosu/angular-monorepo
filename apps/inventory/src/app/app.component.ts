import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductsComponent } from '@angular-monorepo/products';

@Component({
  imports: [RouterModule, ProductsComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'inventory';
}
