class Aleatorio{


    check(bgn, end){
        if(bgn<0 || end<0){
            throw '-1'
        }

        if(bgn >=end){
            throw '-1'
        }
    }

    randomNum(bgn, end){
        this.check(bgn, end);
        let diff = (end - bgn + 1)+ bgn;
       this.num = Math.floor(Math.random() * diff );
        
    }

}

module.exports = Aleatorio;