import React from 'react';
import { BsSearch } from "react-icons/bs";
import UseInputState from '../hooks/useInputState';

function Search({ onSubmit }) {

    const [inputValue, handleChange, reset] = UseInputState('');

    const handleInputChange = (e) => {
        handleChange(e);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputValue);
        onSubmit(inputValue);
    };

    return (
        <div className="m-2 flex justify-between items-center px-2 rounded-full py-2 md:border-2 md:shadow-sm 
             hover:border-header-primary bg-transparent">
            <form onSubmit={handleSubmit}>
                <input name='searchInput' value={inputValue} onChange={handleInputChange}
                    className='flex-grow text-sm text-stone-200 placeholder-gray-400 pl-2 bg-transparent
                 outline-none md:border-none focus:border-stone-200 bg-header-primary' type="text"
                    placeholder={'Search Location'}
                />
                <button disabled={!inputValue}>
                    <BsSearch size={30} className="hidden md:inline-flex h-8 mx-2 text-stone-200 bg-header-primary rounded-full p-2 cursor-pointer
                hover:contrast-150 border-stone-200" />
                </button>
            </form>
        </div>
    )
}

export default Search
