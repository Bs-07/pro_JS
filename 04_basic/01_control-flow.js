//  if

// < , > , <= , >= , == , != , === , !==

// if(2!='2'){
//     console.log(`executed.`);
// }

const balance= 1000;

// if(balance!=1001) console.log(`you ara eligible for enroll.`);

if(balance<500){
    console.log(`much less`);
} else if(balance>500 && balance <=800){
    console.log(`ok ok`);       
}else if(balance >800 && balance <=1000){
    console.log(`good`);
}else{
    console.log(`excellent great`);
}