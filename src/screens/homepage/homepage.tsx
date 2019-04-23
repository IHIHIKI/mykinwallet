import React, { useEffect, useState } from 'react';
import Template from 'src/components/pageTemplate/template';
import Message from 'src/components/messages/info';
import { H3, H6 } from 'common/selectors';
import WalletPathItem from 'src/components/box/WalletPathItem';
import { ItemsContainer, HeaderContainer } from 'src/screens/homepage/style';
import { InputPremade as Input } from 'src/components/antd/components';

const IndexPage = () => {
	return (
		<>
			<Template github={true} step={1} title={{ main: 'My Kin Wallet', sub: 'Send Kin from your account' }}>
				<Homepage />
			</Template>
		</>
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
	const [errors, setErrors] = useState([]);
	useEffect(() => {
		{
			/** clean list of errors on unmount */
		}
		return () => setErrors([]);
	});
	const parseErrors = aErrors => {
		return aErrors.map((oError, i) => {
			const { head, text } = oError;
			return <Message head={head} text={text} />;
		});
	};
	return (
		<div>
			{/** parse list of errors */}
			{parseErrors(errors)}
			<HeaderContainer>
				<H3>Access my wallet</H3>
				<H6>Choose a method to access your account:</H6>
				
			</HeaderContainer>
			<ItemsContainer>
				<WalletPathItem name="Ledger" link="ledger" />
				<WalletPathItem alert name="Key pair wallet" link="wallet" />
			</ItemsContainer>
		</div>
	);
};
export default IndexPage;
