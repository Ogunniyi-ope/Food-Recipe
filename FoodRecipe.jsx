import FoodImage from '../assets/image-omelette.jpeg'

function FoodRecipe() {
  return (
    <main className='relative px-4 py-6 md:px-8 lg:px-0'>
      <div className=' bg-white border-2 border-white w-full md:w-4/5 lg:w-1/2 mx-auto p-4 md:p-5 '>
        <img src={FoodImage} alt="omolette" className='rounded-xl' />
        <div>
            <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold leading-tight py-3 font-serif'> Simple Omelette Recipe</h1>
            <p className='text-gray-700 font-sans text-base md:text-lg'>An Easy and quick dish , perfect for any meal. This classic omellete combines beaten eggs cooked to perfection,
                optionally filled with your choice of cheese, vegetables, or meats.
            </p>
        </div>

        <div className='border-2 border-pink-200 bg-pink-200 rounded-xl mt-2.5 p-3 md:p-5 '>
            <h1 className='text-pink-500 font-medium p-2 md:p-4 text-2xl md:text-3xl font-serif'> Preparation time </h1>
            <ul className='list-disc mx-5 md:mx-10 text-gray-600 text-base md:text-lg leading-8 md:leading-9 '>
                <li><b className='text-gray-700'>Total:</b> Approximately 10 minutes</li>
                <li><b className='text-gray-700'>Preparation:</b> 5 minutes </li>
                <li><b className='text-gray-700'>Cooking:</b> 5 minutes</li>
            </ul>
        </div>
        <div>
            <h1 className='text-orange-900 text-2xl md:text-4xl mb-3 md:mb-5 p-3 font-serif'>Ingredients</h1>
            <ul className='list-disc mx-5 md:mx-10 text-gray-700 text-base md:text-lg leading-8 md:leading-9'>
                <li>2-3 large eggs</li>
                <li>Salt. to taste</li>
                <li>Pepper,to taste</li>
                <li>1 tablespoon of butter or oil</li>
                <li>Optional fillings : diced vegetables , cooked meats and herbs</li>
            </ul>
        </div>
        <hr className='border-gray-300 mt-4' />

        <div className='mb-3.5'> 
            <h1 className='text-orange-900 text-2xl md:text-4xl mb-3 md:mb-5 p-3 font-serif '>Instuctions </h1>
            <ol className='list-decimal mx-5 md:mx-10 text-base md:text-lg leading-7 md:leading-8  '>
                <li className='text-gray-700'><b className='text-gray-700'>Beat the eggs:</b> In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed .
                 You can add a tablespoon of water for a fluffer texture. </li>
                <li className='text-gray-700'><b className='text-gray-700'>Heat the pan:</b> Place a non-stick frying pan over a medium heat and add butter or oil.</li>
                <li className='text-gray-700'><b className='text-gray-700'>Cook the omelette:</b> Once the butter is melted and bubbling, pour in the eggs.
                 Tilt the pan to ensure the eggs evenly coat the surface.</li>
                <li className='text-gray-700'><b className='text-gray-700'>Add Fillings(optional):</b> When the eggs begin to set at the edges but are still slightly runny in the middle, 
                sprinkly your choosen fillings over one half of the omelette. </li>
                <li className='text-gray-700'><b className='text-gray-700'>Fold and serve:</b> As the omelette continues to cook, carefully lift one edge and fold it over the fillings. 
                Let it cook for another minute, then slide it onto a plate.</li>
                <li className='text-gray-700'><b className='text-gray-700'>Enjoy</b> Serve hot, with additional salt and pepper if needed. </li>
            </ol>

        </div>
        <hr className='text-gray-300' />

        <div>
            <h1 className='text-orange-900 text-2xl md:text-4xl mb-3 md:mb-5 p-3 font-serif '>Nutrition </h1>
            <p className='text-gray-700 text-base md:text-lg'>The Table below shows Nutritional values per serving without the additional fillings. </p>

            <table className='table-auto border-separate border-spacing-x-2 md:border-spacing-x-12 lg:border-spacing-x-24 border-spacing-y-3 '>
                <tbody>
                    <tr className="border-b border-gray-900">
                        <td className="px-2 md:px-4 py-2 font-sans font-semibold text-gray-700"> Calories</td>
                        <td className="px-2 md:px-4 py-2 text-orange-900 font-bold"> 277kcal</td>
                    </tr>
                
                    
                    <tr  className="border-b border-gray-900">
                        <td  className="px-2 md:px-4 py-2 font-sans font-semibold text-gray-700"> Carbs</td>
                        <td  className="px-2 md:px-4 py-2 text-orange-900 font-bold"> 0g</td>
                    </tr>
                    <tr  className="border-b border-gray-900">
                        <td  className="px-2 md:px-4 py-2 font-sans font-semibold text-gray-700"> Protein</td>
                        <td  className="px-2 md:px-4 py-2 text-orange-900 font-bold"> 20g</td>
                    </tr>
                    <tr className="border-b border-gray-900">
                        <td  className="px-2 md:px-4 py-2 font-sans font-semibold text-gray-700"> Fat</td>
                        <td  className="px-2 md:px-4 py-2 text-orange-900 font-bold"> 22g</td>
                    </tr>
                </tbody>
            </table>
       



        </div>
        

        
      </div>
    </main>
  );
}

export default FoodRecipe;