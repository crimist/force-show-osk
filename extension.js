import Clutter from 'gi://Clutter';

let
	seat = null,
	originalGetTouchMode = null;

export default class ForceShowOSK {
	enable() {
		seat = Clutter.get_default_backend().get_default_seat();
		originalGetTouchMode = seat.get_touch_mode;
		seat.get_touch_mode = () => true;
	}

	disable() {
		seat.get_touch_mode = originalGetTouchMode;
	}
}
