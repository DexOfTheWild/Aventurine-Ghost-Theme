(function($) {

	skel.init({
		reset: 'full',
		breakpoints: {

			// Global.
				global: {
					href: '/assets/css/style.css',
                    containers: 1400,
					grid: {
						gutters: ['3em', '1.5em']
					}
				},

			// XLarge.
				xlarge: {
					media: '(max-width: 1680px)',
                    containers: 960,
					href: '/assets/css/style-xlarge.css',
				},

			// Large.
				large: {
					media: '(max-width: 1280px)',
					href: '/assets/css/style-large.css',
                    containers: 960,
					viewport: {
						scalable: false
					}
				},

			// Medium.
				medium: {
					media: '(max-width: 980px)',
					href: '/assets/css/style-medium.css',
					containers: '90%',
					grid: {
						zoom: 2
					}
				},

			// Small.
				small: {
					media: '(max-width: 736px)',
					href: '/assets/css/style-small.css',
					containers: '90%',
					grid: {
						zoom: 3,
						gutters: ['1.25em', 0]
					}
				},

			// XSmall.
				xsmall: {
					media: '(max-width: 480px)',
					href: '/assets/css/style-xsmall.css',
					grid: {
						zoom: 4
					}
				}

		},
		plugins: {
			layers: {

				// Config.
					config: {
						transform: true
					},

				// Navigation Panel.
					navPanel: {
						animation: 'pushY',
						breakpoints: 'medium',
						clickToHide: true,
						height: '100%',
						hidden: true,
						html: '<div data-action="moveElement" data-args="nav"></div>',
						orientation: 'vertical',
						position: 'top',
						side: 'top',
						width: '100%',
                        height: '30%',
					},

				// Navigation Button.
					navButton: {
						breakpoints: 'medium',
						height: '1.75em',
						html: '<span class="toggle" data-action="toggleLayer" data-args="navPanel"></span>',
						position: 'top',
						side: 'top',
						width: '3.5em'
					}

			}
		}
	});

	$(function() {

	});

})(jQuery);
