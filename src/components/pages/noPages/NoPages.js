import React, { useState } from 'react'

import styles from '../noPages/NoPages.module.scss'
import CardBasket from '../CardToBasket'
function NoPages({ basket, setBasket }) {
	return (
		<>
			{basket.longth !== 0 ? (
				<CardBasket basket={basket} setBasket={setBasket} />
			) : (
				<div className={styles.root}>
					<span>😢</span>
					<h1>no page</h1>
				</div>
			)}
		</>
	)
}

export default NoPages
