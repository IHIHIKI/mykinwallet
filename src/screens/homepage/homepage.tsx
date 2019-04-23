import React, { useEffect } from 'react';
import Template from 'src/components/pageTemplate/template';
const IndexPage = () => {
	return (
		<Template step={1} title={{ main: 'My Kin Wallet', sub: 'Send Kin from your account' }}>
			<Homepage />
		</Template>
	);
};

interface IHompage {
	props: {
		store: {
			errors: string[];
		};
		actions: object[];
	};
}

const Homepage: React.FunctionComponent<IHompage> = props => {

	return 'asdasd';
};
export default IndexPage;
