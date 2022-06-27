const size = {
  mobile: '500px',
  tablet_max: '1023px',
  desktop: '1024px',
  chart_desk: '801px',
  chart_mobile_max: '800px',
 }

export const device = {
  mobile: `(max-width: ${size.mobile})`,
  tablet: `(max-width: ${size.tablet_max})`,
  desktop: `(min-width: ${size.desktop})`
};

export const types_status = {
	'reschedule': 'yellow',
	'default': 'blue',
	'done': 'green',
	'late': 'red'
};