//Define our standard image resolutions
//Can be automated by bucket listing and memory cache for performance
var array = ['50', '261', '385', '493', '578', '659', '736', '805', '872', '940', '1002', '1062', '1127', '1185', '1242', '1311', '1367', '1425', '1433', '1440']

//Function finding the closest resolution for the user
function closestRes(array,num){
    console.log('Res. to check:', num)
    var i=0
    var minDiff=1000
    var ans=null
    for(i in array){
        var m=Math.abs(num-array[i])
        if(m<minDiff){ 
            minDiff=m
            ans=array[i]
        }  
    }
    if(!ans){
        //If can't find best resolution, return highest resolution
        ans=array[array.length-1]
        console.log('Return max def.', ans)
    }
    console.log('Returned resolution:', ans)
    return ans
}

closestRes(array, document.getElementById(id_image).clientWidth);