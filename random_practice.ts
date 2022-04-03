interface Member {
    name: string;
    group: string;
}

interface Dinner {
    member: Member[];
    shuffle?: {
        (array: Array<Member>): object;
    };
    organize: {
        (array: Array<Member>): void;
    };    
}

const dinner2: Dinner = {
    member: [
        {
            name: '채정아',
            group: 'ob'
        },
        {
            name: '김동재',
            group: 'yb'
        },
        {
            name: '강민재',
            group: 'yb'
        },
        {
            name: '김루희',
            group: 'ob'
        },
        {
            name: '박진수',
            group: 'ob'
        }
    ],
    organize(array) {
        console.log('hi');
    }
};

dinner2.organize(dinner2.member as Member[]);