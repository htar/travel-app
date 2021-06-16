import React, {FunctionComponent} from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import './Footer.scss'

type FooterProps = {
	githubLinks: string[]
}

function Copyright() {
	return (
		<Typography
			className="copyright"
			variant="body2"
			color="textSecondary"
			align="center"
		>
			<a color="inherit" href="https://rs.school/js/" target="_blank">
				<img
					className="rss-logo"
					alt="RSS"
					src="https://rs.school/images/rs_school_js.svg"
				/>
			</a>
		</Typography>
	)
}

export const Footer: FunctionComponent<FooterProps> = ({githubLinks}) => {
	return (
		<footer>
			<Container className="footer" maxWidth="lg">
				<Typography variant="h6" align="center" gutterBottom>
					{githubLinks.map((link, index) => {
						return (
							<span className="footer-github" key={index}>
								Created {new Date().getFullYear()}. by
								<a key={link} color="inherit" href={link} target="_blank">
									{link}
									<img className="github-logo" src="/GitHub.png" />
								</a>
							</span>
						)
					})}
				</Typography>
				<Copyright />
			</Container>
		</footer>
	)
}
