import { ContactForm } from './ContactForm.js';
import { ContactInfo } from './ContactInfo.js';

export function initContact() {
  const contact = document.getElementById('contact');
  
  const contactHtml = `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center">
        <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Contáctenos
        </h2>
        <p class="mt-4 text-xl text-gray-500">
          Estamos aquí para atender sus necesidades
        </p>
      </div>

      <div class="mt-20">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
          ${ContactForm()}
          ${ContactInfo()}
        </div>
      </div>
    </div>
  `;

  contact.innerHTML = contactHtml;
}