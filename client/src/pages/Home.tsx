import Card from "../components/Card"
import Hero from "../components/Hero"
import { Heart, Leaf, Users, Verified } from "lucide-react"

const Home = () => {
    return (
        <div className='bg-green-200 min-h-screen'>
            <Hero />

            <div className="flex flex-col items-center justify-center gap-4">
                <h1 className="text-3xl font-bold">Why Choose Eco-connect?</h1>
                <div className="flex gap-8  mt-7">
                    <Card title="Eco-Friendly " description="Find businesses committed to sustainable practices" logo={Leaf} />
                    <Card title="Community" description="Support local businesses in your area" logo={Users} />
                    <Card title="Verified" description="All businesses are reviewed and verified" logo={Verified} />
                    <Card title="Impact" description="Make a positive impact on the environment" logo={Heart} />
                </div>
            </div>
        </div>
    )
}

export default Home