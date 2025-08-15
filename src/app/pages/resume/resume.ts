import { Component } from '@angular/core';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [],
  templateUrl: './resume.html',
  styleUrls: ['./resume.scss']
})
export class ResumeComponent {

  downloadPDF() {
    // Simular download do PDF
    const link = document.createElement('a');
    link.href = '/assets/documents/cv.pdf';
    link.download = 'jeanlucca-condratiuk-cv.pdf';
    link.click();
  }

  printResume() {
    window.print();
  }
}
