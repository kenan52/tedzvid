import React, { useState } from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { BsArrowLeft } from 'react-icons/bs';
import { Link } from 'react-router-dom';
// Bootstrap
import { Container } from 'react-bootstrap';

function LekcijaMenu(props) {
	const [ isHidden, toggleIsHidden ] = useState(true);

	const toggleIsHiddenHandler = () => {
		toggleIsHidden(!isHidden);
	};
	return (
		<React.Fragment>
			<div className="topNav">
				<div className="logoNavBox">
					<Link to="/">
						<img
							className="logoUrl"
							src={process.env.PUBLIC_URL + '/assets/svg/logoUrl.png'}
							alt="logo url"
						/>
					</Link>
				</div>
				<div className="nav">
					<ul>
						<Link to={'/lekcije'}>
							<img
								style={{ marginTop: '11px' }}
								src={process.env.PUBLIC_URL + '/assets/svg/ic_trending_flat_24px.png'}
								alt="trending flat"
							/>
							<li style={{ color: 'black' }}>NAZAD NA LEKCIJE</li>
						</Link>
					</ul>
				</div>
			</div>
			<div className="topMobileNav">
				<img
					className="hamburger"
					src={process.env.PUBLIC_URL + '/assets/svg/hamburger.svg'}
					alt="hamburger menu icon"
					onClick={toggleIsHiddenHandler}
				/>
				<Link to="/">
					<img
						className="mobileLogo"
						src={process.env.PUBLIC_URL + '/assets/svg/mobileLogo.png'}
						alt="mobile logo"
					/>
				</Link>
				<div>
					<Link to={'/lekcije'}>
						<BsArrowLeft size={32} className="mobNavArrow" />
					</Link>
				</div>

				<div className={isHidden ? 'hide' : 'fullMenu'}>
					<h3 className="closeBTN" onClick={toggleIsHiddenHandler}>
						<AiOutlineCloseCircle />
					</h3>
					<center>
						<ul>
							<Link to={'/lekcije'}>
								<li className="selectedBtn">LEKCIJE</li>
							</Link>
							<Link to={'/'}>
								<li className="selectedBtn">NASLOVNA</li>
							</Link>
							<a href="/#contact" onClick={toggleIsHiddenHandler}>
								<li>KONTAKT</li>
							</a>
							<a href="/#impresum" onClick={toggleIsHiddenHandler}>
								<li>O NAMA</li>
							</a>
						</ul>
					</center>
				</div>
			</div>
			<Container className="height50px">
				<div className="lekcijaTop">
					<h2 style={{ float: 'left', marginRight: '20px' }} className="text-uppercase">
						{props.broj}
					</h2>
					<h2 style={{ float: 'left' }} className="text-uppercase">
						{props.naziv}
					</h2>
					<img
						style={{ float: 'right', width: '12px', marginTop: '15px' }}
						className="logoUrl"
						src={process.env.PUBLIC_URL + '/assets/svg/Polygon 3.svg'}
						alt="Polygon 3"
					/>
				</div>
			</Container>
		</React.Fragment>
	);
}

export default LekcijaMenu;
