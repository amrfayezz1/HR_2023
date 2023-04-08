export class Form{
    constructor(id,name,from, to, reason){
        this.id=id;
        this.name=name;
        this.from=from;
        this.to=to;
        this.reason=reason;
        this.status= "Submitted";
    }
}

const f1 = new Form(1,"Amr","2023-05-12", "2023-05-19", "sickness");
const f2 = new Form(2,"Amr","2023-05-12", "2023-05-19", "sickness");

export const forms = [f1,f2];