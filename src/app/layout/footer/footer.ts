import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',    // O seletor que você usa no HTML (ex: <app-footer></app-footer>)
  standalone: true,        // Indica que é um componente standalone
  imports: [],               // Não precisamos importar nada aqui para o footer
  templateUrl: './footer.html', // Aponta para o arquivo de template HTML
})
export class FooterComponent {
  // Propriedade para armazenar o ano atual
  currentYear = new Date().getFullYear();
}
