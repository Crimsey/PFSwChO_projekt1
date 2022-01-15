import React from 'react';

export default () => {
  return (
    <div>
      Komponent dokumentacji
      <h3>PFSwChO_projekt1</h3>
 <p>ZMIENIONO ZAWARTOSC ZADANIA 9: </p>
<h3>Dodano:</h3>
<li>Zmieniono wersje obrazow postgres i redis z latest na konkretne wersje</li>
<li>Plik .env i przypisanie zmiennych w docker-compose</li>
<li>Reactowe komponenty dla dokumentacji i kalkulatora</li>    
<li>Ograniczenie licznika kalkulatora dla 20 wartosci</li>
<li>dodanie przycisku "Historia indeksow" wyświetlającego 10 ostatnich indeksów</li>
      
<h4>Instrukcja uruchomienia:</h4>
      
<li>git clone https://github.com/Crimsey/PFSwChO_projekt1.git</li>
<li>docker-compose up</li>
<li>Nalezy wejsc pod adres 0.0.0.0:3050</li>
    </div>
  );
};