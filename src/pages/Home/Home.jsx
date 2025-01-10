import Filter from "../../components/Filter/Filter";
import AdvisorCard from "../../components/AdvisorCard/AdvisorCard";
import { useState } from "react";

function Home() {
  const [filters, setFilters] = useState({});

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };
  return (
    <>
      <div>
        <Filter onFilterChange={handleFilterChange} />
        <AdvisorCard filters={filters} />
      </div>
    </>
  );
}

export default Home;
