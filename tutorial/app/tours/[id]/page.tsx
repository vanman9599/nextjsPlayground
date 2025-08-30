import React from 'react';
import satanImg from "@/images/satan.jpg";
import Image from 'next/image';

const url = 'https://www.course-api.com/images/tours/tour-1.jpeg';
const page = async({params}: {params: {id: string}})=> {
  return (
    <div>
      <h1 className='text-3xl'>Tour ID {params.id}</h1>
      <section className="flex gap-x-4 mt-4">
        <div>
        {/* local image */}
        <Image src={satanImg} priority alt="satan" className="w-48 h-48 object-cover rounded" width={192} height={192}/>
        </div>
        <div>
        {/* remote image */}
        <Image src={url} alt="satan" priority className="w-48 h-48 object-cover rounded" width={192} height={192}/>   
        </div>
      </section>
    </div>
  );
};

export default page