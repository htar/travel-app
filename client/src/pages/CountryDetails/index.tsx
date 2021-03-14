import React from 'react'
import {

  useParams
} from "react-router-dom";
import './CountryDetails.scss'

export default function CountryDetails() {
	let id = useParams();
	console.log("id",id);

	return (
			<h1>CountryDetails</h1>

	)
}
