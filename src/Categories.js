import React from 'react';
import Card from './Card';

const Categories = () => {
	const categoryList = [
		'planets', 
		'spaceships', 
		'vehicles', 
		'people', 
		'films', 
		'species'
	]
	return (
		<div>{
			categoryList.map((category,i)=> {
			return (
				<Card category={category} />
			)
		})
		}
		</div>
	)
}

export default Categories;