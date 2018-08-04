import React from 'react'

const formatScore = score => {
	if (score === 0) {
		return {
			css: 'badge badge-danger',
			value: 'ZERO',
		}
	}

	return {
		css: 'badge badge-primary',
		value: score,
	}
}

const customFieldName = (props, ids, name) => {
	if (props.isPlayerEdit.id === ids && props.isPlayerEdit.status === true) {
		return (
			<form className="form-inline">
				<div className="form-group">
					<input
						type="text"
						className="form-control"
						placeholder="Enter player name.."
						value={props.playerInputEdit}
						name="playerInputEdit"
						onChange={e => props.onPlayerInput(e)}
					/>
				</div>
				<button
					type="submit"
					className="btn btn-primary btn-sm m-2"
					onClick={e => props.onUpdatePlayer(e, ids)}
				>
					Save
				</button>
			</form>
		)
	}
	return (
		<div className="title-name">
			{name}
			<div className="title-edit">
				<button
					className="btn btn-sm btn-success m-2"
					onClick={e => props.onEditPlayer(e, ids)}
				>
					Edit
				</button>
			</div>
		</div>
	)
}

const Table = props => {
	if (props.players.length <= 0)
		return (
			<p className="text-center m-auto">
				No data found! <br /> Please add player..
			</p>
		)
	return (
		<div className="col-lg-12">
			<div className="table-responsive">
				<table className="table table-hover table-bordered ">
					<thead className="thead-dark">
						<tr>
							<th scope="col">ID#</th>
							<th scope="col">Player</th>
							<th scope="col">Score</th>
							<th scope="col">Action</th>
						</tr>
					</thead>
					<tbody>
						{props.players.map(el => (
							<tr key={el.id}>
								<th scope="row">{el.id}</th>
								<td>{customFieldName(props, el.id, el.name)}</td>
								<td className="text-center">
									<span className={formatScore(el.score).css}>
										{formatScore(el.score).value}
									</span>
								</td>
								<td className="text-center">
									<button
										className="btn btn-sm btn-success"
										onClick={e => props.onIncrement(e, el.id)}
									>
										<b>+</b>
									</button>
									<button
										className="btn btn-sm btn-warning m-2"
										onClick={e => props.onDecrement(e, el.id)}
									>
										<b>-</b>
									</button>
									<button
										className="btn btn-sm btn-danger"
										onClick={e => props.onRemovePlayer(e, el.id)}
									>
										<b>x</b>
									</button>
								</td>
							</tr>
						))}
					</tbody>
					<tfoot>
						<tr>
							<td colSpan="2">Total Score All Player</td>
							<td className="text-center">
								<span className={formatScore(props.totalScore).css}>
									{formatScore(props.totalScore).value}
								</span>
							</td>
							<td />
						</tr>
					</tfoot>
				</table>
			</div>
		</div>
	)
}

export default Table
