import React from 'react'

export const Layout = ({ children }) => {
	return (
		<React.Fragment>
			<div className='container mx-auto px-2'>{children}</div>
		</React.Fragment>
	)
}