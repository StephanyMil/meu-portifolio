import { Component } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [
    MatChipsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './knowledge.html',
  styleUrl: './knowledge.scss'
})
export class KnowledgeComponent { }
