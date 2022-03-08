import styled from 'styled-components';

import { motion } from 'framer-motion';
import { FiGithub } from 'react-icons/fi';

export function GitHubButton() {
	return (
		<MotionButton
			href="https://github.com/iGalaxyYT/next-template"
			target="_blank"
			whileHover={{ scale: 0.97 }}
			whileTap={{ scale: 0.9 }}
		>
			<FiGithub /> View Source
		</MotionButton>
	);
}

const MotionButton = motion(styled.a`
	color: white;
	text-decoration: none;

	background-color: rgba(255, 255, 255, 0.05);
	border: 1px solid rgb(39, 41, 46);
	border-radius: 4px;

	padding: 16px;

	width: 115px;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;

	transition: box-shadow 0.05s;

	&:hover {
		background-color: rgba(255, 255, 255, 0.1);
		box-shadow: 0px 0px 4px rgba(255, 255, 255, 0.5);
	}
`);
