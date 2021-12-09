type RecordItem ={
    tags:string[],
    notes:string,
    type:string,
    amount:number,
    createdTime?:Date
}
type Tag={
    id:string,
    name:string
}
type TagModel={
    data:Tag[],
    fetch:()=>Tag[],
    create:(name:string)=>'success'|'duplicated',
    update:(id:string,name:string)=>'success'|'notfound'|'duplicated',
    remove:(id:string)=>boolean,
    save:()=>void
}
interface Window {
    tagList: Tag[];
    createTag: (name: string) => void;
}