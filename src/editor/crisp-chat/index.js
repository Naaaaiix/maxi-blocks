/**
 * WordPress dependencies
 */
import { useEffect } from '@wordpress/element';

/**
 * Internal dependencies
 */
import { Button } from '../../components';

/**
 * External dependencies
 */
import { Crisp } from 'crisp-sdk-web';
import classnames from 'classnames';

const CrispChat = ({ className, as: As = Button, children }) => {
	const openChat = () => {
		Crisp.chat.show();
		Crisp.chat.open();
	};

	const closeChat = () => {
		Crisp.chat.hide();
		Crisp.chat.close();
	};

	useEffect(() => {
		Crisp.configure('#############################################');

		if (!window.$crisp?.is) Crisp.chat.hide();
	}, []);

	const classes = classnames('maxi-crisp-chat', className);

	return (
		<As
			className={classes}
			onClick={() =>
				Crisp.chat.isChatOpened() ? closeChat() : openChat()
			}
		>
			{children}
		</As>
	);
};

export default CrispChat;
