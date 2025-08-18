import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from './project.model';

export interface ProjectRepository {
  getProjects(language: string): Observable<Project[]>;
}

export const PROJECT_REPOSITORY = new InjectionToken<ProjectRepository>('PROJECT_REPOSITORY');
