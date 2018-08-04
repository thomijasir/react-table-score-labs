import React from 'react'

const Menu = props => {
	return (
		<React.Fragment>
			<div className="row">
				<div className="col-lg-12">
					<form className="form-inline">
						<div className="form-group">
							<input
								type="text"
								className="form-control"
								placeholder="Enter player name.."
								value={props.playerInput}
								name="playerInput"
								onChange={e => props.onPlayerInput(e)}
							/>
						</div>
						<button
							type="submit"
							onClick={e => props.onAddPlayer(e)}
							className="btn btn-primary m-2"
						>
							Add Player
						</button>
					</form>
				</div>
			</div>
			<div className="row">
				<div className="col-lg-12">
					<button
						className="btn btn-danger btn-sm"
						onClick={e => props.onResetDefault(e)}
					>
						Reset to default
					</button>
					<button
						className="btn btn-warning btn-sm m-2"
						onClick={e => props.onResetScores(e)}
					>
						Reset Score
					</button>
				</div>
			</div>
		</React.Fragment>
	)
}

export default Menu
