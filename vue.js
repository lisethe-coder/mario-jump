'use strict';
var app = new Vue({
	el: '#app',
	data: {
		coinsCounter: 0,
		isBounce: false,
		isJump: false,
		isAppear: false,
	},
	methods: {
		getMarioJump() {
			this.isBounce = true;
			this.isJump = true;
			this.isAppear = true;
		},
		removeAnimation() {
			this.isAppear = false;
			this.isBounce = false;
			this.coinsCounter++;
		}
	}
});
