import React from 'react';
import { Phone, Mail, MessageSquare } from 'lucide-react';

export default function Contact() {
  return (
    <div id="contact" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Contáctenos
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Estamos aquí para atender sus necesidades
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              {/* Form for submitting contact information */}
              <form 
                action="https://formsubmit.co/azrraelcomics@gmail.com" 
                method="POST" 
                className="space-y-6"
              >
                {/* Hidden fields for FormSubmit customization */}
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_subject" value="Nuevo Mensaje de Contacto" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_next" value="https://yourdomain.com/thank-you" />

                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Nombre
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                    Empresa
                  </label>
                  <input
                    type="text"
                    name="company"
                    id="company"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Mensaje
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Enviar Mensaje
                </button>
              </form>
            </div>

            <div className="space-y-8">
              {/* Contact information can be added here */}
              <div className="flex items-center space-x-4">
                <Phone className="w-6 h-6 text-blue-600" />
                <p className="text-lg text-gray-700">+1 123 456 7890</p>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="w-6 h-6 text-blue-600" />
                <p className="text-lg text-gray-700">contacto@tuempresa.com</p>
              </div>
              <div className="flex items-center space-x-4">
                <MessageSquare className="w-6 h-6 text-blue-600" />
                <p className="text-lg text-gray-700">Atención 24/7 para consultas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
