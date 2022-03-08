import { useTime } from 'lib/hooks';
import { getTime } from 'pages/api/time';

import { GitHubButton } from 'components/GitHubButton';

interface Props {
	time: number;
}

export default function Home(props: Props) {
	const { data: { time } = props } = useTime();

	return (
		<div>
			<h1>Hello, World</h1>
			<p>The current time is {time}</p>
			<div style={{ margin: '18px' }}>
				<GitHubButton />
			</div>
		</div>
	);
}

export async function getStaticProps() {
	const { time } = getTime();

	return {
		props: {
			time,
		},
	};
}
