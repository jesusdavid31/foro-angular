export class Topic{
    //Dentro del constructor definiremos las propiedades que va tener el objeto
    constructor(
        public _id: string,
        public title: string,
        public content: string,
        public code: string,
        public lang: string,
        public date: string,
        public user: any,
        public comments: any
    ){}
}