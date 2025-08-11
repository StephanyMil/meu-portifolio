import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { ProjectsComponent } from './pages/projects/projects';
import { KnowledgeComponent } from './pages/knowledge/knowledge';
import { ResumeComponent } from './pages/resume/resume';
import { ContactComponent } from './pages/contact/contact';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Home | Stephany Milhomem' },

  { path: 'projetos', component: ProjectsComponent, title: 'Projetos | Stephany Milhomem' },
  { path: 'conhecimentos', component: KnowledgeComponent, title: 'Conhecimentos | Stephany Milhomem' },
  { path: 'curriculo', component: ResumeComponent, title: 'Currículo | Stephany Milhomem' },
  { path: 'contato', component: ContactComponent, title: 'Contato | Stephany Milhomem' },

  { path: '**', redirectTo: '', pathMatch: 'full' }
];
