import { ArrowLeft, MapPin, Star } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import BusinessCard from "../components/BusinessCard";
import UserReviewInput from "../components/UserReviewInput";
import CommentsBox from "../components/CommentsBox";

type Comment = {
    user: string
    rating: number
    text: string
    createdAt?: Date | string
}

type Business = {
    id: string
    name: string
    description: string
    rating: number
    location: string
    tags: string[]
    image: string
    comments: Comment[]
}

const ListingsView = () => {

    const { id } = useParams();

    const BusinessData: Business[] = [
        {
            id: '1',
            name: "EcoLife Store",
            description: `EcoLife Store is a thoughtfully curated zero-waste shop dedicated to promoting sustainable living and conscious consumption. Located in the heart of the community, the store provides an extensive range of organic, vegan, and environmentally friendly products designed to minimize ecological impact. From fresh, unpackaged groceries to refillable personal care items and biodegradable household supplies, EcoLife Store encourages customers to embrace a low-waste lifestyle without compromising on quality or convenience.

One of the store’s core philosophies is reducing single-use plastics. Customers are invited to bring their own containers, jars, and bags to refill essentials such as grains, spices, oils, and cleaning products. For those new to zero-waste practices, the store also offers reusable alternatives like bamboo toothbrushes, stainless steel straws, glass containers, and cloth produce bags. Each product is carefully selected based on ethical sourcing, sustainability, and durability, ensuring that every purchase contributes positively to the environment.

Beyond retail, EcoLife Store acts as a hub for community engagement and education. The store regularly hosts workshops and events focused on sustainable practices such as composting, upcycling, and creating DIY natural products. These sessions are designed to empower individuals with practical knowledge they can apply in their daily lives. The friendly and knowledgeable staff are always available to guide customers, answer questions, and recommend products tailored to their sustainability goals.

EcoLife Store also collaborates with local farmers, artisans, and eco-conscious brands to support the local economy while reducing the carbon footprint associated with long-distance shipping. Seasonal products are highlighted to promote mindful consumption and encourage customers to align their habits with nature’s cycles.

Ultimately, EcoLife Store is more than just a place to shop—it is a movement toward a cleaner, healthier planet. By making sustainable choices accessible, affordable, and convenient, the store inspires individuals to rethink consumption habits and take meaningful steps toward reducing waste. Every visit becomes an opportunity to contribute to a greener future while enjoying high-quality, ethically sourced products.`,
            rating: 4.5,
            location: "Conventry Lodon, UK11 1BC",
            tags: ["Zero Waste", "Organic", "Vegan"],
            image: "https://images.unsplash.com/photo-1760863264228-fa0792a2d894?q=80&w=1080",
            comments: [
                { user: "Alice", rating: 5, text: "Amazing eco-friendly products and very helpful staff!", createdAt: "2026-01-01" },
                { user: "John", rating: 4, text: "Great concept, love the refill system.", createdAt: "2026-04-07" },
                { user: "Emma", rating: 5, text: "Best zero-waste store I've visited!", createdAt: "2026-04-01" }
            ]
        },
        {
            id: '2',
            name: "Green Grocer Market",
            description: `EcoLife Store is a thoughtfully curated zero-waste shop dedicated to promoting sustainable living and conscious consumption. Located in the heart of the community, the store provides an extensive range of organic, vegan, and environmentally friendly products designed to minimize ecological impact. From fresh, unpackaged groceries to refillable personal care items and biodegradable household supplies, EcoLife Store encourages customers to embrace a low-waste lifestyle without compromising on quality or convenience.

One of the store’s core philosophies is reducing single-use plastics. Customers are invited to bring their own containers, jars, and bags to refill essentials such as grains, spices, oils, and cleaning products. For those new to zero-waste practices, the store also offers reusable alternatives like bamboo toothbrushes, stainless steel straws, glass containers, and cloth produce bags. Each product is carefully selected based on ethical sourcing, sustainability, and durability, ensuring that every purchase contributes positively to the environment.

Beyond retail, EcoLife Store acts as a hub for community engagement and education. The store regularly hosts workshops and events focused on sustainable practices such as composting, upcycling, and creating DIY natural products. These sessions are designed to empower individuals with practical knowledge they can apply in their daily lives. The friendly and knowledgeable staff are always available to guide customers, answer questions, and recommend products tailored to their sustainability goals.

EcoLife Store also collaborates with local farmers, artisans, and eco-conscious brands to support the local economy while reducing the carbon footprint associated with long-distance shipping. Seasonal products are highlighted to promote mindful consumption and encourage customers to align their habits with nature’s cycles.

Ultimately, EcoLife Store is more than just a place to shop—it is a movement toward a cleaner, healthier planet. By making sustainable choices accessible, affordable, and convenient, the store inspires individuals to rethink consumption habits and take meaningful steps toward reducing waste. Every visit becomes an opportunity to contribute to a greener future while enjoying high-quality, ethically sourced products.`,
            rating: 4.9,
            location: "Warwick Road, Conventry, UK11 1BC",
            tags: ["Zero Waste", "Organic", "Vegan"],
            image: "https://images.unsplash.com/photo-1549248581-cf105cd081f8?q=80&w=1080",
            comments: [
                { user: "Sophia", rating: 5, text: "Fresh produce and great variety!", createdAt: '2022-03-22' },
                { user: "Liam", rating: 4, text: "A bit pricey but quality is top-notch.", createdAt: '2026-04-07' },
                { user: "Noah", rating: 5, text: "Love the organic options here.", createdAt: '2026-03-22' }
            ]
        },
        {
            id: '3',
            name: "Repair & Restore workshop",
            description: `EcoLife Store is a thoughtfully curated zero-waste shop dedicated to promoting sustainable living and conscious consumption. Located in the heart of the community, the store provides an extensive range of organic, vegan, and environmentally friendly products designed to minimize ecological impact. From fresh, unpackaged groceries to refillable personal care items and biodegradable household supplies, EcoLife Store encourages customers to embrace a low-waste lifestyle without compromising on quality or convenience.

One of the store’s core philosophies is reducing single-use plastics. Customers are invited to bring their own containers, jars, and bags to refill essentials such as grains, spices, oils, and cleaning products. For those new to zero-waste practices, the store also offers reusable alternatives like bamboo toothbrushes, stainless steel straws, glass containers, and cloth produce bags. Each product is carefully selected based on ethical sourcing, sustainability, and durability, ensuring that every purchase contributes positively to the environment.

Beyond retail, EcoLife Store acts as a hub for community engagement and education. The store regularly hosts workshops and events focused on sustainable practices such as composting, upcycling, and creating DIY natural products. These sessions are designed to empower individuals with practical knowledge they can apply in their daily lives. The friendly and knowledgeable staff are always available to guide customers, answer questions, and recommend products tailored to their sustainability goals.

EcoLife Store also collaborates with local farmers, artisans, and eco-conscious brands to support the local economy while reducing the carbon footprint associated with long-distance shipping. Seasonal products are highlighted to promote mindful consumption and encourage customers to align their habits with nature’s cycles.

Ultimately, EcoLife Store is more than just a place to shop—it is a movement toward a cleaner, healthier planet. By making sustainable choices accessible, affordable, and convenient, the store inspires individuals to rethink consumption habits and take meaningful steps toward reducing waste. Every visit becomes an opportunity to contribute to a greener future while enjoying high-quality, ethically sourced products.`,
            rating: 3,
            location: "Coventry, London, CV2 4NG",
            tags: ["Repair", "Restore", "Recycle"],
            image: "https://images.unsplash.com/photo-1727413430950-ea623d4b2a42?q=80&w=1080",
            comments: [
                { user: "Oliver", rating: 3, text: "Good service but takes time.", createdAt: "2020-03-22" },
                { user: "Mia", rating: 4, text: "Helpful staff and reasonable pricing.", createdAt: "2020-03-22" }
            ]
        },
        {
            id: '4',
            name: "Urban Eco Café",
            description: `Urban Eco Café is a cozy, sustainability-focused café...`,
            rating: 4.7,
            location: "Bristol, UK BS1 4ST",
            tags: ["Vegan", "Organic", "Cafe"],
            image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1080",
            comments: [
                { user: "Ava", rating: 5, text: "Delicious vegan food and cozy vibe!" },
                { user: "Ethan", rating: 4, text: "Nice place but a bit crowded." },
                { user: "Isabella", rating: 5, text: "Loved the smoothies!" }
            ]
        },
        {
            id: '5',
            name: "SecondLife Thrift Store",
            description: `SecondLife Thrift Store is a vibrant second-hand shop...`,
            rating: 4.2,
            location: "Manchester, UK M1 2AB",
            tags: ["Thrift", "Reuse", "Sustainable"],
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdXpz6rkSr1xEdMeAPaSKt-YgqpwHDWq4HTw&s",
            comments: [
                { user: "James", rating: 4, text: "Great deals on vintage items!" },
                { user: "Charlotte", rating: 5, text: "Amazing collection and affordable." },
                { user: "Lucas", rating: 3, text: "Some items are overpriced." }
            ]
        },
        {
            id: '6',
            name: "CleanCycle Refill Station",
            description: `CleanCycle Refill Station is an innovative store...`,
            rating: 4.8,
            location: "Leeds, UK LS1 3AD",
            tags: ["Refill", "Eco", "Zero Waste"],
            image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1080",
            comments: [
                { user: "Amelia", rating: 5, text: "Love the refill concept!" },
                { user: "Benjamin", rating: 4, text: "Very practical and eco-friendly." },
                { user: "Harper", rating: 5, text: "Great initiative for sustainability." }
            ]
        },
        {
            id: '4',
            name: "Urban Eco Café",
            description: `Urban Eco Café is a cozy, sustainability-focused café...`,
            rating: 4.7,
            location: "Bristol, UK BS1 4ST",
            tags: ["Vegan", "Organic", "Cafe"],
            image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1080",
            comments: [
                { user: "Ava", rating: 5, text: "Delicious vegan food and cozy vibe!" },
                { user: "Ethan", rating: 4, text: "Nice place but a bit crowded." },
                { user: "Isabella", rating: 5, text: "Loved the smoothies!" }
            ]
        },
        {
            id: '5',
            name: "SecondLife Thrift Store",
            description: `SecondLife Thrift Store is a vibrant second-hand shop...`,
            rating: 4.2,
            location: "Manchester, UK M1 2AB",
            tags: ["Thrift", "Reuse", "Sustainable"],
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdXpz6rkSr1xEdMeAPaSKt-YgqpwHDWq4HTw&s",
            comments: [
                { user: "James", rating: 4, text: "Great deals on vintage items!" },
                { user: "Charlotte", rating: 5, text: "Amazing collection and affordable." },
                { user: "Lucas", rating: 3, text: "Some items are overpriced." }
            ]
        },
        {
            id: '6',
            name: "CleanCycle Refill Station",
            description: `CleanCycle Refill Station is an innovative store...`,
            rating: 4.8,
            location: "Leeds, UK LS1 3AD",
            tags: ["Refill", "Eco", "Zero Waste"],
            image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1080",
            comments: [
                { user: "Amelia", rating: 5, text: "Love the refill concept!" },
                { user: "Benjamin", rating: 4, text: "Very practical and eco-friendly." },
                { user: "Harper", rating: 5, text: "Great initiative for sustainability." }
            ]
        }
    ]
    const business = BusinessData.find((business) => business.id === id);
    return (
        <div className="bg-[#b6edbc] p-10 min-h-screen">
            <Link to="/listings"
                className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg w-fit">
                <ArrowLeft />Back
            </Link>


            {/* Business Details Section */}
            <div className="mt-10 flex gap-10 bg-white rounded-lg p-10 shadow-lg">
                <img src={business?.image} alt="" className="h-[500px] w-[500px] object-cover rounded-lg shadow-lg" />

                <div className="w-2/3">
                    <p className="text-3xl font-semibold py-2">{business?.name}</p>
                    <p className="flex gap-2 items-center"> {
                        Array.from({ length: Math.round(business?.rating) }).map((_, index) => (
                            <>
                                <Star key={index} fill="#FFD700" stroke="#FFD700" size={18} />
                            </>
                        ))} {business?.rating || 0}</p>
                    <p className="flex gap-2 items-center text-md text-gray-600 py-2"><MapPin size={18} />{business?.location}</p>

                    <p className="text-md font-normal text-justify mt-4 text-gray-700">{business?.description}</p>
                    <div className="flex gap-2 py-8">
                        {business?.tags.map((tag, index) => (
                            <span key={index} className="bg-green-500 text-white px-2 py-1 rounded-full text-sm">{tag}</span>
                        ))}
                    </div>
                </div>
            </div>


            {/* Review section */}
            <div className="bg-white shadow-md rounded-xl p-6 mt-6 w-full">
                <h2 className="text-xl font-bold text-gray-800 mb-2">
                    Review {business?.name}
                </h2>
                <p className="text-gray-500 text-sm mb-4">
                    Share your experience with {business?.name}
                </p>

                <UserReviewInput />

                <h1 className="text-xl font-bold text-gray-800 mb-2">Commments</h1>
                <CommentsBox comments={business?.comments} />
            </div>


            {/* Related Business section */}
            <div className="mt-10">
                <h1 className="text-2xl  p-4 rounded-lg font-semibold py-4 text-green-700">Related Businesses</h1>
                <div className="grid grid-cols-3 gap-6 mt-4 ">
                    {BusinessData.filter((business) => business.id !== id).slice(0, 3).map((business, index) => (
                        <Link to={`/listings/${business.id}`}>
                            <BusinessCard
                                key={index}
                                imageUrl={business.image}
                                name={business.name}
                                location={business.location}
                                tags={business.tags}
                                rating={business.rating}
                            />
                        </Link>
                    ))}
                </div>
            </div>
        </div >
    )
}

export default ListingsView