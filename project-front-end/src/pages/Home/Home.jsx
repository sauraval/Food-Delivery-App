import React, { useState } from 'react'
import './Home.css'
import Header from '../../Components/Header/Header'
import ExploreMenu from '../../Components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../Components/FoodDisplay/FoodDisplay'
import AppDownload from '../../Components/AppDownload/AppDownload'


function Home() {
  const [category,setCategory] = useState("All")

  return (
    <div>
        <Header/>
        <ExploreMenu  category={category} setCategory={setCategory}/>
        <FoodDisplay category={category}/>
        <AppDownload/>
    </div>
    // const handleSearch = (event) => {
    //   const query = event.target.value.toLowerCase();
    //   setSearchQuery(query);
    //   const filtered = recipes.filter((recipe) =>
    //       recipe.name.toLowerCase().includes(query)
    //   );
    //   setFilteredRecipes(filtered);
  // };
  // <Container maxWidth="lg" style={{ marginTop: '20px' }}>
  // <div className='d-flex flex-row '>
  //     <TextField
  //         label="Search Recipes"
  //         variant="outlined"
  //         fullWidth
  //         value={searchQuery}
  //         onChange={handleSearch}
  //         style={{ marginBottom: '50px' }}

  //     />




  )
}

export default Home