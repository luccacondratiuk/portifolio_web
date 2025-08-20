import { Component, OnInit, LOCALE_ID, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../../domain/projects/project.model';
import { PROJECT_REPOSITORY, ProjectRepository } from '../../domain/projects/project.repository';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrls: ['./projects.scss']
})
  export class ProjectsComponent implements OnInit {
    private locale = inject(LOCALE_ID);
    private repository: ProjectRepository = inject(PROJECT_REPOSITORY);

    projects: Project[] = [];
    filteredProjects: Project[] = [];
    currentFilter: string = 'all';

    ngOnInit() {
      this.repository.getProjects(this.locale).subscribe(projects => {
        this.projects = projects;
        this.filteredProjects = projects;
      });
    }

    filterProjects(category: string) {
      this.currentFilter = category;

      this.filteredProjects =
        category === 'all'
          ? this.projects
          : this.projects.filter(project => project.category === category);
    }
  }
