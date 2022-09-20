// import CategoryItem from './components/category-item/category-item.component'
// import './categories.styles.scss';

// Moved to directory.component

import Directory from './components/directory/directory.component';


const App = () => {
  // move component with categories
  const categories = [
    {
      "id": 1,
      "title": "hats",
      "imageUrl": "https://i.ibb.co/cvpntL1/hats.png"
    },
    {
      "id": 2,
      "title": "jackets",
      "imageUrl": "https://i.ibb.co/px2tCc3/jackets.png"
    },
    {
      "id": 3,
      "title": "sneakers",
      "imageUrl": "https://i.ibb.co/0jqHpnp/sneakers.png"
    },
    {
      "id": 4,
      "title": "womens",
      "imageUrl": "https://i.ibb.co/GCCdy8t/womens.png"
    },
    {
      "id": 5,
      "title": "mens",
      "imageUrl": "https://i.ibb.co/R70vBrQ/men.png"
    }
  ]


  return (
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

    <Directory categories={categories}/>
  );
};

export default App;
