import React from 'react';

function MijnAanbod() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Mijn Aanbod</h1>
      <ul className="list-disc list-inside">
        <li className="mb-2">Up-Tempo nummers oftewel er mag gedanst worden!</li>
        <li className="mb-2">Diner (achtergrond muziek) terwijl u geniet van het diner</li>
        <li className="mb-2">Nederlandstalig</li>
        <li className="mb-2">Engelstalig</li>
      </ul>
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-2">Onderstaand vind je de diner playlist</h2>
        <iframe 
          src="https://open.spotify.com/embed/playlist/177lkSpAJCBOpKV8xtZYaU?utm_source=generator&theme=0" 
          width="100%" 
          height="352" 
          frameBorder="0" 
          allowFullScreen="" 
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
          loading="lazy"
          className="rounded-lg"
        ></iframe>
      </div>
    </div>
  );
}

export default MijnAanbod;