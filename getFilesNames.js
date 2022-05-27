var fs = require('fs');
let components = []
// const files = fs.readdir('./')
// fs.readdir('./geoJSon', function(err, files) {
//     if (err) {
//         throw err;
//     }
//     // files是一个数组
//     // 每个元素是此目录下的文件或文件夹的名称
//     let arr=files.map(item=>{
//         let obj={
//             file_name:item.split(".")[0],
//             isCheckedLayer:true,//是否可以选择显示的layer，true添加到selectLayersData数据中

//         }
//         return obj
//     })
//     // console.log(arr);
// });
var files = fs.readdirSync("./"); 
console.log(files);
