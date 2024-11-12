

// const index = () => {
// 	return (
// 		<div>

import toast from "react-hot-toast";

			
// 		</div>
// 	);
// };

// export default index;

//get all coffees from local storage
const getAllFavorites = () =>{
	const all = localStorage.getItem('favorites');

	if(all){
		const favorites = JSON.parse(all);
		console.log(favorites);
		return favorites;
	}else{
		console.log([]);
		return [];
	}
}


//add a coffee to local storage
const addFavorite = coffee => {
	// console.log(coffee);

	//get all previously saved coffee data
	const favorites = getAllFavorites();
	
	// console.log(favorites);

	const isExist = favorites.find(item => item.id == coffee.id)
	if(isExist) return toast.error('coffee already exist!')
	
	favorites.push(coffee);
	localStorage.setItem('favorites', JSON.stringify(favorites))
	toast.success('Successfully added !')
}

//remove a coffee from local storage 
const removeFavorite = (id) =>{
	//get all previously saved coffee data 
	const favorites = getAllFavorites()
	const remaining = favorites.filter(coffee => coffee.id != id)
	localStorage.setItem('favorites', JSON.stringify(remaining))
	toast.success('Successfully removed !')
}

export { addFavorite, getAllFavorites, removeFavorite };