import React from 'react'
import Games from './Games'
import SearchBar from './SearchBar'

function HomePage() {
  return (
    <div>
      <div>
        <SearchBar></SearchBar>
        <Games></Games>
      </div>
    </div>
  )
}

export default HomePage