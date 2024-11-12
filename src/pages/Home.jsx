import React from 'react';
import Banner from '../components/Banner';
import Heading from '../components/Heading';
import { Outlet, useLoaderData } from 'react-router-dom';
import Categories from '../components/Categories';

const Home = () => {

	const categories = useLoaderData();
	console.log(categories);

	return (
		<div>
			{/* Banner  */}
			<Banner></Banner>
			{/* Heading  */}
			<Heading 
			title={'Browse coffee by category'} 
			subtitle={'Choose your desired coffee category to browse through  specific coffee that fit your taste'}>

			</Heading>
			{/* Categories Tab Section  */}

			<Categories categories={categories}></Categories>
			{/* Dynamic Nested Component  */}

			<Outlet></Outlet>
		</div>
	);
};

export default Home;