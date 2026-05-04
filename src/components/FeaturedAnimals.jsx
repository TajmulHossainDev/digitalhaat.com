import AnimalCard from "./AnimalCard";
import animalsData from "../../public/animals.json";
const FeaturedAnimals = async () => {
  const animals = animalsData;
  const featured = animals.filter((a) => a.featured).slice(0, 4);
  return (
    <div className="container mx-auto px-4 my-10">
      <h1 className="text-3xl font-bold mb-6 text-center"> Featured Animal </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {featured.map((animal) => (
          <AnimalCard key={animal.id} animal={animal}></AnimalCard>
        ))}
      </div>
    </div>
  );
};

export default FeaturedAnimals;
