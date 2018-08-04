import React, { Component } from 'react'
import Header from './components/Header'
import Menu from './components/Menu'
import Table from './components/Table'
import './App.css'

class App extends Component {
	state = {
		players: [
			{
				id: 1,
				name: 'Thomi Jasir',
				score: 0,
			},
			{
				id: 2,
				name: 'Aleph Labs',
				score: 0,
			},
		],
		playerInput: '',
		playerInputEdit: '',
		isPlayerEdit: {
			id: 0,
			status: false,
		},
	}

	// HANDLING EVENTS
	handleInputPlayer = e => {
		this.setState({
			[e.target.name]: e.target.value,
		})
		// console.log('Input: ', e.target.value)
	}
	handleAddPlayer = e => {
		e.preventDefault()
		const { playerInput, players } = this.state
		if (playerInput === '') {
			alert('Invalid Empty Player Name')
			return
		}
		const currentPlayer = players
		let lastId = currentPlayer.length <= 0 ? 0 : currentPlayer[currentPlayer.length - 1].id
		let valLastID = (lastId += 1)
		currentPlayer.push({
			id: valLastID,
			name: playerInput,
			score: 0,
		})
		this.setState({
			players: currentPlayer,
			playerInput: '',
		})
	}
	handleResetDefault = e => {
		e.preventDefault()
		const players = [
			{
				id: 1,
				name: 'Thomi Jasir',
				score: 0,
			},
			{
				id: 2,
				name: 'Aleph Labs',
				score: 0,
			},
		]
		this.setState({
			players,
		})
	}
	handleResetScore = e => {
		e.preventDefault()
		const { players } = this.state
		const reset = players.map(result => {
			result.score = 0
			return result
		})
		this.setState({
			players: reset,
		})
	}
	hanldeIncrement = (e, id) => {
		e.preventDefault()
		const players = [...this.state.players]
		const playersID = players.map(item => item.id)
		const playerIndex = playersID.indexOf(id)
		players[playerIndex].score = players[playerIndex].score += 1
		this.setState({ players })
		// console.log('Excute Reset Increment', players)
	}
	handleDecrement = (e, id) => {
		e.preventDefault()
		const players = [...this.state.players]
		const playersID = players.map(item => item.id)
		const playerIndex = playersID.indexOf(id)

		if ((players[playerIndex].score -= 1) < 0) {
			alert('Negative value is invalid!')
		} else {
			players[playerIndex].score = players[playerIndex].score--
			this.setState({ players })
		}
		// console.log('Excute Reset Decrement', id)
	}
	handleRemovePlayer = (e, id) => {
		e.preventDefault()
		const players = [...this.state.players].filter(item => item.id !== id)
		this.setState({ players })
		// console.log('Excute Remove All Player', id)
	}
	handleEditPlayer = (e, id) => {
		e.preventDefault()
		this.setState({
			isPlayerEdit: {
				id,
				status: !this.setState.isPlayerEdit,
			},
		})
		console.log('Player on Edit', id)
	}

	handleEditPlayerUpdate = (e, id) => {
		e.preventDefault()
		if (this.state.playerInputEdit === '') {
			alert('Invalid Empty Player Name')
			return
		}
		const players = [...this.state.players]
		const playersID = players.map(item => item.id)
		const playerIndex = playersID.indexOf(id)
		players[playerIndex].name = this.state.playerInputEdit
		this.setState({ players, playerInputEdit: '', isPlayerEdit: { id: 0, status: false } })
		console.log('Player Edited!')
	}

	// FUNCTION & METHOD
	getTotalScore() {
		let counting = 0
		this.state.players.forEach(d => {
			counting += d.score
		})
		return counting
	}
	render() {
		return (
			<main role="main" className="container content">
				<div className="row header">
					<Header />
				</div>
				<div className="control-menu">
					<Menu
						playerInput={this.state.playerInput}
						onPlayerInput={this.handleInputPlayer}
						onAddPlayer={this.handleAddPlayer}
						onResetDefault={this.handleResetDefault}
						onResetScores={this.handleResetScore}
					/>
				</div>
				<div className="row table-score">
					<Table
						players={this.state.players}
						playerInputEdit={this.state.playerInputEdit}
						totalScore={this.getTotalScore()}
						isPlayerEdit={this.state.isPlayerEdit}
						onIncrement={this.hanldeIncrement}
						onDecrement={this.handleDecrement}
						onRemovePlayer={this.handleRemovePlayer}
						onEditPlayer={this.handleEditPlayer}
						onPlayerInput={this.handleInputPlayer}
						onUpdatePlayer={this.handleEditPlayerUpdate}
					/>
				</div>
			</main>
		)
	}
}

export default App
