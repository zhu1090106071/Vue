import Vue from 'vue'
import 'jquery'
import 'uikit'
import 'uikit-css'

export default{
	install(Vue, options){
		Vue.prototype.$ui = {
		   // ... 省略
		   confirm : function(question,callback,cancelCallback,options) {
		        UIkit.confirm(question,
		        callback || callback.apply(this),
		        cancelCallback || cancelCallback.apply(this),options)
	   		}
		}
	}
}