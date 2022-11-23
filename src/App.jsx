import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './CssFile/LightMode/App.css'

//Webpage Components
import Header from './Homepage/Header'
import Home from './Homepage/Home'
import Products from './ProductsPage/Products'
import FooterTop from './Homepage/FooterTop'
import FooterBottom from './Homepage/FooterBottom'
import Season from './Homepage/Season'

//Header Components
import CartPage from './FunctionalPages/CartPage'
import AccountPage from './FunctionalPages/AccountPage'
import LoginPage from './FunctionalPages/LoginPage'
import Favorites from './FunctionalPages/Favorites'
import CreateAccountPage from './FunctionalPages/CreateAccountPage'

//Feature Items Components
import Items from './ProductsPage/Items'
import SingleItem from './ProductsPage/SingleItem'

const keyboard = [
  ["Mechanical Gaming Keyboard Blue/White", "https://i.imgur.com/Kl4VXNz.jpg", "https://i.imgur.com/PwZqygZ.jpg", "https://i.imgur.com/ctgfbkQ.jpg", "https://i.imgur.com/e6RH8j1.jpg", "$29.99", "This keyboard is perfect for office work to at home gaming"],
  ["Mechanical Gaming Keyboard Orange/Black", "https://i.imgur.com/Sz5KeAT.jpg", "https://i.imgur.com/TgPhkUI.jpg","https://i.imgur.com/0K3Eafj.jpg", "https://i.imgur.com/PwQMBOs.jpg", "29.99", "This keyboard is perfect for office work to at home gaming"],
  ["Mechanical Gaming Keyboard Red/Black/Gray", "https://i.imgur.com/BiiYgk4.jpg", "https://i.imgur.com/T4ddzIA.jpg", "https://i.imgur.com/7gMWGFX.jpg", "https://i.imgur.com/A8fLB5N.jpg", "$29.99", "This keyboard is perfect for office work to at home gaming"]
]

const nut = [
  ["Fisher's Cashews", "https://i.imgur.com/BWJMvTb.jpg", "https://i.imgur.com/f2bB04L.jpg", "https://i.imgur.com/qXzrhQq.jpg", "https://i.imgur.com/v213XlY.jpg", "$17.99", "Enjoy some nice tasty cashews. (Free with purchase of any priced items or service, only 1 quantity of snack is free"],
  ["Fisher's Peanuts", "https://i.imgur.com/5G02mpq.jpg", "https://i.imgur.com/Vx8rLqT.jpg", "https://i.imgur.com/qVR4h63.jpg", "https://i.imgur.com/3VKWYmy.jpg", "$13.99", "Enjoy some nice tasty peanuts. (Free with purchase of any priced items or service, only 1 quantity of snack is free"],
  ["Fisher's Pecans", "https://i.imgur.com/RUSeYaV.jpg", "https://i.imgur.com/q6lLDlT.jpg", "https://i.imgur.com/Oqo6RN0.jpg", "https://i.imgur.com/ALvL2Fx.jpg", "$15.99", "Enjoy some nice tasty pecans. (Free with purchase of any priced items or service, only 1 quantity of snack is free"]
]

const wrench = [
  ["CS Unitec Wrench", "https://i.imgur.com/kKFVXpd.jpg", "$70.99", "This 8 in Durable wrench is made out of Aluminum Bronze, non magetic and corrosion resistant"]
]

const book = [
  ["Atomic Habits By James Clear (Paperback)", "https://i.imgur.com/j1aBdna.jpg", "$14.99", "The Step By Step Guide To Turn Your Goals Into Reality"]
]


