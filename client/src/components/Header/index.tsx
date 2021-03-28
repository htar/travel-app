import React, {MouseEvent} from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import {Link} from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search'
import AccountCircle from '@material-ui/icons/AccountCircle'
import classes from './Header.module.scss'

export const Header = () => {
	const handleProfileMenuOpen = (event: MouseEvent) => {
		console.log('handleProfileMenuOpen', event)
		// setAnchorEl(true)
	}

	const menuId = 'primary-search-account-menu'

	return (
		<AppBar>
			<Toolbar className={classes.header}>
				<div className={classes.leftSide}>
					<span className={classes.logo}>
						<Link to="/">Travel app</Link>
					</span>
					<div className={classes.search}>
						<div className={classes.searchIcon}>
							<SearchIcon />
						</div>
						<input
							placeholder="Search…"
							autoFocus
							className={classes.input}
						/>
					</div>
				</div>
				<div className={classes.sectionDesktop}>
					<IconButton
						edge="end"
						aria-label="account of current user"
						aria-controls={menuId}
						aria-haspopup="true"
						onClick={handleProfileMenuOpen}
						color="inherit"
					>
						<AccountCircle />
					</IconButton>
				</div>
			</Toolbar>
		</AppBar>
	)
}
