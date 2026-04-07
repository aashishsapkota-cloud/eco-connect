import BusinessCard from "../components/BusinessCard"

const BusinessData = [
    {
        name: "EcoLife Store",
        rating: 4.5,
        location: "Conventry Lodon, UK11 1BC",
        tags: ["Zero Waste", "Organic", "Vegan"],
        image: "https://images.unsplash.com/photo-1760863264228-fa0792a2d894?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY28lMjBmcmllbmRseSUyMHN0b3JlJTIwcGxhbnRzfGVufDF8fHx8MTc3NDUyNTY5M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
        name: "Green Grocer Market",
        rating: 4.9,
        location: "Warwick Road, Conventry, UK11 1BC",
        tags: ["Zero Waste", "Organic", "Vegan"],
        image: "https://images.unsplash.com/photo-1549248581-cf105cd081f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMHByb2R1Y2UlMjBtYXJrZXQlMjB2ZWdldGFibGVzfGVufDF8fHx8MTc3NDUyNTY5M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
        name: "Repair & Restore workshop",
        rating: 3,
        location: "Coventry, London, CV2 4NG",
        tags: ["Repair", "Restore", "Recycle"],
        image: "https://images.unsplash.com/photo-1727413430950-ea623d4b2a42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXBhaXIlMjB3b3Jrc2hvcCUyMGNyYWZ0c3xlbnwxfHx8fDE3NzQ1MjU2OTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    }
]

const Listings = () => {
    return (
        <div className="min-h-screen bg-pink-100 p-10">
            <h1 className="text-2xl font-normal">Eco-Friendly Businesses in Coventry</h1>
            <div className="grid grid-cols-3 gap-6 mt-4 ">
                {BusinessData.map((business, index) => (
                    <BusinessCard key={index} imageUrl={business.image} name={business.name} location={business.location} tags={business.tags} rating={business.rating} />
                ))}
            </div>
        </div>
    )
}

export default Listings