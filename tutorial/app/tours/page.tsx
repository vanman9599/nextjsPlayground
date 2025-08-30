import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const url = 'https://www.course-api.com/react-tours-project'
type Tour = {
  id: string;
  name: string;
  info: string;
  image: string;
  price: number;
}

const fetchTours = async() =>{
  
   const response = await fetch(url);
    const data:Tour[] = await response.json();
    return data;

}
async function TourPage() {
  const data = await fetchTours();
    
   console.log(data);

   return (<section>
    <h1 className="text-3xl mb-4">Tours</h1>
    <div className="grid md:grid-cols-2 gap-8">

    
    {data.map((tour)=>{
      return <><Link href={`/tours/${tour.id}`} key={tour.id}>
        <div className="relative h-48 mb-2"><Image src={tour.image} alt={tour.image} sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw)" fill priority className="object-cover rounded" /></div>
        {tour.name}</Link></>
    })};
    </div>
    </section>
    )
   
}

export default TourPage