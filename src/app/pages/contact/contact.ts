import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
  budget: string;
}

@Component({
  selector: 'app-contact',
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class ContactComponent {
  formData: ContactForm = {
    name: '',
    email: '',
    subject: '',
    message: '',
    budget: ''
  };

  isSubmitting = false;
  submitStatus: 'success' | 'error' | null = null;

  onSubmit() {
    if (this.isSubmitting) return;

    this.isSubmitting = true;
    this.submitStatus = null;

    // Simular envio do formulário
    setTimeout(() => {
      // Simular sucesso na maioria dos casos
      if (Math.random() > 0.1) {
        this.submitStatus = 'success';
        this.resetForm();
      } else {
        this.submitStatus = 'error';
      }
      
      this.isSubmitting = false;

      // Limpar status após 5 segundos
      setTimeout(() => {
        this.submitStatus = null;
      }, 5000);
    }, 2000);
  }

  private resetForm() {
    this.formData = {
      name: '',
      email: '',
      subject: '',
      message: '',
      budget: ''
    };
  }
}
