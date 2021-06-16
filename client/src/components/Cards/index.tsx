import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import {Link} from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import './Cards.scss'

const cards = [1, 2, 3, 4]
export const Cards = () => {
	return (
		<Container className="cardGrid">
			{/* End hero unit */}
			<Grid container spacing={4}>
				{cards.map((card) => (
					<Grid item key={card} xs={12} sm={6} md={4}>
						<Link
							to={`/country/${card}`}
						>
							<Card className="card">
								<CardMedia
									className="cardMedia"
									image="https://source.unsplash.com/random"
									title="Image title"
								/>
								<CardContent className="cardContent">
									<Typography gutterBottom variant="h5" component="h2">
										Heading
									</Typography>
									<Typography>
										This is a media card. You can use this section to describe
										the content.
									</Typography>
								</CardContent>
							</Card>
						</Link>
					</Grid>
				))}
			</Grid>
		</Container>
	)
}
