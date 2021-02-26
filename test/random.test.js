const Random = require('../lib/random');
const random = new Random();


describe('Aleatorio', ()=>{

    test('Begin and end negatives', ()=>{
        expect(()=>{
            random.randomNum(-17, 100);
        }).toThrow('-1')
    })

    test('Begin is bigger than end', ()=>{
        expect(()=>{
            random.randomNum(100, 10);
        }).toThrow('-1')
    })

    test('random number', ()=>{
        random.randomNum(1, 99);
        expect(random.num).toBe(random.num);
        console.log(random.num)
       // expect(random.num).toBe(num!=99);
    })

});