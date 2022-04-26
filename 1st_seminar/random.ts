// interface Member {
//     name: string;
//     group: string;
// }

// interface Dinner {
//     member: Member[];
//     shuffle: {
//         (array: Member[]): Member[];
//     };
//     organize: {
//         (array: Member[]): void;
//     };    
// }

// const dinner: Dinner = {
//     member: [
//         {
//             name: '채정아',
//             group: 'ob'
//         },
//         {
//             name: '이우진',
//             group: 'yb'
//         },
//         {
//             name: '강민재',
//             group: 'yb'
//         },
//         {
//             name: '김루희',
//             group: 'ob'
//         },
//         {
//             name: '박진수',
//             group: 'ob'
//         }
//     ],
//     shuffle(array) {
//         array.sort(() => Math.random() - 0.5);
//         return array;
//     },
//     organize(array) {
//         this.shuffle(array);
//         // const dinnerMember: Array<String> = [
//         //     array[0].name, array[1].name,
//         // ]
//         // console.log(`오늘의 저녁 식사 멤버는 ${dinnerMember[0]}, ${dinnerMember[1]}`);
//         const ob: Object = array.find((member) => member.group === 'ob');
//         const yb: Object = array.find((member) => member.group === 'yb');
//         console.log(yb)
//         const dinnerMember: string[] = [ob.name, yb.name];
//         console.log(
//           `오늘의 저녁 식사 멤버는 ${dinnerMember[0]}, ${dinnerMember[1]}`
//         );        
//         // console.log(`오늘의 저녁 식사 멤버는 ${ob.name}, ${yb.name}`)
//     }
    
// };

// dinner.organize(dinner.member);

interface Member {
    name: string;
    group: string;
};

interface Dinner {
  member: Member[];
  shuffle(members: Member[]): Member[];
  organize(members: Member[]): void;
};


const dinner: Dinner = {
  member: [
    {
      name: '채정아',
      group: 'ob',
    },
    {
      name: '김동재',
      group: 'yb',
    },
    {
      name: '강민재',
      group: 'yb',
    },
    {
      name: '김루희',
      group: 'ob',
    },
    {
      name: '박진수',
      group: 'ob',
    },
  ],
  shuffle(array) {
    array.sort(() => Math.random() - 0.5);
    return array;
  },
  organize(array) {
    this.shuffle(array);

    const ob = array.find((mem) => mem.group === 'ob');
    const yb = array.find((mem) => mem.group === 'yb');


    if (ob && yb) {
      const dinnerMember: string[] = [ob.name, yb.name];
      console.log(
        `오늘의 저녁 식사 멤버는 ${dinnerMember[0]}, ${dinnerMember[1]}`
      );
    }
  },
};

dinner.organize(dinner.member);
