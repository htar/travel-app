import React, {FunctionComponent} from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import './Footer.scss'

type FooterProps = {
	githubLinks: string[]
}

function Copyright() {
	return (
		<Typography className="copyright" variant="body2" color="textSecondary" align="center">
			<Link color="inherit" href="https://rs.school/js/">
				<img
					className="rss-logo"
					alt="RSS"
					src="https://rs.school/images/rs_school_js.svg"
				/>
			</Link>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	)
}

export const Footer: FunctionComponent<FooterProps> = ({githubLinks}) => {
	return (
		<footer className="footer">
			<Container maxWidth="lg">
				<Typography variant="h6" align="center" gutterBottom>
					{githubLinks.map((link) => {
						return (
							<Link key={link} color="inherit" href={link}>
								Created by {link}
							</Link>
						)
					})}
				</Typography>
				<Copyright />
			</Container>
		</footer>
	)
}
