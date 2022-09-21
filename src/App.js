// import CategoryItem from './components/category-item/category-item.component'
// import './categories.styles.scss';
// Moved to directory.component


// import Directory from './components/directory/directory.component';  
//    Moved to home.component


// const App = () => {
//   const categories = [
//     {
//       "id": 1,
//       "title": "hats",
//       "imageUrl": "https://i.ibb.co/cvpntL1/hats.png"
//     },
//     {
//       "id": 2,
//       "title": "jackets",
//       "imageUrl": "https://i.ibb.co/px2tCc3/jackets.png"
//     },
//     {
//       "id": 3,
//       "title": "sneakers",
//       "imageUrl": "https://i.ibb.co/0jqHpnp/sneakers.png"
//     },
//     {
//       "id": 4,
//       "title": "womens",
//       "imageUrl": "https://i.ibb.co/GCCdy8t/womens.png"
//     },
//     {
//       "id": 5,
//       "title": "mens",
//       "imageUrl": "https://i.ibb.co/R70vBrQ/men.png"
//     }
//   ]

//    Moved to home.component


// return (
// <div className='categories-container'>            // v1
//   {categories.map(({ title,id,imageUrl }) => (
//     <div key={id} className='category-container'>
//     <div className="background-image" style={{
//       background: `url(${imageUrl})`
//     }} />
//     <div className='category-body-container'>
//       <h2>{title}</h2>
//       <p>Shop Now</p>
//     </div>
//   </div>
//   ))}
// </div>



// <div className='categories-container'>              //v2
//   {categories.map((category) => (
//     <CategoryItem key={category.id} category={category} />
//   ))}
// </div>

// <Directory categories={categories}/>                // v3
//   );
// };



import { Routes, Route } from 'react-router-dom';
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import SignIn from './routes/sign-in/sign-in.component';


//  this TOP LEVEL navigation component is kind of like the template.
// Moved to navigation.component

// const Navigation = () => {
//   return (
//     <div>
//       <div>
//         <h1>I am the navigation bar</h1>
//       </div>
//       <Outlet />
//     </div>
//   )
// }

const Shop = () => {
  return (
    <h1>Im a shopping page</h1>
  )
}

// in order nested routes to work we need to wrap them in a parent route and add Outlet component to the parent route (see home.component.js)

const App = () => {
  return (
    <Routes>

      <Route path='/' element={<Navigation />}>

        <Route index element={<Home />} /> 
        {/* index is equale to index="true". Match as a base component*/}
        <Route path='shop' element={<Shop />} />
        <Route path='sign-in' element={<SignIn />} />

      </Route>

    </Routes>

  )
}

export default App;
