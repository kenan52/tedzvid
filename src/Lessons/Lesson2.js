import React from 'react';
import data from '../Data/L2Data.json';
import PlayerRow from '../Helpers/PlayerHelper';
import VjezbeRow from '../Helpers/VjezbeHelper';
import Footer from '../Body/MainFooter';
import { Link } from 'react-router-dom';
import LekcijaMenu from '../Body/LekcijaMenu';

// Bootstrap
import { Row, Col, Table, Container } from 'react-bootstrap';

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

function L2() {
	React.useEffect(() => {
		scrollToHash();
	}, []);
	return (
		<React.Fragment>
		<LekcijaMenu broj="2" naziv="Damir"></LekcijaMenu>
		<Container>
			<Row>
				<Col>
					<div className="mobileTop">
						<center>
							<img src={process.env.PUBLIC_URL + '/assets/svg/Group 61.svg'} /> 
						</center>
						
						<h2 className="text-center font-weight-bold text-uppercase" id="lekcija">Damir</h2>
					</div>
					<h4 className="text-center"><strong>izgovaranje zamjenice HU (هُ)</strong></h4>
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
					Kada prije zamjenice <strong>HU (<span className="arapski-lekcija "> هُ</span>)</strong> dođe <strong>dugi vokal </strong>A  <span className="arapski-lekcija">ـــَــ ا</span> , I <span className="arapski-lekcija">ـــِـ ى </span>, U <span className="arapski-lekcija">ـــُــ و</span>  ili
					<strong> sukun <span className="arapski-lekcija">ــــْـــ</span></strong>  , zamjenica <strong>HU (<span className="arapski-lekcija">هُ</span>)</strong> se uči <u>kratko</u>:
				</Col>
			</Row>

			<Row className="text-center">
				<Col>{PlayerRow(data, 'row1')}</Col>
			</Row>

			<Row className="text-center">
				<Col>{PlayerRow(data, 'row2')}</Col>
			</Row>

			<Row>
				<Col className="opisLekcije">
					Kada prije zamjenice <strong>HU (<span className="arapski-lekcija">هُ</span>)</strong> dođe  
					<strong> kratki vokal</strong> E <span className="arapski-lekcija">ــــَـــ</span>  , I <strong><span className="arapski-lekcija">ــــِــ </span></strong>  
					 ili U <strong><span className="arapski-lekcija">ــــُـــ</span></strong> 
					, zamjenica <strong>HU (<span className="arapski-lekcija">هُ</span>)</strong> se uči <u>dugo</u>:
				</Col>
			</Row>

			<Row className="text-center">
				<Col>{PlayerRow(data, 'row3')}</Col>
			</Row>

			<Row className="text-center">
				<Col>{PlayerRow(data, 'row4')}</Col>
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

			<Row className="text-center">
				<Col className="mobile-row">
					<span className='tacka'>{VjezbeRow(data, 'vjezba', 'broj18')} ۞</span>
					<span className='tacka'>{VjezbeRow(data, 'vjezba', 'broj19')} ۞</span>
				</Col>
			</Row>
			<Row className="text-center">
				<Col className="mobile-row">
					<span className='tacka'>{VjezbeRow(data, 'vjezba', 'broj20')} ۞</span>
					<span className='tacka'>{VjezbeRow(data, 'vjezba', 'broj21')} ۞</span>
				</Col>
			</Row>
			<Row className="text-center">
				<Col className="mobile-row">
					<span className='tacka'>{VjezbeRow(data, 'vjezba', 'broj22')} ۞</span>
				</Col>
			</Row>

			<Footer prev="/lekcija1" next="/lekcija3" />
			</Container>
		</React.Fragment>
	);
}

export default L2;
