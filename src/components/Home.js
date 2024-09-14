import React from 'react';

function Home() {
  return (
    <div className="text-center p-4 bg-gray-200">
      <h2 className="text-2xl font-semibold mb-4">Mijn naam is Nancy Beerens en zingen is mijn passie</h2>
      <p className="text-lg mb-8">
        Zin in een feestende avond of toch liever wat rustige slowjams?
        Geen probleem, je kunt namelijk zelf de voorkeuren aangeven.
      </p>
      <div className="max-w-xl mx-auto relative overflow-hidden rounded-lg">
        <div 
          className="absolute inset-0 z-10"
        ></div>
        <img 
          src="/sample_pic.png" 
          alt="Nancy's portrait" 
          className="w-full h-auto object-cover"
          width={670}
          height={837}
        />
      </div>
    </div>
  );
}

export default Home;