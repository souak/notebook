import { useState } from "react"

type SearchInputProp = {
    placeholder?: string,
    onSearchChange: (value: string) => void
}
export function SearchInput({placeholder = "Search...", onSearchChange}: SearchInputProp) {

    const [searchValue, setSearchValue] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
    }

    return (
        <div className="flex items-center bg-[#f0eaf5] text-gray-800 rounded-full px-4 py-2 w-full max-w-md shadow-sm">
          
            <button  className="text-xl mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>

            <input
                type="text"
                value={searchValue}
                onChange={handleChange}
                placeholder={placeholder}
                className="flex-1 bg-transparent outline-none placeholder:text-gray-500"
            />

            <button onClick={() => onSearchChange(searchValue)} className="text-xl ml-3 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z" />
                </svg>
            </button>
        </div>
    )
}
