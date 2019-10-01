import React from 'react';
import data from '../Data/L6Data.json';
import Footer from '../Body/MainFooter';
import VjezbeRow from '../Helpers/VjezbeHelper';

// Bootstrap
import { Row, Col } from 'react-bootstrap';

// Other
import '../App.scss';
import Arabic from '../Letters/Arabic';
import Player from '../Player/Player';

function L6() {
	const r1 = data.row1.map((dat) => {
		return (
			<span key={'key' + dat.id}>
				<Player url={dat.url} key={'p' + dat.id}>
					<Arabic arabic={dat.highlight} key={'a' + dat.id}>
						{dat.word}
					</Arabic>
				</Player>{' '}
				{dat.after === 'break' ? <br /> : dat.after}
			</span>
		);
	});

	const r2 = data.row2.map((dat) => {
		return (
			<span key={'key' + dat.id}>
				<Player url={dat.url} key={'p' + dat.id}>
					<Arabic arabic={dat.highlight} key={'a' + dat.id}>
						{dat.word}
					</Arabic>
				</Player>{' '}
				{dat.after === 'break' ? <br /> : dat.after}
			</span>
		);
	});

	const r3 = data.row3.map((dat, ind) => {
		return (
			<Arabic arabic={dat.highlight} key={'a' + dat.id}>
				{dat.word}
			</Arabic>
		);
	});

	return (
		<React.Fragment>
			<Row>
				<Col>
					<h2 className="text-center font-weight-bold">IDGAM MEAL-GUNNEH</h2>
					<h4 className="text-center">uklapanje sa propuštanjem zraka kroz nos</h4>
					<hr />
				</Col>
			</Row>

			<Row>
				<Col className="opisLekcije">
					Kada poslije harfa N sa sukunom (نْ) ili tenvina EN ــــــًــــــ, IN ـــــٍــــــ , UN ــــــٌـــــ
					dođe jedan od četiri harfa: <Arabic bold={true}>ي م ن و</Arabic> (sadržana u riječi jemnu –
					يَمْنُو), dolazi do uklapanja harfa N (ن) u jedan od spomenuta četiri harfa, propuštajući zrak kroz
					nos u trajanju od 2 hareketa, npr.:
				</Col>
			</Row>

			<Row className="text-center">
				<Col>{r1}</Col>
			</Row>

			<Row className="text-center">
				<Col>{r2}</Col>
			</Row>

			<Row className="text-center">
				<Col>
					<span key={'key' + data.row3[0].id}>
						<Player url={data.row3[0].url} key={'p' + data.row3[0].id}>
							{r3}
						</Player>
					</span>{' '}
					{data.row3[0].after}
				</Col>
			</Row>

			<h2 className="text-center">Vježbe</h2>
			<hr />

			<Row className="text-center">
				<Col>
					۞
					{VjezbeRow(data, 'vjezba', 'broj9')}
					۞
					{VjezbeRow(data, 'vjezba', 'broj8')}
				</Col>
			</Row>

			<Row className="text-center">
				<Col>
					۞
					{VjezbeRow(data, 'vjezba', 'broj10')}
				</Col>
			</Row>

			<Row className="text-center">
				<Col>
					۞
					{VjezbeRow(data, 'vjezba', 'broj12')}
					۞
					{VjezbeRow(data, 'vjezba', 'broj11')}
				</Col>
			</Row>

			<Row className="text-center">
				<Col>
					۞
					{VjezbeRow(data, 'vjezba', 'broj14')}
					۞
					{VjezbeRow(data, 'vjezba', 'broj13')}
				</Col>
			</Row>

			<Footer prev="/lekcija5" next="/lekcija7" />
		</React.Fragment>
	);
}

export default L6;
