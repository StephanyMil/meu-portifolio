import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';


export const routes: Routes = [
    // Rota padrão para a página inicial
    { path: '', component: HomeComponent, title: 'Home | Stephany Milhomem' },

    // Adicione as outras rotas aqui depois...
    // { path: 'projetos', component: ProjectsComponent, title: 'Projetos' },

    // Rota coringa para redirecionar para a home
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
