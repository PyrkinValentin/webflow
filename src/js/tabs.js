//Можно было и без ифии - tabsInit()

(() => {
	const tabs = document.querySelectorAll('.tabs')

	if (tabs.length) {
		tabs.forEach(tab => {
			const tabNav = tab.querySelectorAll('.tabs-nav li')
			const tabContents = tab.querySelectorAll('.tabs-content__item')

			if (tabNav.length !== tabContents.length) throw new Error('Incorrect number of tabs specified')

			const handleClick = e => {
				const target = e.target
				const isNav = target.closest('li')
				const isActive = target.closest('.active')

				if (!isNav || isActive) return

				tabNav.forEach((item, key) => {
					item.classList.remove('active')

					target === item
						? tabContents[key].classList.add('_show')
						: tabContents[key].classList.remove('_show')
				})

				target.classList.add('active')
			}

			tab.addEventListener('mousedown', handleClick)
		})

		return
	}

	throw new Error('Tabs undefined')
})()
