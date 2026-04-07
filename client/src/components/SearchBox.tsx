import { Search } from "lucide-react"

const SearchBox = () => {
    return (
        <div className='flex items-center gap-2 bg-white px-4  rounded-lg'>
            <Search />
            <input type="text" placeholder="Search eco businesses..." className="p-4 rounded-lg bg-transparent" />
        </div>
    )
}

export default SearchBox