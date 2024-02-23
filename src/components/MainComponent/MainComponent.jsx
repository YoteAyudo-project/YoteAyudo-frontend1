'use client'
import Link from "next/link";
import React from "react";
import { useState } from "react";
import SearchBar from '../MainComponent/searchBar';
import ButtonComponent from "../ButtonComponent/buttonComponent";
import Sections from "../MainComponent/SectionsComponent";
import Carousel from "../MainComponent/ServicesCarousel";
import Banner from "../MainComponent/BannerComponent";

export default function MainComponent() {
  const [search, setSearch] = useState('');
  const [filters, setFilters] = useState({
    category: '',
    location: '',
    priceRange: '',
  });

  // ...

  return (
    <div className="w-full">
      <section className="flex flex-col items-center justify-center w-full h-1/4 bg-white p-8 my-4">
        <h1 className="font-poppins text-4xl m-4 text-center">Yo te ayudo a encontrar lo que necesites</h1>
        <p className="m-2 text-center" >
          Publica anuncios para ayudar, promocionar o solicitar ayuda con nuestra comunidad
        </p>
        <SearchBar
          search={search}
          onSearchChange={setSearch}
          filters={filters}
          onFilterChange={setFilters}
          className="m-2"
        />
        <ButtonComponent />
      </section>
      <section className="flex flex-col justify-center items-center w-full h-1/4">
        <Carousel />
        <button className="bg-black p-3 m-3 text-white rounded-md">Ve todos los anuncios</button>
      </section>
      <section>
        <Sections />
      </section>
      <section>
        <Banner />
      </section>

    </div>
  );
}

