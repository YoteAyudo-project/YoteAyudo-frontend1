'use client'
import Link from "next/link";
import { useState } from "react";
import SearchBar from '../MainComponent/searchBar';
import ButtonComponent from "../ButtonComponent/buttonComponent";

export default function MainComponent() {
  const [search, setSearch] = useState('');
  const [filters, setFilters] = useState({
    category: '',
    location: '',
    priceRange: '',
  });

  // ...

  return (
    <div className="container mx-auto">
      <section className="flex flex-col items-center justify-center w-9/11 h-36 bg-white">
        <h1 className="font-poppins text-4xl">Yo te ayudo a encontrar lo que necesites</h1>
        <p>
          Publica anuncios para ayudar, promocionar o solicitar ayuda con
          nuestra comunidad
        </p>
        <SearchBar
          search={search}
          onSearchChange={setSearch}
          filters={filters}
          onFilterChange={setFilters}
        />
        <ButtonComponent/>
        {/* Muestra los resultados filtrados aquí */}
      </section>
    </div>
  );
}

