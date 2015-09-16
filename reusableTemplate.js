var library = (function(){
	return {
		// Utility --- Complete Functions Below
		identity : function(val) {
			return (val);
			
		},

		// Collections --- Complete Functions Below
		each : function(list, iterator) {
			if (Array.isArray(list)) {
              for (var i = 0; i < list.length; i++)
                  iterator(list[i], i, list);
             	} else if (list instanceof Object) {
             	for (var key in list)
                  iterator(list[key], key, list);
         		} else if (list === null) {
             	return list;
               	}
		},

		filter : function(list, test){	
			var arr = [];
			for (var index = 0; index < list.length; index++) {
				if (test(list[index])) {
					arr.push(list[index]);
				}
			}
			return arr;
		},
		
		reject : function(list, test) {	
			var arr = [];
			for (var index = 0; index < list.length; index++) {
				if (!test(list[index])) {
				arr.push(list[index]);	
				}
			}
			return arr;
		},

		map : function(list, iterator) {
			var arr = [];
			for (var i = 0; i < list.length; i++) {
				var dragon = iterator(list[i]);
				arr.push(dragon);
			}
			return arr;
			
		},

		pluck : function(list, key) {
			return this.map(list, function(item){
				return item[key];
			});
		},
		reduce : function(list, iterator, accumulator) {
			if (accumulator == undefined) {
				accumulator = list[0];
			}
			for (var index = 0; index < list.length; index++) {
				accumulator = iterator(accumulator, list[index]);
				}
				return accumulator;
		},

		every : function(list, iterator) {
				if (list.length == 0) {
				return true;
			}
				if (iterator == undefined) {
				iterator = this.identity;
			}
				for (var index = 0; index < list.length; index++) {
				if(!iterator(list[index])) {
				return false;
				}		
			}
			return true;
		},

		some : function(list, iterator) {
			if (list.length == 0) {
				return false;
			}
			if (iterator == undefined) {
				iterator = this.identity;
			}
			for (var index = 0; index < list.length; index++) {
				if(iterator(list[index])) {
					return true;
				}
			}
			return false;
		},

		contains : function(list, target) {
				if (list.constructor === Array) {
			for (var index = 0; index < list.length; index++) {
				if (list[index] == target){
					return true;
				}
			}
			} else {
				for (var index = 0; index < Object.keys(list).length; index++) {
				var key = Object.keys(list)[index];
				if (list[key] == target) {
					return true;
				}
				}
			}
			return false;
		},

		// Advanced Collections --- Complete Functions Below
		shuffle : function(array) {
			/*for (var index = array.length-1 ; index > 0; index--) {
				var j = Math.floor(Math.random() * (index +1));
				var temp = array[index];
				array[index] = array[j];
				array[j] = temp;
			}
			console.log(array);
			return array;*/
			var shuffArr = [];
			if ( array.length == 1 ) {
				return array[0];
			}
			shuffArr[array.length-1] = array[0];
			for (var i=1; i<array.length; i++) {
				//console.log(array);
				shuffArr[i-1] = array[i];
				//console.log(shuffArr);
			}
			return shuffArr;
		},

		invoke : function(list, methodName, args) {
			var arr = [];
			if (typeof methodName == "function"){
			for (var index = 0; index < list.length; index++) {
				//console.log(list[index]);
				arr.push(methodName.call(list[index]));
			}
			}if (typeof methodName == "string") {
				for (var index = 0; index < list.length; index++) {
					arr.push(list[index][methodName]());
				}
			}
			//console.log(('cat').toUpperCase());
			return arr;
		},

		sortBy : function(list, iterator) {
			
			
		},

		// Objects --- Complete Functions Below
		extend : function(obj) {},

		defaults : function(obj) {},

		// Arrays --- Complete Functions Below
		first : function(array, n) {
			return n === undefined ? array[0] : array.slice(0, n);
		},

		last : function(array, n) {
			if (n > array.length) {
                // We passed in a number greater than the length of the array. So we should just return the whole array.
                return array;
            } else {
                if (n === undefined) {
                    // If we didn't pass a number n, return the last element of the array.
                    return array[array.length -1];
                } else {
                    // Otherwise (aka we did pass a number in), return the last n elements of the array (last 3 elements, last 4, etc.)
                    return array.slice(array.length -n);
				}
			}
		},

    		indexOf : function(array, target){
            	for(var i = 0, len = array.length; i < len; i++) {
               		if (array[i] === target){
				   		return i;
				  	}
				}
				return -1;
		},
		
		uniq : function(array) {
			var arr2 = [];
			for(var i = 0, len = array.length; i < len; i++){
				if(library.indexOf(arr2, array[i]) === -1){
					arr2.push(array[i])
				}
			}
				return arr2;	
			},       
		// Advanced Arrays --- Complete Functions Below
		zip : function() {},

		flatten : function(nestedArray, result) {},

		intersection : function() {},

		difference : function(array) {},

		// Functions --- Complete Functions Below
		once : function(func) {
			var hasBeenCalled = false;
			return function(){
				if(hasBeenCalled === false) {
					hasBeenCalled = true;
					func();
				}
			}
		},

		memoize : function(func) {},

		delay : function(func, wait) {}
	}
})();

