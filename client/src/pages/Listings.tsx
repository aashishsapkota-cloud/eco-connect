import { Link } from "react-router-dom"
import BusinessCard from "../components/BusinessCard"
import SearchFilter from "../components/SearchFilter"

const BusinessData = [
    {
        id: '1',
        name: "EcoLife Store",
        rating: 4.5,
        location: "Conventry Lodon, UK11 1BC",
        tags: ["Zero Waste", "Organic", "Vegan"],
        image: "https://images.unsplash.com/photo-1760863264228-fa0792a2d894?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY28lMjBmcmllbmRseSUyMHN0b3JlJTIwcGxhbnRzfGVufDF8fHx8MTc3NDUyNTY5M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
        id: '2',
        name: "Green Grocer Market",
        rating: 4.9,
        location: "Warwick Road, Conventry, UK11 1BC",
        tags: ["Zero Waste", "Organic", "Vegan"],
        image: "https://images.unsplash.com/photo-1549248581-cf105cd081f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMHByb2R1Y2UlMjBtYXJrZXQlMjB2ZWdldGFibGVzfGVufDF8fHx8MTc3NDUyNTY5M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
        id: '3',
        name: "Repair & Restore workshop",
        rating: 3,
        location: "Coventry, London, CV2 4NG",
        tags: ["Repair", "Restore", "Recycle"],
        image: "https://images.unsplash.com/photo-1727413430950-ea623d4b2a42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXBhaXIlMjB3b3Jrc2hvcCUyMGNyYWZ0c3xlbnwxfHx8fDE3NzQ1MjU2OTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
        id: '4',
        name: "Urban Eco Café",
        rating: 4.7,
        location: "Bristol, UK BS1 4ST",
        tags: ["Vegan", "Organic", "Cafe"],
        image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1080"
    },
    {
        id: '5',
        name: "SecondLife Thrift Store",
        rating: 4.2,
        location: "Manchester, UK M1 2AB",
        tags: ["Thrift", "Reuse", "Sustainable"],
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdXpz6rkSr1xEdMeAPaSKt-YgqpwHDWq4HTw&s"
    },
    {
        id: '6',
        name: "CleanCycle Refill Station",
        rating: 4.8,
        location: "Leeds, UK LS1 3AD",
        tags: ["Refill", "Eco", "Zero Waste"],
        image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1080"
    },
    {
        id: '7',
        name: "Pure Earth Organics",
        rating: 4.6,
        location: "Oxford, UK OX1 2JD",
        tags: ["Organic", "Eco", "Health"],
        image: "https://images.unsplash.com/photo-1506806732259-39c2d0268443?q=80&w=1080"
    },
    {
        id: '8',
        name: "Green Basket Co.",
        rating: 4.4,
        location: "Liverpool, UK L1 8JQ",
        tags: ["Groceries", "Organic", "Sustainable"],
        image: "https://images.unsplash.com/photo-1490818387583-1baba5e638af?q=80&w=1080"
    },
    {
        id: '9',
        name: "Eco Home Essentials",
        rating: 4.3,
        location: "Sheffield, UK S1 2GU",
        tags: ["Home", "Eco", "Reusable"],
        image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=1080"
    },
    {
        id: '10',
        name: "Nature’s Pantry",
        rating: 4.7,
        location: "Cambridge, UK CB2 3QJ",
        tags: ["Organic", "Food", "Healthy"],
        image: "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1080"
    },
    {
        id: '11',
        name: "Zero Waste Hub",
        rating: 4.9,
        location: "Nottingham, UK NG1 4BX",
        tags: ["Zero Waste", "Refill", "Eco"],
        image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=1080"
    },
    {
        id: '12',
        name: "Eco Living Corner",
        rating: 4.1,
        location: "Birmingham, UK B1 1AA",
        tags: ["Lifestyle", "Eco", "Sustainable"],
        image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1080"
    }
]

const Listings = () => {
    return (
        <div className="min-h-screen bg-[#b6edbc] p-8">
            <SearchFilter />
            <h1 className="text-3xl font-semibold py-8 mx-2">Eco-Friendly Businesses in Coventry</h1>
            <div className="grid grid-cols-3 gap-6 ">
                {BusinessData.map((business, index) => (
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
    )
}

export default Listings