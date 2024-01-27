import { useState } from 'react'

const arrayChoose = [
	'Все',
	'Мясные',
	'Вегетарианская',
	'Гриль',
	'Острые',
	'Закрытые'
]
function Categories({ value, onClickCategoty }) {
	let [chooseCategory, setChooseCAtegory] = useState(0)
	return (
		<div className='categories'>
			<ul>
				{arrayChoose.map((categoryName, ind) => (
					<li
						key={ind}
						onClick={() => onClickCategoty(ind)}
						className={value === ind ? 'active' : ''}
					>
						{categoryName}
					</li>
				))}
			</ul>
		</div>
	)
}
export default Categories
