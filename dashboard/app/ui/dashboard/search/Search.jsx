

'use client';
import React from 'react';
import styles from './search.module.css';
import { MdSearch } from 'react-icons/md';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';


const Search = ({placeholder}) => {
  const searchParams = useSearchParams();
  const {replace} = useRouter();
  const pathname = usePathname();
  const handleSearch = (e)=>{
const params = new URLSearchParams(searchParams)
if(e.target.value){
  e.target.value.length > 2 && params.set("q",e.target.value)
} else{
  params.delete("q")
}
replace(`${pathname}?${params}`)
  }
  return (
    <div className={styles.container}>
    <MdSearch/>
    <input type="text" placeholder={placeholder}  onChange={handleSearch} className={styles.input} />
    </div>
  )
}

export default Search