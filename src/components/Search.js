import React from 'react';
import { BsSearch } from "react-icons/bs";
import UseInputState from '../hooks/useInputState';
import { AiFillCloseCircle } from 'react-icons/ai'

function Search({ onSubmit }) {

    const [inputValue, handleChange, reset] = UseInputState('');

    const handleInputChange = (e) => {
        handleChange(e);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
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
                <button disabled={!inputValue} className="disabled:opacity-25">
                    {
                        inputValue && <AiFillCloseCircle size={25} className="mx-1 px-1 inline-flex text-stone-400 hover:text-header-primary scale-110 ease-out" onClick={reset} />
                    }
                    <BsSearch size={30} className="hidden md:inline-flex h-8 mx-2 text-stone-200 bg-header-primary rounded-full p-2 cursor-pointer
                hover:contrast-150 border-stone-200" />
                </button>
            </form>
        </div>
    )
}

export default Search
