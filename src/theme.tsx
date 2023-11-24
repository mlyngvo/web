import '@fontsource-variable/figtree/wght.css';
import './fonts/material-icons/index.css';
import React, {Fragment, type PropsWithChildren} from 'react';
import styled, {createGlobalStyle} from 'styled-components';
import Favicon from 'react-favicon';
import favicon from './assets/favicon.ico';

const Styled = createGlobalStyle`
	:root {
		--primary-color: black;
		--secondary-color: #009688;
		--gray-color: #616161;
	}
	* {
		box-sizing: border-box;
		margin: 0;
	}
	body {
		font-family: 'Figtree Variable', serif;
		font-weight: 300;
		font-size: 1.2rem;
		line-height: 1.2em;
	}
	h1 {
		font-size: 3rem;
		font-weight: 700;
		line-height: 1.4em;
	}
	h2 {
		font-size: 1.5rem;
		font-weight: 400;
		line-height: 1.4em;
	}
	
`;

export function Theme({children}: PropsWithChildren) {
	return (
		<Fragment>
			<Favicon url={favicon as string} />
			<Styled />
			{children}
		</Fragment>
	);
}

export const Wrapper = styled.div`
	display: flex;
	min-height: calc(100vh);
	flex-direction: row;
	justify-content: center;
	align-items: center;
`;

export const Box = styled.div`
	width: 768px;
	padding: 2rem;
	border-radius: 20px;
	background: var(--primary-color);
	overflow: hidden;
	box-shadow: 0 0 15px rgba(0,0,0,0.4);
	@media screen and (max-width: 1024px) {
		width: 580px;
	}
	@media screen and (max-width: 620px) {
		width: 420px;
	}
	@media screen and (max-width: 480px) {
		width: calc(100% - 2rem);
	}
`;

export const FlexContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
`;

type TextVariant = 'h1' | 'h2' | 'h3' | 'p' | 'span';
type TextColor = 'primary' | 'secondary' | 'textSecondary';
type TextProps = {
	variant: TextVariant;
	color?: TextColor;
	inverted?: boolean;
	className?: string;
};
export const Text = ({variant, color, children, inverted, className}: PropsWithChildren<TextProps>) => {
	let textColor;
	switch (color) {
		case 'primary':
			textColor = 'var(--primary-color)';
			break;
		case 'secondary':
			textColor = 'var(--secondary-color)';
			break;
		case 'textSecondary':
			textColor = 'var(--gray-color)';
			break;
		default:
			textColor = inverted ? 'white' : 'black';
	}

	const Component = styled[variant]`
		color: ${textColor}
	`;
	return (
		<Component className={className}>{children}</Component>
	);
};

export const Icon = ({color, children}: PropsWithChildren<{color?: string}>) => <span className='material-icons' style={{color, fontSize: 'inherit'}}>{children}</span>;
