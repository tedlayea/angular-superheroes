let superherosData = [
  { name: 'Mark Zuckerberg', phoneNumber: "1111111111", comicsAffiliation: "Facebook", imageURL: "http://i.dailymail.co.uk/i/pix/2011/05/05/article-1384071-0D180CCC000005DC-866_306x438.jpg" },
  { name: 'Bao', phoneNumber: "2222222222", comicsAffiliation: "Cat walk", imageURL: "https://s-media-cache-ak0.pinimg.com/originals/4c/6b/9c/4c6b9c6a2db08115425ac42ed19bf02f.png" },
  { name: 'Bill Gates', phoneNumber: "3333333333", comicsAffiliation: "Microsoft", imageURL: "https://static.pulse.com.gh/img/incoming/origs4289062/1480483874-w980-h640/bill-gates.jpg" },
  { name: 'Rob', phoneNumber: "444444444", comicsAffiliation: "Happy hour", imageURL: "http://s2.quickmeme.com/img/7b/7b19d62040d38945378ddc8251aa07cb8b18df1972c8e83737d1b98076b9fbae.jpg" },
]

angular.module('superherosApp',[])
       .controller('SuperherosController',[SuperherosControllerFunction])
function SuperherosControllerFunction(){
  this.superheross = superherosData;
  this.detailSuperheros =function (){
      console.log("detail");
    }
  this.searchSuperheros =function (){
      console.log("serach");
      let keyword = {name: this.searchSuperheros}
    }
}