//Season Data
const season = [ 
  {
    season: "Winter", 
    imageArr:["https://i.imgur.com/OXdEhrm.jpg", "https://i.imgur.com/vwQ2zuA.jpg", "https://i.imgur.com/fkINmtT.jpg", "https://i.imgur.com/Ov3T9pC.jpg"], 
    altArr:["Ice hotel bedroom", "Two ice sculptures statues man and woman", "Ice sculpture climbers", "Ice hotel master bedroom enterance"],
    title:"The Ice Hotel",
    subtitle:"Located in Sweden, enjoy an amazing hoilday get away in a hotel made of ice.",
    details:"Select a booking date through our calander, prices may vary on day",
    reserve:"Book a Room",
  }, 
  {
    season: "Spring", 
    imageArr:["https://i.imgur.com/gYfqINd.jpg", "https://i.imgur.com/tVjr5Bj.jpg", "https://i.imgur.com/bNVUNCe.jpg", "https://i.imgur.com/HhXNX5Z.jpg"], 
    altArr:["Spy Museum Building", "Spy Museum enterance", "Spy Museum Mission Room","Spy Museum Historical Display"],
    title:"The Spy Museum",
    subtitle:"Discover the secert real missions throughout tours of undercover operations",
    details:"Tickets can be purchased at the Spy Museum, however due to the high demand, it is recommended to purchase a ticket online to ensure your place to enter.",
    reserve:"Buy Ticket",
  }, 
  {
    season: "Summer", 
    imageArr: ["https://i.imgur.com/wwIeNM2.png", "https://i.imgur.com/Uf7yGVU.jpg", "https://i.imgur.com/QDvdAT3.jpg", "https://i.imgur.com/QDvdAT3.jpg"], 
    altArr: ["Hawaii Falcon Club", "Spy Museum enterance", "Spy Museum Mission Room"],
    title:"Hawaii Vacation",
    subtitle:"Looking for a warming vacation? Why not Hawaii?",
    details:"Enjoy the beautiful beaches and a fun firework show of hawaii. Hospitaility of Hawaii is always first class.",
    reserve:"Check Flights",
  }, 
  {
    season: "Fall", 
    imageArr:["https://i.imgur.com/AYwkAio.jpg", "https://i.imgur.com/Z5fpqME.jpg", "https://i.imgur.com/2vVJAny.jpg", "https://i.imgur.com/99PYIeM.jpg"], 
    altArr:["Vermont Street Market", "Vermont Stowe church", "Vermont Woodstock", "Ben and Jerry's Factory"],
    title:"Book a hotel at Vermont",
    subtitle:"Vist the quiet and peachful town of woodstock, street market, Vermont's Stowe church, and even an ice cream factory (Ben and Jerry's",
    details:"Hotel room includes a tour guide and bus",
    reserve:"Book a Room",
  }, 
]

function App() {
  return (
    <div className='app_wrapper'>
      <Router>
        <Routes>
          <Route path='/' element={<><Header/><Home/><Products/><FooterTop/><FooterBottom/></>} />
          <Route path='/Winter' element={<><Header/><Home/><Season season={season[0]}/><FooterTop/><FooterBottom/></>} />
          <Route path='/Spring' element={<><Header/><Home/><Season season={season[1]}/><FooterTop/><FooterBottom/></>} />
          <Route path='/Summer' element={<><Header/><Home/><Season season={season[2]}/><FooterTop/><FooterBottom/></>} />
          <Route path='/Fall' element={<><Header/><Home/><Season season={season[3]}/><FooterTop/><FooterBottom/></>} />
          <Route path='/cart' element={<><Header/><CartPage/><FooterBottom/></>} />
          <Route path='/account' element={<><Header/><AccountPage/><FooterBottom/></>} />
          <Route path='/login' element={<><Header/><LoginPage/><FooterBottom/></>} />
          <Route path='/favorites' element={<><Header/><Favorites/><FooterBottom/></>} />
          <Route path='/create' element={<><Header/><CreateAccountPage/><FooterBottom/></>} />

          <Route path='/tools/wrench' element={<><Header/><Home/><SingleItem item={wrench} /><FooterTop/><FooterBottom/></>} />
          <Route path='/gifts/book' element={<><Header/><Home/><SingleItem item={book} /><FooterTop/><FooterBottom/></>} />
          <Route path='/snacks/nuts' element={<><Header/><Home/><Items item={nut} /><FooterTop/><FooterBottom/></>} />
          <Route path='/electronics/keyboards' element={<><Header/><Home/><Items item={keyboard} /><FooterTop/><FooterBottom/></>} />
        </Routes>
      </Router>
      <div className='overlay'>
      </div>
    </div>
  )
}

export default App;