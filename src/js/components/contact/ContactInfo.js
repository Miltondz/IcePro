export function ContactInfo() {
  return `
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
  `;
}