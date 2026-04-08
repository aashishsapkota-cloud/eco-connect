import { Filter, Search, X } from 'lucide-react'
import Button from './Button'

const SearchFilter = () => {
    return (
        <div className='flex gap-4 items-center'>
            <div className='flex items-center gap-2 bg-white rounded-lg w-1/3 px-4'>
                <Search />
                <input type="text" placeholder='Search business...' className='border-none rounded-lg w-full px-4 py-2' />
                <X />
            </div>
            <select name="category" id="" defaultValue={"all"} className='bg-white px-4 py-2 rounded-lg'>
                <option value="all" disabled >Category</option>
                <option value="zero-waste">Zero Waste</option>
                <option value="local">Local</option>
                <option value="refair-cafes">Refair Cafes</option>
            </select>
            <select name="sort" id="" defaultValue={"all"} className='bg-white px-4 py-2 rounded-lg' >
                <option value="all" disabled >Sort by</option>
                <option value="nearest">Nearest</option>
                <option value="most-reviews">Most Reviews</option>
                <option value="highest-rating">Highest Rating</option>
            </select>
            <Button className='flex gap-2' ><Filter />  Reset Filter</Button>
        </div>
    )
}

export default SearchFilter