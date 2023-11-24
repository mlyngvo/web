import React from 'react';
import {Box, FlexContainer, Icon, Text, Theme, Wrapper} from './theme';
import styled from 'styled-components';
import {GithubIcon, LinkedInIcon} from './icons';

import portrait from './assets/portrait.png';

export function App() {
	function handleEmailClick() {
		location.href = 'mailto:contact@minhlynguyenvo.com';
	}

	return (
		<Theme>
			<Wrapper>
				<Box>
					<FlexContainer>
						<div style={{flexGrow: 1}}>
							<Text inverted variant='p'>Hello there!</Text>
							<Text inverted variant='h1'>I&apos;m Ly Nguyen</Text>
							<Text variant='h2' color='secondary'>Software Engineer</Text>
							<Text inverted variant='p'>From Austria 🇦🇹</Text>
							<br/>
							<LinkedIconList>
								<LinkedIconBtn href='https://github.com/mlyngvo' icon='github' />
								<LinkedIconBtn href='https://linkedin.com/in/mlyngvo' icon='linkedIn' />
								<LinkedIconBtn icon='email' onClick={handleEmailClick} />
							</LinkedIconList>
						</div>
						<PortraitWrapper>
							<Portrait />
						</PortraitWrapper>
					</FlexContainer>
				</Box>
			</Wrapper>
		</Theme>
	);
}

const LinkedIconList = styled.div`
	display: flex;
	flex-direction: row;
	& > a {
		margin-left: 1rem;
		&:first-child {
			margin-left: 0;
		}
	}
`;

function LinkedIconBtn({href, onClick, icon}: {icon: 'github' | 'linkedIn' | 'email'; href?: string; onClick?: () => void}) {
	const Wrapper = styled.a`
		display: inline-flex;
		text-decoration: none;
		justify-content: center;
		align-items: center;
		font-size: 2rem;
		line-height: 0;
		background: rgba(255,255,255,0.1);
		padding: 1rem 0.8rem;
		border-radius: 10px;
		cursor: pointer;
		color: #fff;
		transition: background-color linear 150ms;
		&:hover {
			background: #fff;
			color: var(--primary-color);
		}
	`;
	return (
		<Wrapper href={href} target='_blank' onClick={onClick}>
			{icon === 'github' && <GithubIcon />}
			{icon === 'linkedIn' && <LinkedInIcon />}
			{icon === 'email' && <Icon>mail</Icon>}
		</Wrapper>
	);
}

const PortraitWrapper = styled.div`
	width: 300px;
	position: relative;
	bottom: -2rem;
	right: -2rem;
	line-height: 0;
	@media screen and (max-width: 1024px) {
		display: none;
	}
`;
function Portrait() {
	const Image = styled.img`
		width: 100%;
		height: auto
	`;
	return (
		<Image src={portrait as string} alt='Ly NGUYEN' />
	);
}

