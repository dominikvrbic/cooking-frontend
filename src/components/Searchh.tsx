import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search } from '../assets';
import { SearchRecipesDocument } from '../generated/graphql';
import Axios from 'axios';
import { print } from 'graphql';
import { useAsync } from 'react-use';
import getUrl from '../utils/getUrl';

const config = {
  apiUrl: 'https://api.cooking.vrbic.org/graphql',
};
export async function searchRecipes(_q) {
  try {
    const { data } = await Axios.post(config.apiUrl, {
      query: print(SearchRecipesDocument),
      variables: {
        searchString: _q,
      },
    });
    return data;
  } catch (error) {
    console.log('err', error);
  }
}

export const Searchh = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const [searchResults, setSearchResults] = useState([]);

  const handleChange = (event: any) => {
    setSearchTerm(event.target.value);
  };

  useAsync(async () => {
    const { data } = await searchRecipes(searchTerm);
    setSearchResults(data.recipes);
  }, [searchTerm]);

  return (
    <div className='pt-2 relative mx-right text-gray-600  '>
      <input
        className='border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none '
        type='search'
        name='search'
        value={searchTerm}
        placeholder='Search'
        onChange={handleChange}
      />
      <button type='submit' className='absolute right-0 top-0 mt-5 mr-4'>
        <Search className='text-gray-600 h-4 w-4 fill-current ' />
      </button>
      {searchTerm && searchResults.length && (
        <ul className='absolute m-0 p-0 shadow-sm max-w-full left-0 list-none text-gray-700 bg-white'>
          {searchResults.map((item) => (
            <li className='w-full' key={item.slug}>
              <Link className='flex' to={`/recipe/${item.slug}`}>
                <img
                  className=' m-2 pr-2'
                  src={getUrl(item.image.url)}
                  alt={item.image.name}
                  style={{ width: '100px' }}
                />
                <span className='m-2'>   {item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
