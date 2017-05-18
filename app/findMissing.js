module.exports=function findMissing(arr1,arr2){

		for (var i=0;i<arr1.length;i++){

			if (arr2.indexOf(arr1[i])===-1){

				return arr1[i];
			}
			
		}
		for (var j=0;j<arr2.length;j++){

			if (arr1.indexOf(arr2[j])===-1){

				return arr2[j];
			}
			
		}
		return 0;
	}