import { sendEmail } from '../../utils/mailjet';

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
          <form id="contact-form" class="space-y-6">
            <div>
              <label for="name" class="block text-sm font-medium text-gray-700">Nombre</label>
              <input type="text" name="name" id="name" required
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
            </div>

            <div>
              <label for="company" class="block text-sm font-medium text-gray-700">Empresa</label>
              <input type="text" name="company" id="company" required
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
            </div>

            <div>
              <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" name="email" id="email" required
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
            </div>

            <div>
              <label for="phone" class="block text-sm font-medium text-gray-700">Teléfono</label>
              <input type="tel" name="phone" id="phone" required
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
            </div>

            <div>
              <label for="message" class="block text-sm font-medium text-gray-700">Mensaje</label>
              <textarea name="message" id="message" rows="4" required
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"></textarea>
            </div>

            <div id="form-status" class="hidden">
              <p class="text-sm"></p>
            </div>

            <button type="submit"
              class="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              Enviar Mensaje
            </button>
          </form>

          <div class="space-y-8">
            <div>
              <h3 class="text-lg font-medium text-gray-900">Información de Contacto</h3>
              <div class="mt-6 space-y-4">
                <div class="flex items-center">
                  <svg class="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                  <span class="ml-3 text-gray-500">+1234567890</span>
                </div>
                <div class="flex items-center">
                  <svg class="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                  <span class="ml-3 text-gray-500">azrraelcomics@gmail.com</span>
                </div>
                <div class="flex items-center">
                  <svg class="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                  </svg>
                  <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer"
                    class="ml-3 text-blue-600 hover:text-blue-800">
                    Chatear por WhatsApp
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h3 class="text-lg font-medium text-gray-900">Horario de Atención</h3>
              <div class="mt-6 text-gray-500">
                <p>Lunes a Viernes: 8:00 AM - 6:00 PM</p>
                <p>Sábados: 8:00 AM - 2:00 PM</p>
                <p>Domingos: Cerrado</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  contact.innerHTML = contactHtml;

  // Form submission handler
  const form = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');
  const statusMessage = formStatus.querySelector('p');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const submitButton = form.querySelector('button[type="submit"]');
    const originalButtonText = submitButton.textContent;
    submitButton.textContent = 'Enviando...';
    submitButton.disabled = true;
    formStatus.classList.remove('hidden');

    try {
      const formData = new FormData(form);
      const data = {
        name: formData.get('name'),
        company: formData.get('company'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        message: formData.get('message')
      };

      await sendEmail(data);

      // Show success message
      statusMessage.textContent = 'Mensaje enviado correctamente. Nos pondremos en contacto pronto.';
      statusMessage.className = 'text-sm text-green-600';
      form.reset();
    } catch (error) {
      console.error('Error:', error);
      statusMessage.textContent = 'Error al enviar el mensaje. Por favor, intente nuevamente.';
      statusMessage.className = 'text-sm text-red-600';
    } finally {
      submitButton.textContent = originalButtonText;
      submitButton.disabled = false;
      formStatus.classList.remove('hidden');
    }
  });
}