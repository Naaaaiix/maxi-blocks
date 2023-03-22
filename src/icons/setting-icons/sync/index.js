/**
 * WordPress dependencies
 */
import { SVG, Path } from '@wordpress/primitives';

const sync = (
	<SVG preserveAspectRatio='none' width={24} height={24} viewBox='0 0 24 24'>
		<defs>
			<Path
				d='M21.95 2.05L21.9 2Q20.3.4 18 .4 15.75.4 14.1 2q-.023.025-.05.05l-4.8 4.8q-.663.663-1.05 1.45-.695.363-1.3.95l-.45.45v.05l-4.4 4.35q-.661.661-1.05 1.45-.55 1.12-.55 2.5 0 2.3 1.65 3.9 1.6 1.6 3.85 1.6t3.9-1.6l6.6-6.7q.334-.244.65-.55l4.85-4.85q1.6-1.6 1.6-3.9 0-2.25-1.6-3.9m-11.4 8.55h.25q1.15 0 1.9.75v-.05q.75.802.75 1.85v.2h-.25q-1.1 0-1.9-.8-.75-.8-.75-1.85v-.1m-1.3 4.05l.05.05q.955.955 2.15 1.35l-3.6 3.85q-.8.8-1.9.8-1.05 0-1.85-.75-.8-.8-.8-1.9 0-1.15.8-1.85l3.8-3.8q.372 1.241 1.35 2.25M18 3.35q1.1 0 1.9.8.75.8.75 1.85 0 1.2-.85 1.9l-3.7 3.7q-.371-1.27-1.4-2.3h.05q-.454-.454-1-.8-.637-.417-1.4-.65l3.7-3.7q.9-.8 1.95-.8z'
				id='sync__b'
			/>
		</defs>
		<use xlinkHref='#sync__b' />
	</SVG>
);

export default sync;
