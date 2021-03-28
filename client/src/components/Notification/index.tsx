import React from 'react'
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert'
import './Notification.scss'

function Alert(props: any) {
	return <MuiAlert elevation={6} variant="filled" {...props} />
}

export const Notification = (props: any) => {
	const {
		duration = 6000,
		open,
		status = 'success',
		message = 'This is a success message!',
	} = props
	const [openAlert, setOpen] = React.useState(open || false)

	const handleClose = (event: any, reason: string) => {
		if (reason === 'clickaway') {
			return
		}

		setOpen(false)
	}
	return (
		<Snackbar
			open={openAlert}
			autoHideDuration={duration}
			onClose={handleClose}
		>
			<Alert onClose={handleClose} severity={status}>
				{message}
			</Alert>
		</Snackbar>
	)
}
