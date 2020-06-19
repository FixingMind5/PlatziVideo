import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { videoRequest } from '../actions'
import NotFound from '../components/NotFound'

import '../assets/styles/Player.scss'

const Player = props => {
	const { id } = props.match.params;
	const [loading, setLoading] = useState(true)
	const hasVideo = Object.keys(props.playing).length > 0

	useEffect(() => {
		props.videoRequest(id)
		setLoading(false)
	}, [])

	if (loading) return <h2>Cargando el vidio...</h2>

	return hasVideo ? (
		<div className="Player">
			<video controls autoPlay>
				<source src={props.playing.source} type="video/mp4" />
			</video>
			<div className="Player-back">
				<button type="button" onClick={() => props.history.goBack()}>
					Regresar
				</button>
			</div>
		</div>
	) : <NotFound />
}

const mapStateToProps = state => {
	return {
		playing: state.playing
	}
}

const mapDispathTopProps = {
	videoRequest,
}

export default connect(mapStateToProps, mapDispathTopProps)(Player);