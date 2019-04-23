import Vue from 'vue';
import moment from 'moment';

Vue.filter('uppercase', function (str) {
	return str.toUpperCase();
})
Vue.filter('lowercase', function (str) {
	return str.toLowerCase()
})
Vue.filter('truncate', function (str, length, truncation) {
	length = length || 30
	truncation = typeof truncation === "string" ? truncation : "..."
	return str.length > length ? str.slice(0, length - truncation.length) + truncation : String(str)
})
Vue.filter('moment', function (str) {
	return moment().format(str) || moment().format('MMMM Do YYYY');
})
