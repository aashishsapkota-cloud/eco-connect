import { Filter, Search, X } from 'lucide-react'

const SearchFilter = () => {
    return (
        <div className='flex gap-4 items-center'>
            <div className='flex items-center gap-2 bg-white rounded-lg w-1/3 px-4'>
                <Search />
                <input type="text" placeholder='Search business...' className='border-none rounded-lg w-full px-4 py-2' />
                <X />
            </div>
            <select name="category" id="" className='bg-white px-4 py-2 rounded-lg'>
                <option value="" disabled selected>Category</option>
                <option value="">Zero Waste</option>
                <option value="">Local</option>
                <option value="">Refair Cafes</option>
            </select>
            <select name="sort" id="" className='bg-white px-4 py-2 rounded-lg' >
                <option value="" disabled selected>Sort by</option>
                <option value="">Nearest</option>
                <option value="">Most Reviews</option>
                <option value="">Highest Rating</option>
            </select>
            <button className='bg-green-500 text-white px-4 py-2 rounded-lg flex gap-2'><Filter />  Reset Filter</button>
        </div>
    )
}

export default SearchFilter