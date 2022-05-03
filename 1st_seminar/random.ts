interface Member {
    name: string;
    group: string;
}

interface Dinner {
    member: Member[];
    shuffle: {
        (array: Array<Member>): Array<Member>;
    };
    organize: {
        (array: Array<Member>): void;
    };    
}

const dinner: Dinner = {
    member: [
        {
            name: '채정아',
            group: 'ob'
        },
        {
            name: '이우진',
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
    shuffle(array) {
        array.sort(() => Math.random() - 0.5);
        return array;
    },
    organize(array) {
        this.shuffle(array);
        const dinnerMember: Array<String> = [
            array[0].name, array[1].name,
        ]
        console.log(`오늘의 저녁 식사 멤버는 ${dinnerMember[0]}, ${dinnerMember[1]}`);
    }
};

dinner.organize(dinner.member);
