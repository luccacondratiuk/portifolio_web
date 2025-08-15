import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: string;
  date: string;
  status: string;
  liveUrl: string;
  githubUrl: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrls: ['./projects.scss']
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'Plataforma completa de e-commerce com Angular, Node.js e PostgreSQL. Inclui painel administrativo, sistema de pagamentos e gestão de estoque.',
      image: '/assets/images/project1.jpg',
      technologies: ['Angular', 'Node.js', 'PostgreSQL', 'Express.js', 'SCSS'],
      category: 'fullstack',
      date: '2024',
      status: 'concluído',
      liveUrl: 'https://ecommerce-demo.com',
      githubUrl: 'https://github.com/joaosilva/ecommerce-platform'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Aplicativo de gerenciamento de tarefas com funcionalidades em tempo real, notificações push e colaboração em equipe.',
      image: '/assets/images/project2.jpg',
      technologies: ['Angular', 'Socket.io', 'MongoDB', 'Express.js', 'JWT'],
      category: 'fullstack',
      date: '2023',
      status: 'concluído',
      liveUrl: 'https://taskmanager-demo.com',
      githubUrl: 'https://github.com/joaosilva/task-manager'
    },
    {
      id: 3,
      title: 'Analytics Dashboard',
      description: 'Dashboard interativo para visualização de dados com gráficos dinâmicos, filtros avançados e exportação de relatórios.',
      image: '/assets/images/project3.jpg',
      technologies: ['Angular', 'D3.js', 'Chart.js', 'Express.js', 'PostgreSQL'],
      category: 'frontend',
      date: '2023',
      status: 'concluído',
      liveUrl: 'https://analytics-demo.com',
      githubUrl: 'https://github.com/joaosilva/analytics-dashboard'
    },
    {
      id: 4,
      title: 'Weather App',
      description: 'Aplicativo mobile de previsão do tempo com geolocalização, notificações e interface intuitiva.',
      image: '/assets/images/project4.jpg',
      technologies: ['Ionic', 'Angular', 'Capacitor', 'TypeScript'],
      category: 'mobile',
      date: '2023',
      status: 'em desenvolvimento',
      liveUrl: 'https://weather-app-demo.com',
      githubUrl: 'https://github.com/joaosilva/weather-app'
    },
    {
      id: 5,
      title: 'Portfolio Website',
      description: 'Website pessoal desenvolvido com Angular SSR, seguindo princípios de Domain Driven Design e arquitetura modular.',
      image: '/assets/images/project5.jpg',
      technologies: ['Angular', 'SSR', 'SCSS', 'TypeScript'],
      category: 'frontend',
      date: '2024',
      status: 'em desenvolvimento',
      liveUrl: 'https://joaosilva.dev',
      githubUrl: 'https://github.com/joaosilva/portfolio'
    },
    {
      id: 6,
      title: 'Chat Application',
      description: 'Aplicação de chat em tempo real com salas privadas, compartilhamento de arquivos e histórico de mensagens.',
      image: '/assets/images/project6.jpg',
      technologies: ['Angular', 'Socket.io', 'Node.js', 'MongoDB'],
      category: 'fullstack',
      date: '2022',
      status: 'concluído',
      liveUrl: 'https://chat-demo.com',
      githubUrl: 'https://github.com/joaosilva/chat-app'
    }
  ];

  filteredProjects: Project[] = [];
  currentFilter: string = 'all';

  ngOnInit() {
    this.filteredProjects = this.projects;
  }

  filterProjects(category: string) {
    this.currentFilter = category;

    this.filteredProjects =
      category === 'all'
        ? this.projects
        : this.projects.filter(project => project.category === category);
  }
}
