import Image from "next/image";

const AnimalDetailsPage = async ({ params }) => {
  const { id } = await params;
  const res = await fetch("http://localhost:3000/animals.json");
  const animals = await res.json();
  const animal = animals.find((a) => a.id == id);
  return (
    <div className="max-w-7xl mx-auto px-4 my-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] bg-gray-100 rounded-xl overflow-hidden flex items-center justify-center">
          <Image
            src={animal.image}
            alt={animal.name}
            fill
            className="rounded-xl object-contain"
          ></Image>
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-2"> {animal.name} </h1>
          <p className="text-gray-500 mb-1"> Breed: {animal.breed} </p>
          <p className="text-gray-500 mb-1"> Age: {animal.age} </p>
          <p className="text-gray-500 mb-1"> Weight: {animal.weight} </p>
          <p className="text-gray-500 mb-1"> Location: {animal.location} </p>
          <p className="text-gray-500 mb-1">
            {" "}
            Description: {animal.description}{" "}
          </p>
          <p className="text-2xl font-bold text-green-700 mb-6">
            {" "}
            ${animal.price.toLocaleString()}{" "}
          </p>
          <h2 className="text-xl font-bold mb-4">Please Book</h2>
          <form className="space-y-3">
            <input
              type="text"
              placeholder="Enter Your Name"
              className="w-full border rounded px-3 py-2 text-sm outline-none focus:border-green-700"
            ></input>
            <input
              type="email"
              placeholder="Enter Your Email"
              className="w-full border rounded px-3 py-2 text-sm outline-none focus:border-green-700"
            ></input>
            <input
              type="tel"
              placeholder="Enter Your Mobile Number"
              className="w-full border rounded px-3 py-2 text-sm outline-none focus:border-green-700"
            ></input>
            <textarea
              placeholder="Enter Your Address"
              rows={3}
              className="w-full border rounded px-3 py-2 text-sm outline-none focus:border-green-700"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-emerald-900 text-white py-2 rounded hover:bg-emerald-700"
            >
              Confirm Your Booking
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AnimalDetailsPage;
