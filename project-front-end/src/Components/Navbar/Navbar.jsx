import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import { StoreContext } from '../../Context/StoreContext'
// import { TextField } from '@mui/material'

function Navbar({ setShowLogin }) {
    const [menu, setMenu] = useState("")
    // const [searchQuery, setSearchQuery] = useState('');
    const { getTotalCartAmount, token, setToken } = useContext(StoreContext)
    const navigate = useNavigate()
    const logout = () => {
        localStorage.removeItem("token")
        setToken("")
        navigate("/")
    }

    // const handleSearch = (event) => {
    //     const query = event.target.value.toLowerCase();
    //     setSearchQuery(query);
    //     const filtered = data.filter((data) =>
    //         data.name.toLowerCase().includes(query)
    //     );
    //     setFilteredRecipes(filtered);
    // }
        return (
            <div className='navbar'>
                <Link to='/'> <img src={assets.logo} alt="" className="logo" /></Link>
                <ul className="navbar-menu">
                    <Link to='/' onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>Home</Link>
                    <a href='#explore-menu' onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>Menu</a>
                    <a href='#app-download' onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>Mobile-app</a>
                    <a href='#footer' onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>Contact Us</a>
                </ul>
                <div className="navbar-right">
                    {/* <div className='d-flex flex-row '>
                        <TextField
                            label="Search Recipes"
                            variant="outlined"
                            fullWidth
                            value={searchQuery}
                            onChange={handleSearch}
                            style={{ marginBottom: '50px' }}

                        />
                    </div> */}
                    {/* <img src={assets.search_icon} alt="" /> */}
                    <div className="navbar-search-icon">
                        <Link to={'/cart'}> <img src={assets.basket_icon} alt="" /></Link>
                        <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
                    </div>
                    {!token ? <button onClick={() => { setShowLogin(true) }}>Sign in</button>
                        :
                        <div className='navbar-profile'>
                            <img src={assets.profile_icon} alt="" />
                            <ul className="nav-profile-dropdown">
                                {/* <li><img src={assets.bag_icon} alt="" /><p>Orders</p></li> */}
                                {/* <hr /> */}
                                <li onClick={logout}><img src={assets.logout_icon} alt="" /><p>Logout</p></li>
                            </ul>
                        </div>}
                </div>

            </div>
        )
    }

    export default Navbar