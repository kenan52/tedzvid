import React from 'react';
import data from '../Data/L21Data.json';
import PlayerRow from '../Helpers/PlayerHelper';
import VjezbeRow from '../Helpers/VjezbeHelper';
import Footer from '../Body/MainFooter';
import { Link } from 'react-router-dom';
import LekcijaMenu from '../Body/LekcijaMenu';

// Bootstrap
import { Row, Col, Container } from 'react-bootstrap';

// Other
import '../App.scss';

function scrollToHash() {
	/* Obtain hash from current location (and trim off leading #) */
	const id = window.location.hash.substr(1);

	if (id) {
		/* Find matching element by id */
		const anchor = document.getElementById(id);

		if (anchor) {
			/* Scroll to that element if present */
			anchor.scrollIntoView();
		}
	}
}

function L21() {
	React.useEffect(() => {
		scrollToHash();
	}, []);
	return (
		<React.Fragment>
			<LekcijaMenu broj="21" naziv="MEDD ARID"></LekcijaMenu>
			<Container>
			<Row>
				<Col>
				<div className="mobileTop">
					<center>
						<img src={process.env.PUBLIC_URL + '/assets/svg/Group 61.svg'} /> 
					</center>
					<h2 className="text-center font-weight-bold text-uppercase" id="lekcija">MEDD ARID</h2>
					</div>
					<h4 className="text-center font-weight-bold">nestalna dužina</h4>
					<hr />
				</Col>
			</Row>

			<Row>
				<Col>
					<br />
				</Col>
			</Row>
			
			<Row>
				<Col className="opisLekcije">
					Kada poslije <strong>dugog vokala</strong> A  <span className="arapski-lekcija">ـــَــ ا</span> , I  <span className="arapski-lekcija"> ـــِـ ى </span>, U{' '}
					<strong>  <span className="arapski-lekcija" style={{fontSize:"1.9em"}}>ـــُــ و</span></strong> dođe <strong>nestalni sukun</strong>, bit će medd arid. Traje 2-4-6
					hareketa.
				</Col>
			</Row>

			<Row>
				<Col>
					<br />
				</Col>
			</Row>

			<Row>
				<Col className="text-center">{PlayerRow(data, 'row1')}</Col>
			</Row>
			<Row>
				<Col className="text-center">{PlayerRow(data, 'row2')}</Col>
			</Row>

			<Row>
				<Col className="text-center">{PlayerRow(data, 'row3')}</Col>
			</Row>

			<Row>
				<Col>
					<br />
				</Col>
			</Row>

			<Row>
				<Col>
					<br />
				</Col>
			</Row>
			
			<h2 className="text-center" id="vjezba"><strong>VJEŽBA</strong></h2>
			<hr />

			<Row>
				<Col>
					<br />
				</Col>
			</Row>

			<Row className="text-center">
				<Col className="mobile-row">
					<span className='tacka'>{VjezbeRow(data, 'vjezba', 'broj6')} ۞</span>
					<span className='tacka'>{VjezbeRow(data, 'vjezba', 'broj7')} ۞</span>
				</Col>
			</Row>

			<Row className="text-center">
				<Col className="mobile-row">
					<span className='tacka'>{VjezbeRow(data, 'vjezba', 'broj8')} ۞</span>
					<span className='tacka'>{VjezbeRow(data, 'vjezba', 'broj9')} ۞</span>
					<span className='tacka'>{VjezbeRow(data, 'vjezba', 'broj10')} ۞</span>
				</Col>
			</Row>

			<Row className="text-center">
				<Col className="mobile-row">
					<span className='tacka'>{VjezbeRow(data, 'vjezba', 'broj11')} ۞</span>
					<span className='tacka'>{VjezbeRow(data, 'vjezba', 'broj12')} ۞</span>
					<span className='tacka'>{VjezbeRow(data, 'vjezba', 'broj13')} ۞</span>
				</Col>
			</Row>

			<Row className="text-center">
				<Col className="mobile-row">
					<span className='tacka'>{VjezbeRow(data, 'vjezba', 'broj14')} ۞</span>
					<span className='tacka'>{VjezbeRow(data, 'vjezba', 'broj15')} ۞</span>
				</Col>
			</Row>

			<Row className="text-center">
				<Col className="mobile-row">
					<span className='tacka'>{VjezbeRow(data, 'vjezba', 'broj16')} ۞</span>
					<span className='tacka'>{VjezbeRow(data, 'vjezba', 'broj17')} ۞</span>
				</Col>
			</Row>
			<Footer prev="/lekcija20" next="/lekcija22" />
			</Container>
		</React.Fragment>
	);
}

export default L21;
