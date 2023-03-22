/**
 * WordPress dependencies
 */
import { SVG, Path } from '@wordpress/primitives';

const button = (
	<SVG viewBox='0 0 24 24'>
		<Path
			d='M2.5 12.5v-10h19.1v10.1m-6.1.8c-.2 0-.3 0-.5.1-.1-.2-.2-.4-.4-.6-.2-.1-.4-.2-.7-.2-.2 0-.4.1-.6.1-.1-.2-.2-.4-.4-.5-.2-.1-.4-.1-.6-.1-.1 0-.3 0-.4.1v-1.4c0-.3-.1-.6-.3-.8-.2-.3-.5-.4-.9-.4-.3 0-.6.1-.8.4-.2.2-.4.5-.4.8v4.9l-.9-1c-.1-.1-.3-.2-.4-.3s-.3-.1-.4-.1c-.2 0-.3 0-.5.1-.1.1-.3.2-.3.3-.2.2-.3.4-.3.8 0 .3 0 .6.3.9.2.4.5.8.8 1.2.1.2.3.6.6 1.1.4.7.7 1.1.9 1.3.1.2.4.7.8 1.5 0 .1.1.1.1.1.1.1.2.1.3.1h5.2c.1 0 .2 0 .3-.1.1 0 .1-.1.2-.2.2-.6.4-1.1.5-1.7.3-1.1.4-1.9.4-2.3v-2.8c0-.3-.1-.6-.4-.8-.6-.3-.8-.5-1.2-.5zm-13-.5l4.1-.1M18 13l3.6-.1'
			fill='none'
			stroke='#ff4a17'
			strokeWidth={1.5}
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</SVG>
);

export default button;
