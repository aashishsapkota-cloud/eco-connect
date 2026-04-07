import { MapPin, Star } from "lucide-react"
const BusinessCard = ({
    imageUrl,
    name,
    location,
    tags,
    rating,

}: {
    imageUrl: string;
    name: string;
    location: string;
    tags: string[];
    rating: number;
}) => {
    return (
        <div className='bg-white rounded-lg p-4 flex items-center justify-start gap-6 w-[600px]'>
            <img
                className='h-40 w-40 rounded-lg'
                src={imageUrl} alt="" />
            <div>
                <h1 className="text-xl font-medium">{name}</h1>
                <p className="flex gap-2 items-center"> {
                    Array.from({ length: Math.round(rating) }).map((_, index) => (
                        <>
                            <Star key={index} fill="#FFD700" stroke="#FFD700" size={18} />
                        </>
                    ))} {rating}</p>
                <p className="flex gap-2 items-center text-md text-gray-600"><MapPin size={18} />{location}</p>
                <div className="flex gap-2 mt-2">
                    {tags.map((tag, index) => (
                        <span key={index} className="bg-green-500 text-white px-2 py-1 rounded-full text-sm">{tag}</span>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default BusinessCard