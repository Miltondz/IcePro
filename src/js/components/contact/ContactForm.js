export function ContactForm() {
  return `
    <form 
      action="https://formsubmit.co/azrraelcomics@gmail.com" 
      method="POST" 
      class="space-y-6"
    >
      <!-- Honeypot -->
      <input type="text" name="_honey" style="display:none">
      
      <!-- Disable Captcha -->
      <input type="hidden" name="_captcha" value="false">
      
      <!-- Success Page -->
      <input type="hidden" name="_next" value="https://outstanding-woodpecker.static.domains/gracias.html">

      <div>
        <label for="name" class="block text-sm font-medium text-gray-700">Nombre</label>
        <input 
          type="text" 
          name="name" 
          id="name" 
          required
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        >
      </div>

      <div>
        <label for="company" class="block text-sm font-medium text-gray-700">Empresa</label>
        <input 
          type="text" 
          name="company" 
          id="company" 
          required
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        >
      </div>

      <div>
        <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
        <input 
          type="email" 
          name="email" 
          id="email" 
          required
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        >
      </div>

      <div>
        <label for="phone" class="block text-sm font-medium text-gray-700">Teléfono</label>
        <input 
          type="tel" 
          name="phone" 
          id="phone" 
          required
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        >
      </div>

      <div>
        <label for="message" class="block text-sm font-medium text-gray-700">Mensaje</label>
        <textarea 
          name="message" 
          id="message" 
          rows="4" 
          required
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        ></textarea>
      </div>

      <button 
        type="submit"
        class="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        Enviar Mensaje
      </button>
    </form>
  `;
}
