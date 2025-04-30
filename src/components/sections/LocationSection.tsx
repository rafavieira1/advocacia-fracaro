import { MapPin, Navigation } from "lucide-react";

const LocationSection = () => {
  const officeLocation = {
    lat: -25.2972,
    lng: -54.0939,
    address: "Débora B. Fracaro Advocacia - Avenida José Calegari, 820 - Sala 02 - Centro, Medianeira - PR"
  };

  const handleNavigationClick = (app: string) => {
    let url = "";
    const address = encodeURIComponent(officeLocation.address);
    
    switch (app) {
      case 'google':
        url = `https://www.google.com/maps/search/?api=1&query=${address}`;
        break;
      case 'waze':
        url = `https://waze.com/ul?q=${address}&navigate=yes`;
        break;
      case 'apple':
        url = `http://maps.apple.com/?q=${address}`;
        break;
    }
    window.open(url, '_blank');
  };

  return (
    <section id="location" className="py-20 bg-white">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-[#BFA15C] p-1 rounded-full">
                <MapPin className="h-5 w-5 text-white" />
              </div>
              <p className="text-[#BFA15C] font-medium uppercase text-sm tracking-wider">LOCALIZAÇÃO</p>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium leading-tight mb-8 text-gray-900">
              Nosso Escritório<br />em Medianeira
            </h2>
            
            <p className="text-gray-600 mb-12 max-w-xl">
              Estamos localizados no centro de Medianeira, em um local de fácil acesso e com excelente infraestrutura.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="h-12 w-12 rounded-full bg-[#BFA15C]/10 flex items-center justify-center shrink-0 mt-1">
                  <MapPin className="h-6 w-6 text-[#BFA15C]" />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-1">Endereço</h3>
                  <p className="text-gray-600">
                    {officeLocation.address}
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="h-12 w-12 rounded-full bg-[#BFA15C]/10 flex items-center justify-center shrink-0 mt-1">
                  <Navigation className="h-6 w-6 text-[#BFA15C]" />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-1">Como Chegar</h3>
                  <p className="text-gray-600">
                    Escolha seu aplicativo de navegação preferido para traçar a melhor rota até nosso escritório.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="aspect-w-16 aspect-h-9 mb-6 rounded-lg overflow-hidden">
                <button 
                  onClick={() => handleNavigationClick('google')}
                  className="w-full h-full relative group"
                >
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center">
                    <div className="bg-white px-4 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Clique para abrir no Maps
                    </div>
                  </div>
                  <iframe
                    src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.965853480198!2d${officeLocation.lng}!3d${officeLocation.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce0a0a0a0a0a0%3A0x0!2s${encodeURIComponent(officeLocation.address)}!5e0!3m2!1spt-BR!2sbr!4v1620000000000!5m2!1spt-BR!2sbr&markers=color:red%7C${officeLocation.lat},${officeLocation.lng}`}
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <button
                  onClick={() => handleNavigationClick('google')}
                  className="flex items-center justify-center gap-2 bg-white text-gray-800 px-4 py-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
                >
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="#4285F4">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                  Google Maps
                </button>
                
                <button
                  onClick={() => handleNavigationClick('waze')}
                  className="flex items-center justify-center gap-2 bg-white text-gray-800 px-4 py-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
                >
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="#33CCFF">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                    <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/>
                  </svg>
                  Waze
                </button>
                
                <button
                  onClick={() => handleNavigationClick('apple')}
                  className="flex items-center justify-center gap-2 bg-white text-gray-800 px-4 py-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
                >
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="#000000">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                  Apple Maps
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection; 