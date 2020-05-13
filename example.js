//=============================================================================
//
//  Auto resolution width detection
//
//  Author : Dimitri DERTHE
//
//  example.js v1.0
//=============================================================================
 
//=============================================================================

// Define our standard image resolutions width
var array = ['50', '261', '385', '493', '578', '659', '736', '805', '872', '940', '1002', '1062', '1127', '1185', '1242', '1311', '1367', '1425', '1433', '1440']

/**
 * Function finding the closest resolution width
 * 
 * @class closestRes
 * @param array $array    Array of predefined resolution width
 * @param int $img_width  Intrinsec image width     
 * 
 */
function closestRes(array,img_width){
    console.log('Res. to check:', img_width)
    var i=0
    var minDiff=1000
    var ans=null
    for(i in array){
        var m=Math.abs(img_width-array[i])
        if(m<minDiff){ 
            minDiff=m
            ans=array[i]
        }  
    }
    if(!ans){
        ans=array[array.length-1]
        console.log('Return max def.', ans)
    }
    console.log('Returned resolution:', ans)
    return ans
}

closestRes(array, document.getElementById(<IMG_ID>).clientWidth);